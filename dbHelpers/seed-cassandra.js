const cassandra = require("cassandra-driver");
//const port = 7000
var authProvider = cassandra.auth.PlainTextAuthProvider('cassandra-user', 'password');
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
      await seed()
      await client.shutdown().then(() => {
        console.log('cassandra connection shut down')
      });
    })
  })
})()
async function seed() {
  await client.execute('CREATE TABLE cartitems.items (id INT PRIMARY KEY, title TEXT, company TEXT, colors set<text>, price DECIMAL, shippingPrice DECIMAL, description SET<TEXT>, stars double, numStars INT, quantity INT, location TEXT, deliveryMin INT, deliveryMax INT, url TEXT, peopleWantThis INT)');
  console.time('clock')
  var date = new Date();
  console.log(date.toLocaleTimeString('en-US'))
  var batchsize = 2
  for (var i = 0; i < 10000000 / batchsize; i++) {
    //  var batch = [];
    for (var j = 0; j < batchsize; j++) {
      var temp = dataGen(i * batchsize + j);
      // batch.push({ query: 'INSERT INTO cartitems.items JSON ?', params: [JSON.stringify(temp)] })
      await client.execute('INSERT INTO cartitems.items JSON ?;', [JSON.stringify(temp)]);
      console.log(j)
    }
    // console.log(i)
    //  await client.batch(batch);
    //  console.log(i);
  }
  console.timeEnd('clock')
}