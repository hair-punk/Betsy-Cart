const expect = require('chai').expect
const seeds = require("../controllers/seeder.js");


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



// describe("- - - - - - - - -SEEDS - - - - - - -", function() {
//   it('Should have be an array with 100 fake items in it  ', function(done){
//     expect(seeds).to.be.an('array');
//     expect(seeds.length).to.equal(100);

//     done()
//   })''
//   it('Should have a storeName that is a string and has a length ', function(done){
//     expect(seeds[0].storeName).to.be.a('string');
//     expect(seeds[0].storeName.length).to.be.greaterThan(0);
//     done()
//   })

//   // it('Should     pass teh 3rd test ', function(done){



//   //   done()
//   // })

 
// })
