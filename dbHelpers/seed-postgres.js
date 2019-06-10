const { Pool, Client } = require('pg');
const dataGen = require('./dataGen.js')

const databasename = 'cartitems';
const tablename = 'items';
(async function seed() {
  await wipe();
  //   await populate();
})()

async function wipe() {
  const pool = new Pool({
    user: "postgres",
    password: 'password',
    port: 5432,
    database: 'postgres'
  });
  await pool.connect(async (err, client, done) => {
    if (err) throw err;
    else {
      await client.query('DROP DATABASE IF EXISTS ' + databasename, async function (err) {
        if (err) {
          console.log(err)
        } else {
          console.log("deleted database", databasename)
          client.query('CREATE DATABASE ' + databasename, async function (err) {
            if (err)
              console.log(err);
            else {
              console.log('created databse', databasename);
              pool.end();
              await createTable()
            }
          }
          );
        }
      })
    }


  })

}

// async function insertEntry(num) {
//   return new Promise(async function (resolve) {
//     console.log('ta daa')
//   })
// }

async function createTable() {
  const Populator = new Pool({
    user: "postgres",
    password: 'password',
    port: 5432,
    database: 'cartitems'
  });
  await Populator.connect(async (err, client, done) => {
    if (err) {
      console.log('Populate coudnlt connect');
    } else {
      console.log('populator connected');
      await client.query('CREATE TABLE ' + tablename + '(id INT NOT NULL PRIMARY KEY, title JSON);', async function (err) {
        if (err) {
          console.log(err)
        } else {
          await populate(client);
          console.log('created table');
          Populator.end()
          process.exit(0)

        }
      })
    }
  })
}
async function populate(client) {
  console.time('loadtimer');
  console.log('inserting item entries');
  await client.query('ALTER TABLE ' + tablename + ' SET (autovacuum_enabled = false, toast.autovacuum_enabled = false)')
  var batchsize = 1000;
  for (var i = 0; i < 10000000 / batchsize; i++) {
    var batch = [];
    var values = '';
    for (var j = 0; j < batchsize; j++) {
      var temp = dataGen(i * batchsize + j)
      batch.push(temp.id, temp);

    }
    values += '($1,$2)'
    for (var j = 3; j < batchsize * 2; j += 2) {
      values += ',($' + j + ',$' + (j + 1) + ')';

    }
    await client.query('INSERT INTO ' + tablename + '(id,title) VALUES' + values + ';', batch)
  }
  console.timeEnd('loadtimer')
}
