const cassandra = require("cassandra-driver");
const async = require('async');
const dataGen = require('./dataGen.js')

const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace: 'temp', localDataCenter: 'datacenter1' })
client.connect((err) => {
  if (err) {
    console.log(err);
  }
});
(async function start() {
  await client.execute("DROP KEYSPACE IF EXISTS cartitems").then(async () => {
    console.log('dropped cartitems');
    await client.execute("CREATE KEYSPACE IF NOT EXISTS cartitems WITH replication = {'class':'SimpleStrategy', 'replication_factor':2}").then(() => {
      console.log('created keyspace cartitems')
      client.execute("USE cartitems", function () {
        console.log('switched to keyspace cartitems');
      });
    }).then(async () => {
      await client.execute('CREATE TABLE cartitems.items (id INT PRIMARY KEY, title TEXT, company TEXT, colors set<text>, price DECIMAL, shippingPrice DECIMAL, description SET<TEXT>, stars double, numStars INT, quantity INT, location TEXT, deliveryMin INT, deliveryMax INT, url TEXT, peopleWantThis INT)');
      console.time('clock')
      var date = new Date();
      console.log(date.toLocaleTimeString('en-US'))
      await async.timesLimit(10000000, 5, seed)
      console.timeEnd('clock')
      await client.shutdown().then(() => {
        console.log('cassandra connection shut down')
      });
    })
  })
})()
async function seed(id) {
  console.log(id);
  await client.execute('INSERT INTO cartitems.items JSON ?;', [JSON.stringify(dataGen(id))]).catch(() => {
    console.log(id, ' rejected')
  })
}