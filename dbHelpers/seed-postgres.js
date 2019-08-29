const { Pool, Client } = require('pg');
const dataGen = require('./dataGen.js')
const async = require('async');

const databasename = 'cartitems';
const tablename = 'items';
(async function seed() {
  await wipe();
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
      await client.query('CREATE TABLE ' + tablename + '(id INT NOT NULL PRIMARY KEY, data JSON);', async function (err) {
        if (err) {
          console.log(err)
        } else {
          console.log('created table');
          await populate(client);
          Populator.end()
          process.exit(0)
        }
      })
    }
  })
}
async function populate(client) {
  var date = new Date();
  var batchsize = 1000;
  var values = '($1,$2)';
  for (let x = 3; x < batchsize * 2; x += 2) {
    values += ',($' + x + ',$' + (x + 1) + ')';
  }
  await client.query('ALTER TABLE ' + tablename + ' SET (autovacuum_enabled = false, toast.autovacuum_enabled = false)');
  await client.query('ALTER SYSTEM SET shared_buffers = "' + 4096 + 'MB";')
  await client.query('ALTER SYSTEM SET wal_buffers = "' + 1024 + 'MB";')
  await async.timesLimit(10000, 80, seed)
  async function seed(id) {
    var batch = [];
    for (let x = 0; x < batchsize; x++) {
      batch.push(id * batchsize + x);
      batch.push(dataGen(id * batchsize + x));
    }
    await client.query('BEGIN;');
    await client.query('INSERT INTO ' + tablename + '(id,data) VALUES' + values + ';', batch)
    await client.query('COMMIT')
  }
}

