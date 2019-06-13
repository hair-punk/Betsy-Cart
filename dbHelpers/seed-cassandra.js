const cassandra = require("cassandra-driver");
const async = require('async');
const dataGen = require('./dataGen.js')


const retryPolicy = new cassandra.policies.retry.RetryPolicy()
const operationInfo = { query: 'INSERT INTO cartitems.items JSON ?;', nbRetry: 0 };
// retryPolicy.onWriteTimeout= function(operationInfo, 10, 0, 1, 'SIMPLE') {
retryPolicy.onWriteTimeout = function (info, consistency, received, blockFor, writeType) {
  console.log('insert failed, retrying');
  this.retryResult;
};

const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace: 'temp', localDataCenter: 'datacenter1', policies: { retry: retryPolicy } })
client.connect((err) => {
  if (err) {
    console.log(err);
  }
});
(async function start() {

  var failedcount = 0;
  await client.execute("DROP KEYSPACE IF EXISTS cartitems").then(async () => {
    console.log('dropped cartitems');
    await client.execute("CREATE KEYSPACE IF NOT EXISTS cartitems WITH replication = {'class':'SimpleStrategy', 'replication_factor':1}").then(() => {
      console.log('created keyspace cartitems')
      client.execute("USE cartitems", function () {
        console.log('switched to keyspace cartitems');
      });
    }).then(async () => {
      await client.execute('CREATE TABLE cartitems.items (id INT PRIMARY KEY, title ASCII, company ASCII, colors set<ASCII>, price DECIMAL, shippingPrice DECIMAL, description SET<ASCII>, stars double, numStars INT, quantity INT, location ASCII, deliveryMin INT, deliveryMax INT, url ASCII, peopleWantThis INT)');
      console.time('clock')
      var date = new Date();
      console.log(date.toLocaleTimeString('en-US'))
      await async.timesLimit(1000000, 20, seed)
      console.timeEnd('clock')
      await client.shutdown().then(() => {
        console.log(failedcount, ' failed')
        console.log('cassandra connection shut down')
      });
    })
  })
  async function seed(id) {
    await client.execute('INSERT INTO cartitems.items JSON ?;', [JSON.stringify(dataGen(id))], { isIdempotent: true, prepare: true }).catch((error) => {
      console.log(error.message, error.code, id, ' rejected')
      failedcount++;
      // console.log('retrying');
      // seed(id);
    })
  }
})()
// async function seed(id) {
//   await client.execute('INSERT INTO cartitems.items JSON ?;', [JSON.stringify(dataGen(id))]).catch((error) => {
//     console.log(error, ' rejected')
//   })
// }