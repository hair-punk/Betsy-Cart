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
    db.connect();
    // db.clear();
    done();
  })
  it('Be able to create one product when passed an single object', function(done){
    db.create(seeds[0], (err, result)=>{
      console.log(result)
    expect(err).to.equal(null);
    console.log("* ^ * ^ * ^ * ^ * ^ * ^ * ^ * ^ ")

    console.log("!     ^  b b b!!     ^  b b b!!     ^  b b b!!     ^  b b b!!     ^  b b b!!     ^  b b b!!     ^  b b b!!     ^  b b b!")
    })

    done()
  })
  // it('Should have a storeName that is a string and has a length ', function(done){
    
  //   done()
  // })

  // it('Should     pass teh 3rd test ', function(done){



  //   done()
  // })

 
})
