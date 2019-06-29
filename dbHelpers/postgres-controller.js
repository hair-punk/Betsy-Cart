const { Pool } = require('pg');

var databaseName = 'cartitems';
var tableName = 'items';
const pool = new Pool({
  user: "postgres",
  password: 'password',
  port: 5432,
  database: databaseName
});

pool.connect(async (err, client, release) => {
  if (err) {
    console.log('could not connect to db');
  } else {
    console.log('connected, client released back to pool');
  }
});

function getOne(id, callback) {
  return pool.query('Select * FROM ' + tableName + ' WHERE id =' + id, (err, result) => {
    if (err) {
      console.log('error in controller during getOne')
    } else {
      callback(null, result.rows[0].data);
    }
  });
}

module.exports = { getOne }