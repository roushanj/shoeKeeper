var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ShoeSchema   = new Schema({
    name: {type:String, unique:true},
    color: String,
    price: Number,
    quantity: Number
},
   {
   	timestamps: true
 });

module.exports = mongoose.model('Shoe', ShoeSchema);