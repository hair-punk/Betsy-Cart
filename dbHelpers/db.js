
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});
var Schema = mongoose.Schema;

kartSchema = new Schema({
    storeName:  String,
    title:  String,
    description:  String,
    url:  String,
    price:  String,
    quantity:  Number,
    buyoptions:  [{type: String}],
    eta:  [{type: String}],
    price:  String,
    location:  String,
    stars:  Number,
    peopleWantThis:  String
})
kartSchema.set('validateBeforeSave', false); // This is supposed to make it so the model is not enforced. I only have it set up this way becasue some of the values such as people want this are occasionally null and null values cannot be passed in where a string is suppsoed to go. 
var Kart = mongoose.model('Kart', kartSchema)



const create = (input, callback) => {  // creates either a database entry or an array of entries based on the input.
    var isArray = Array.isArray(input)? true: false; //- - - - -  the meat of this fucntion is right here...
    if(isArray){
        Kart.insertMany(input, (err, data) => {
          if(err){
            console.log("error in the controller.js create array method")
            console.log(err)
            callback(err, null)
            console.log(" | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | ")
          } else {
            callback(null, data)
            // console.log("Data is= " + data)
          }
        })
    } else {
      Kart.create(input ,(err, data) => { 
        if(err){
          console.log("error in the controller.js create individual method")
          console.log(err)
          callback(err, null)
          console.log(" | | | * | | | | * | | | | * | | | | | | * | | | | | * | | | | | | | | | | * | | ")
        } else {
          callback(null, data)
          // console.log("Data is= " + data)
        }
      })
    }
    
  }


  const getAll = (callback) => { //gets all db (useful for populating front end)
    Kart.find({}, function(err, data) {
      if(err){
        // callback(err, null)
        console.log("error in get all of controller")
      } else {
        callback(null, data);
      }
    } )
  }


  const clear = (callback) => { // clears whole db
    Kart.deleteMany({}, function(err, deleted){
      if(err){
        console.log('error in the clear controller')
         console.log(err)
         callback(err, null)
          console.log(" :::: :: _ :: | * :::: :: _ :: :::: :: _ :: * :::: :: _ :: :::: :: _ :: * :::: :: _ :: :::: :: _ :: :::: :: _ :: * :::: :: _ :: :::: :: _ :: | * :::: :: _ :: :::: :: _ :: :::: :: _ :: :::: :: _ :: :::: :: _ :: * :::: :: _ :: ")
      }else {
        callback(null, deleted)
      }
      
    })
  }


  
  const dropCollection = (callback) => { // clears whole db
    Kart.collection.drop()
  }

  
module.exports = { clear, getAll, create, dropCollection}; //exporting methods to be used by other stuff