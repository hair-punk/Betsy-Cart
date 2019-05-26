const db = require('./db.js');
const seeds = require('./seeder.js');

// this is simply for an npm Script. The programmer will not need to use this though. ~npm run reset     is all you need to work with the DB seeder. Drop and seed are kinda depreciated, lol.

db.create(seeds, (err, seeds) => {
	if (err) {
		console.log('err');
	} else {
		console.log('Seeded the database - - - - - - - - !!');
	}
});
