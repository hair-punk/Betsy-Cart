const expect = require('chai').expect
const seeds = require("../dbHelpers/seeder.js");
const db = require('../dbHelpers/controller.js');


describe("- - - - - - - - -SEEDS - - - - - - -", function() { // this is not touching mongo at all. Simply testing my controller seeder.js 
  it('Should have be an array with 100 fake items in it!', function(done){
    expect(seeds).to.be.an('array');
    expect(seeds.length).to.equal(100);

    done()
  })
  it("A handful of seeds should have a storeName that is a string and has a length!", function(done){
    expect(seeds[0].storeName).to.be.a('string');
    expect(seeds[0].storeName.length).to.be.greaterThan(0);
    expect(seeds[99].storeName).to.be.a('string');
    expect(seeds[99].storeName.length).to.be.greaterThan(0);
    expect(seeds[40].storeName).to.be.a('string');
    expect(seeds[40].storeName.length).to.be.greaterThan(0);

    done()
  })
})



describe("- - - - - - - - - DB_METHODS - - - - - - -", function() {
  beforeEach(function(done){
    db.clear();
    done();
  })
  it('Be able to create one product when passed an single object', function(done){
    db.create(seeds[0], (err, result)=>{

    expect(err).to.equal(null);
    expect(result.storeName).to.be.a('string');
    expect(result.storeName.length).to.be.greaterThan(0);
    })
    db.drop()
    done()
  })
  it('Also be able to load an entire array usign the same function without additional parameters', function(done){
    db.create(seeds, (err, result)=>{

    expect(err).to.equal(null);
    expect(result).to.be.an('array');
    expect(result[0].storeName).to.be.a('string');
    expect(result[0].storeName.length).to.be.greaterThan(0);
    expect(result[99].storeName).to.be.a('string');
    expect(result[99].storeName.length).to.be.greaterThan(0);
    expect(result[40].storeName).to.be.a('string');
    expect(result[40].storeName.length).to.be.greaterThan(0);
    })
    db.drop()
    done()
  })

  it('should be able to get all the products', function(done) {
    db.getAll((err, result) => {

    expect(err).to.equal(null);
    expect(result).to.be.an('array');
    expect(result[1].storeName).to.be.a('string');
    // expect(result[2].storeName.length).to.be.greaterThan(0);
    expect(result[33].storeName).to.be.a('string');
    expect(result[33].storeName.length).to.be.greaterThan(0);
    expect(result[24].storeName).to.be.a('string');
    expect(result[24].storeName.length).to.be.greaterThan(0);
    })
    db.drop()
    done()
  })
})
