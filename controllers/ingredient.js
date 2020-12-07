function createIngredient(req, res) {
    let Ingredient = require('../models/ingredient');
    let newIngredient = Ingredient ({
        nom: req.body.nom,
        prix: req.body.prix,
    });
  
    newIngredient.save()
    .then((savedIngredient) => {

        //send back the created Pizza
        res.json(savedIngredient);
            
    }, (err) => {
        res.status(400).json(err)
    });
}

function readIngredient(req, res) {
    let Ingredient = require('../models/ingredient');

    Ingredient.findById({_id : req.params.id})
    .then((Ingredient) => {
        res.status(200).json(Ingredient);
    }, (err) => {
        res.status(500).json(err);
    });
 }


//PUT
function updateIngredient(req, res) {

    let Client = require("../models/client");

    Client.findByIdAndUpdate({_id: req.params.id}, 
        {
            nom: req.body.nom,
            prix: req.body.prix,
        }, 
        {new : true})
    .then((updatedIngredient) => {
        res.status(200).json(updatedIngredient);
    }, (err) => {
        res.status(500).json(err);
    });
}
module.exports.createIngredient = createIngredient;
module.exports.readIngredient = readIngredient;
module.exports.updateIngredient = updateIngredient;


