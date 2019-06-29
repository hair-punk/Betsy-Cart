const cassandra = require("cassandra-driver");
const async = require('async');
const dataGen = require('./dataGen.js')
const executeConcurrent = cassandra.concurrent.executeConcurrent;
const distance = cassandra.types.distance;
const retryPolicy = new cassandra.policies.retry.RetryPolicy()
retryPolicy.onWriteTimeout = function (info, consistency, received, blockFor, writeType) {
  console.log('insert failed, retrying');
  this.retryResult;
};

const client = new cassandra.Client({
  socketOptions: { readTimeout: 0 },
  contactPoints: ['127.0.0.1'], keyspace: 'temp', localDataCenter: 'datacenter1', policies: { retry: retryPolicy }, pooling: {
    coreConnectionsPerHost: {
      [distance.local]: 5,
      [distance.remote]: 5
    }
  }
})
client.connect((err) => {
  if (err) { console.log(err); }
});
(async function start() {
  var failedcount = 0;
  await client.execute("DROP KEYSPACE IF EXISTS cartitems2").then(async () => {
    console.log('dropped cartitems');
    await client.execute("CREATE KEYSPACE IF NOT EXISTS cartitems2 WITH replication = {'class':'SimpleStrategy', 'replication_factor':1}").then(() => {
      console.log('created keyspace cartitems')
      client.execute("USE cartitems", function () {
        console.log('switched to keyspace cartitems');
      });
    }).then(async () => {
      await client.execute('CREATE TABLE cartitems2.items (id INT PRIMARY KEY, title ASCII, company ASCII, colors set<ASCII>, price DECIMAL, shippingPrice DECIMAL, description SET<ASCII>, stars double, numStars INT, quantity INT, location ASCII, deliveryMin INT, deliveryMax INT, url ASCII, peopleWantThis INT)');
      console.time('clock')
      var date = new Date();
      console.log(date.toLocaleTimeString('en-US'))
      await async.timesSeries(50000, seed)
      // await seed();
      console.timeEnd('clock')
      await client.shutdown().then(() => {
        // console.log(failedcount, ' failed')
        console.log('cassandra connection shut down')
      });
    })
  })
  async function seed(ind) {
    // console.log(ind);
    var batchsize = 200;
    var batchparams = [];
    for (var j = 0; j < batchsize; j++) {
      batchparams.push([JSON.stringify(dataGen(j + batchsize * ind))])
    }
    await executeConcurrent(client, 'INSERT INTO cartitems2.items JSON ?;', batchparams, { isIdempotent: true, prepare: true }, 40, false).catch((err) => {
      console.log(err, 'retrying query');
      failedcount++;
    })

  }
})()
