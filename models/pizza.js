var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PizzaSchema = new Schema({
  nom: String,
  pate: String,
  base: String,
  calzone : Boolean,
  prix : Number,
  ingredients : [{
    type: Schema.ObjectId,
    ref: 'Ingredient',
  }],
  createdAt : {
    type : Date,
    default : Date.now
  }
});

module.exports = mongoose.model('Pizza', PizzaSchema);
