
const mongoose = require('mongoose');
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
kartSchema.set('validateBeforeSave', false);

var Kart = mongoose.model('Kart', kartSchema)


module.exports = Kart;