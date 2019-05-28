const db = require('./db.js');

db.dropCollection();

// this is simply for an npm Script. The programmer will not need to use this though. ~npm run reset     is all you need to work with the DB seeder. Drop and seed are kinda depreciated, lol.
