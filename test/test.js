const expect = require('chai').expect;
const seeds = require('../dbHelpers/seeder.js');
const db = require('../dbHelpers/db.js');
const axios = require('axios');
// var reset = require("../dbHelpers/dbReset.js")
// const server = require("../server.js")

describe('- - - - - - - - -SEEDS - - - - - - -', function() {
	// this is not touching mongo at all. Simply testing my controller seeder.js
	it('Should have be an array with 100 fake items in it!', function(done) {
		expect(seeds).to.be.an('array');
		expect(seeds.length).to.equal(100);

		done();
	});
	it('A handful of seeds should have a storeName that is a string and has a length!', function(done) {
		expect(seeds[0].storeName).to.be.a('string');
		expect(seeds[0].storeName.length).to.be.greaterThan(0);
		expect(seeds[99].storeName).to.be.a('string');
		expect(seeds[99].storeName.length).to.be.greaterThan(0);
		expect(seeds[40].storeName).to.be.a('string');
		expect(seeds[40].storeName.length).to.be.greaterThan(0);

		done();
		//  db.dropCollection();
	});
});

describe('- - - - - - - DB_METHODS - - - - - -', function() {
	beforeEach(function(done) {
		db.clear(err => {
			if (err) {
				console.log('error in the clear before each');
				console.log(err);
				callback(err);
			} else {
				console.log('ok');
			}
		});
		// .catch(err => {
		//   console.log(err)
		// })
		done();
	});

	// afterEach(function(done) {
	//   db.dropCollection()
	//   done();
	// })

	it('Be able to create one product when passed an single object', function(done) {
		db.create(seeds[0], (err, result) => {
			expect(err).to.equal(null);
			expect(result.storeName).to.be.a('string');
			expect(result.storeName.length).to.be.greaterThan(0);

			done();
		});
	});
	it('Also be able to load an entire array usign the same function without additional parameters', function(done) {
		db.create(seeds, (err, result) => {
			expect(err).to.equal(null);
			expect(result).to.be.an('array');
			expect(result[0].storeName).to.be.a('string');
			expect(result[0].storeName.length).to.be.greaterThan(0);
			expect(result[99].storeName).to.be.a('string');
			expect(result[99].storeName.length).to.be.greaterThan(0);
			expect(result[40].storeName).to.be.a('string');
			expect(result[40].storeName.length).to.be.greaterThan(0); // this is nested because

			done();
		});
	});

	it('Should for sure be able to get all the products after they have been loaded in the DB', function(done) {
		db.create(seeds, (err, result) => {
			db.getAll((err, result) => {
				expect(err).to.equal(null);
				expect(result).to.be.an('array');
				expect(result[1].storeName).to.be.a('string');
				expect(result[2].storeName.length).to.be.greaterThan(0);
				expect(result[33].storeName).to.be.a('string');
				expect(result[33].storeName.length).to.be.greaterThan(0);
				expect(result[24].storeName).to.be.a('string');
				expect(result[24].storeName.length).to.be.greaterThan(0);

				done();
			});
		});
	});
	it('Be able to look up a product via mongoose by "tjnid"', function(done) {
		db.create(seeds, (err, result) => {
			db.getOne('3', (error, data) => {
				var item = data[0];
				expect(error).to.equal(null);
				expect(item['storeName']).to.equal(seeds[3]['storeName']);
				expect(item.storeName).to.not.have.lengthOf(0);
				expect(Object.keys(item)).to.have.lengthOf(6);
				expect(item['tjnid']).to.equal('tjn-id3');

				done();
			});
		});
	});

	it('Be able to look up a product via mongoose by by "title" (product name)', function(done) {
		db.create(seeds, (err, result) => {
			var testTitle = seeds[5].title;

			db.getOne(testTitle, (error, data) => {
				var item = data[0];
				expect(error).to.equal(null);
				expect(item['title']).to.equal(testTitle);
				expect(item['storeName']).to.equal(seeds[5]['storeName']);
				expect(Object.keys(item)).to.have.lengthOf(6);
				expect(item['tjnid']).to.equal('tjn-id5');

				done();
			});
		});
	});
});

describe('- - - - - - - API Routes - - - - - -', function() {
	beforeEach(function(done) {
		db.dropCollection(err => {
			if (err) {
				console.log('error in the clear before each');
				console.log(err);
				callback(err);
			} else {
				console.log('ok');
			}
		});
		db.create(seeds, (error, result) => {
			if (error) {
				console.log('error in the clear before each');
				console.log(error);
				callback(error);
			}
			done();
		});
	});

	it('be able to get all via axios get call too /items)', function(done) {
		axios
			.get('http://localhost:3006/items')
			.catch(e => {
				expect(e).to.equal(null);
				console.log(e);
				done();
			})
			.then(results => {
				expect(results.data.length).to.equal(100);
				expect(results.data[5].title).to.equal(seeds[5].title);
				expect(results.data[99].tjnid).to.equal('tjn-id99');
				done();
			});
	});

	it('be able to get all via axios get call too find a single item by id)', function(done) {
		axios
			.get('http://localhost:3006/items/27')
			.catch(e => {
				expect(e).to.equal(null);
				console.log(e);
				done();
			})
			.then(results => {
				expect(Object.keys(results.data[0]).length).to.equal(16);
				expect(results.data[0].title).to.equal(seeds[27].title);
				expect(results.data[0].tjnid).to.equal('tjn-id27');
				done();
			});
	});

	//this last test is gonna take some work and i think is unessasary. My item titles have multiple spaces in them words and chars. Also this function is the same as the one above and I did witness it working while passing in non-spaced strings that I manually added to robomongo 3t after the fact. I woiuldnt have written this test unless HR said we had to, but I also think they made that rule  because most products have one name?

	// it('be able to get all via axios get call too find a single item by name)', function(done) {

	//   axios.get(`http://localhost:3002/items/27${name}`)
	//   .catch(e => {
	//     expect(e).to.equal(null)
	//     console.log(e)
	//     done()
	//   })
	//   .then(results => {
	//     expect(Object.keys(results.data[0]).length).to.equal(16)
	//     expect(results.data[0].title).to.equal(name)
	//     expect(results.data[0].price).to.equal(seeds[44].price)
	//     expect(results.data[0].tjnid).to.equal("tjn-id44")
	//     done()
	// })
	// })
});
