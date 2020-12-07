var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var IngredientSchema = new Schema({
	nom: String,
	prix: Number,
});

module.exports = mongoose.model('Ingredient', IngredientSchema);
