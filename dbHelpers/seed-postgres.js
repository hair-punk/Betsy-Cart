const { Pool, Client } = require('pg');


// const connectionString = 'postgres://postgres:password@localhost:5432/cartitems';
// const pool = new Pool(connectionString);
const databasename = 'cartitems';
const tablename = 'items';
// var item = {
//id, '',
//   title: '',
//   company: '',
//   colors: [],
//   price: '',
//   shippingPrice: '',
//   description: '',
//   stars: '',
//   numStars: '',
//   quantity: '',
//   location: '',
//   deliveryMin: '',
//   deliveryMax: '',
//   url: '',
// };
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
              await populate()
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

async function populate() {
  const Populator = new Pool({
    user: "postgres",
    password: 'password',
    port: 5432,
    database: 'cartitems'
  });
  await Populator.connect((err, client, done) => {
    if (err) {
      console.log('Populate coudnlt connect');
    } else {
      console.log('populator connected');
      client.query('CREATE TABLE ' + tablename + '(id INT NOT NULL PRIMARY KEY, info json NOT NULL)', function (err) {
        if (err) {
          console.log(err)
        } else {
          console.log('created table');
          Populator.end()
          process.exit(0)

        }
      })
    }
  })
  // for (var x = 0; x < 1000; x++) {
  //   await pool.query('SELECT NOW()');
  // }
  // pool.end();
}