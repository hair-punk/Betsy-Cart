const { Pool, Client } = require('pg');
const dataGen = require('./dataGen.js')

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
          // for (var x = 0; x < 10; x++) {
          //   // await populate(x);

          //   console.log(x);
          //   var obj = dataGen(x);
          //   await client.query('INSERT INTO ' + tablename + '(id, info) VALUES(' + 1 + ', ' + 2 + ');', async function (err, res) {
          //     if (err) {
          //       console.log(err)
          //     } else {
          //       console.log('added object ' + x + res.rows[0])
          //     }
          //   })
          // }

          // client.query("SELECT * from " + tablename + ';', async function (err, res) {

          //   if (err) {
          //     console.log(err);
          //   } else {
          //     console.log(res.rows[0])
          //   }
          // });



          Populator.end()
          process.exit(0)

        }
      })
    }
  })
}
async function populate(client) {
  console.time('loadtimer');
  console.log('populate called')
  for (let i = 0; i < 100000; i += 6) {
    var obj = dataGen(i)
    var obj2 = dataGen(i + 1);
    var obj3 = dataGen(i + 2);
    var obj4 = dataGen(i + 3);
    var obj5 = dataGen(i + 4);
    var obj6 = dataGen(i + 5);
    await client.query('INSERT INTO ' + tablename + '(id,title) VALUES($1,$2),($3,$4),($5,$6),($7,$8),($9,$10),($11,$12);', [obj.id, obj, obj2.id, obj2, obj3.id, obj3, obj4.id, obj4, obj5.id, obj5, obj6.id, obj6]).catch((err) => {
      console.log(err);
    })
  }

  console.timeEnd('loadtimer')
}




  // console.log('executes');
  // await client.query('INSERT INTO ' + tablename + '(id, info) VALUES(' + 2 + ', ' + 3 + ');', async function (err, res) {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     console.log('added object ' + x + res.rows[0])
  //   }
  // })
  // await Populator.connect(async (err, client, done) => {
  //   if (err) {
  //     console.log('err happened', err)
  //   } else {
  //     console.log('populating')
  //     for (var x = 0; x < 10; x++) {
  //       console.log(x);
  //     }
  //   }

  // })
  // var obj = dataGen(id);
  // client.query('INSERT INTO ' + tablename + '(id, info) VALUES (' + id + ', ' + JSON.stringify(obj) + ')', async function (err) {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     console.log('added object ' + id)
  //   }
  // })