

const Kart = require('./schema');
const mongoose = require('mongoose')

const conn = mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true})

// const kill = () => {
   
// }
// const find = () => {
// }
const create = (input) => {
  var isArray = Array.isArray(input)? true: false;
  if(isArray){
      Kart.insertMany(input, (err, data) => {
        if(err){
          console.log("error in the controller.js create array method")
          console.log(err)
          console.log(" | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | ")
        } else {
          // console.log("Data is= " + data)
        }
      })
  } else {
    Kart.create(input ,(err, data) => {
      if(err){
        console.log("error in the controller.js create individual method")
        console.log(err)
        console.log(" | | | * | | | | * | | | | * | | | | | | * | | | | | * | | | | | | | | | | * | | ")
      } else {
        // console.log("Data is= " + data)
      }
    })
  }
  
}
const getAll = (callback) => {
  Kart.find({}, (err, data) => {
    if(err){
      callback(err, null)
      console.log("error in get all of controller")
    } else {
      callback(null, data);
    }
  } )
  
}
const clear = () => {
  Kart.deleteMany({}, function(err){
    if(err){
      console.log('error in the clear controller')
       console.log(err)
        console.log(" :::: :: _ :: | * :::: :: _ :: :::: :: _ :: * :::: :: _ :: :::: :: _ :: * :::: :: _ :: :::: :: _ :: :::: :: _ :: * :::: :: _ :: :::: :: _ :: | * :::: :: _ :: :::: :: _ :: :::: :: _ :: :::: :: _ :: :::: :: _ :: * :::: :: _ :: ")
    }
    conn.connection.db.dropDatabase()
  })

  
}
const initialize = () => {

}


var dbMethods = {
  connect: null,
  // initialize: null,
  create: create,
  clear: clear,
  getAll: getAll,
  // drop: kill,
  // updateWID: null, 
  // find: null,
}


module.exports = dbMethods;