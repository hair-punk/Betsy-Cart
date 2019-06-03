const mongoose = require('mongoose');
// mongoose.connect('mongodb://mongo:27017/myapp', { useNewUrlParser: true });
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true });
var dockerSwitch = 'TOGGLE THE COMMENTING OUT of the 2 lines ABOVE^^^^^ '; // this is just to help in the readme.
var Schema = mongoose.Schema;

kartSchema = new Schema({
	storeName: String,
	title: String,
	description: [{ type: String }],
	url: String,
	price: String,
	quantity: Number,
	buyoptions: [{ type: String }],
	eta: [{ type: String }],
	shipprice: String,
	location: String,
	stars: Number,
	numStars: Number,
	peopleWantThis: String,
	tjnid: String,
});
kartSchema.set('validateBeforeSave', false); // This is supposed to make it so the model is not enforced. I only have it set up this way becasue some of the values such as people want this are occasionally null and null values cannot be passed in where a string is suppsoed to go.
var Kart = mongoose.model('Kart', kartSchema);

const create = (input, callback) => {
	// creates either a database entry or an array of entries based on the input.
	var isArray = Array.isArray(input) ? true : false; //- - - - -  the meat of this fucntion is right here...
	if (isArray) {
		Kart.insertMany(input, (err, data) => {
			if (err) {
				console.log('error in the controller.js create array method');
				console.log(err);
				callback(err, null);
				console.log(' | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | ');
			} else {
				callback(null, data);
				// console.log("Data is= " + data)
			}
		});
	} else {
		Kart.create(input, (err, data) => {
			if (err) {
				console.log('error in the controller.js create individual method');
				console.log(err);
				callback(err, null);
				console.log(' | | | * | | | | * | | | | * | | | | | | * | | | | | * | | | | | | | | | | * | | ');
			} else {
				callback(null, data);
				// console.log("Data is= " + data)
			}
		});
	}
};

const getAll = callback => {
	//gets all db (useful for populating front end)
	Kart.find({}, function(err, data) {
		if (err) {
			// callback(err, null)

			console.log('error in get all of controller');
		} else {
			callback(null, data);
		}
	});
};

const clear = callback => {
	// clears whole db
	Kart.deleteMany({}, function(err, deleted) {
		if (err) {
			console.log('error in the clear controller');
			console.log(err);
			callback(err, null);
			console.log(
				' :::: :: _ :: | * :::: :: _ :: :::: :: _ :: * :::: :: _ :: :::: :: _ :: * :::: :: _ :: :::: :: _ :: :::: :: _ :: * :::: :: _ :: :::: :: _ :: | * :::: :: _ :: :::: :: _ :: :::: :: _ :: :::: :: _ :: :::: :: _ :: * :::: :: _ :: ',
			);
		} else {
			callback(null, deleted);
		}
	});
};

const getOne = (idOrName, callback) => {
	// takes  in either the raw index of the  mongoDB document (0, 1, 2, 22, 99 etc) or the name of the product and returns that item's documentr.
	var isName = idOrName.length < 3 ? false : true; // decides if the item is a product name or item ID. All of my product names . For this to work with a scalable database (like with a million entries that also contain names that are less than 5 or 6 letters, the programmer will have to change the above ternery to use regex looking for numbers. I think tha tis the only way when dealing with an unkown N of documents. I would do so, but I am on a plane right now with no interenet and this will work for FEC, LOL.

	if (isName) {
		var name = idOrName;
		Kart.find({ title: name }, (err, results) => {
			if (err) {
				console.log('error in the getOne controller');
				console.log('isName & not id? =>  ', isName);
				console.log(err);
				callback(err, null);
				console.log(
					' :::: :: _ :: | * :::: :: _ :: :::: :: _ :: * :::: :: _ :: :::: :: _ :: * :::: :: _ :: :::: :: _ :: :::: :: _ :: * :::: :: _ :: :::: :: _ :: | * :::: :: _ :: :::: :: _ :: :::: :: _ :: :::: :: _ :: :::: :: _ :: * :::: :: _ :: ',
				);
				throw err;
			} else {
				callback(null, results);
			}
		});
	} else {
		var id = 'tjn-id' + idOrName;

		Kart.find({ tjnid: id }, (err, results) => {
			console.log();
			if (err) {
				console.log('error in the getOne controller');
				console.log('isName & not id? =>  ', isName);
				console.log(err);
				callback(err, null);
				console.log(
					' :::: :: _ :: | * :::: :: _ :: :::: :: _ :: * :::: :: _ :: :::: :: _ :: * :::: :: _ :: :::: :: _ :: :::: :: _ :: * :::: :: _ :: :::: :: _ :: | * :::: :: _ :: :::: :: _ :: :::: :: _ :: :::: :: _ :: :::: :: _ :: * :::: :: _ :: ',
				);
				throw err;
			} else {
				callback(null, results);
			}
		});
	}
};

const dropCollection = callback => {
	// clears whole db
	Kart.collection.drop();
};

module.exports = { clear, getAll, create, dropCollection, getOne }; //exporting methods to be used by other stuff
