const cassandra = require("cassandra-driver");
const port = 7000
var authProvider = cassandra.auth.PlainTextAuthProvider('cassandra-user', 'password');

const client = new cassandra.Client({ contactPoints: ['127.0.0.1:9042'], keyspace: 'temp', localDataCenter: 'datacenter1' })

client.connect((err) => {
  if (err) {
    console.log(err);
  }
});
// client.execute("DROP KEYSPACE IF EXISTS cartitems", function () {

//   console.log('keyspace cartitems dropped');

// });
// client.execute("CREATE KEYSPACE IF NOT EXISTS cartitems WITH replication = {'class':'SimpleStrategy', 'replication_factor':2}", function () {

//   console.log('keyspace created');

// });
// client.execute("USE cartitems", function () {

//   console.log('switched to keyspace cartitems');

// });
(async function start() {

  await client.execute("DROP KEYSPACE IF EXISTS cartitems").then(async () => {
    console.log('dropped cartitems');
    await client.execute("CREATE KEYSPACE IF NOT EXISTS cartitems WITH replication = {'class':'SimpleStrategy', 'replication_factor':2}").then(() => {
      console.log('created keyspace cartitems')
      client.execute("USE cartitems", function () {
        console.log('switched to keyspace cartitems');

      });
    }).then(() => {
      seed()
    });
  })

})()

async function seed() {
  await client.execute('CREATE TABLE cartitems.items (id UUID PRIMARY KEY, data MAP<text,text>)')
}