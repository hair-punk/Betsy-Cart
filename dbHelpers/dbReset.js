const db = require('./db.js');
const seeds = require('./seeder.js');

db.dropCollection();

// This is simply for a npm script - this is the go-to  database script. The programmer should not need to use npm run drop or npm run seed. This does both.

db.create(seeds, (err, seeds) => {
	if (err) {
		console.log('err');
	} else {
		console.log('Seeded the database - - - - - - - - !!');
	}
	return;
});
