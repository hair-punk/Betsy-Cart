

var Kart = require('./schema');
const mongoose = require('mongoose')

  const connect = () => {
  mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true})
  console.log(" * *    * * * * *    * * **    * * *    * * *    * * *connecting to mongoose server")
}

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
          console.log("Data is= " + data)
        }
      })
  } else {
    Kart.create(input ,(err, data) => {
      if(err){
        console.log("error in the controller.js create individual method")
        console.log(err)
        console.log(" | | | * | | | | * | | | | * | | | | | | * | | | | | * | | | | | | | | | | * | | ")
      } else {
        console.log("Data is= " + data)
      }
    })
  }
  
}
const getAll = () => {
  
}
const clear = () => {
  Kart.deleteMany({}, function(err){
    if(err){
      console.log('error in the clear controller')
       console.log(err)
        console.log(" :::: :: _ :: | * :::: :: _ :: :::: :: _ :: * :::: :: _ :: :::: :: _ :: * :::: :: _ :: :::: :: _ :: :::: :: _ :: * :::: :: _ :: :::: :: _ :: | * :::: :: _ :: :::: :: _ :: :::: :: _ :: :::: :: _ :: :::: :: _ :: * :::: :: _ :: ")
    }
  })

  
}
const initialize = () => {

}

var dbMethods = {
  connect: connect,
  initialize: null,
  create: create,
  clear: clear,
  getAll: null,
  // updateWID: null, 
  // find: null,
}


module.exports = dbMethods;