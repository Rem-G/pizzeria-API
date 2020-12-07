//POST
function createPizza(req, res) {
    let Pizza = require('../models/pizza');
    let newPizza = Pizza ({
        nom: req.body.nom,
        pate: req.body.pate,
        base: req.body.base,
        calzone: req.body.calzone,
        prix: req.body.prix,
        ingredients: req.body.ingredients
    });
  
    newPizza.save()
    .then((savedPizza) => {

        //send back the created Pizza
        res.json(savedPizza);
            
    }, (err) => {
        res.status(400).json(err)
    });
}

//GET
function readPizzas(req, res) {
    let Pizza = require("../models/pizza");

    Pizza.find({})
    .populate({path: 'ingredients', model: 'Ingredient',})
    .then((Pizzas) => { 
        res.status(200).json(Pizzas);
    }, (err) => {
        console.log(err);
        res.status(500).json(err);
    });
 }


function readPizza(req, res) {

    let Pizza = require("../models/pizza");

    Pizza.findById({_id : req.params.id})
    .populate('ingredients')
    .then((Pizza) => {
        res.status(200).json(Pizza);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 //PUT
 function addIngredient(req, res) {

    let Pizza = require("../models/pizza");

    let fields_to_update = {};

    if (req.body.ingredients) fields_to_update.ingredients = req.body.ingredients;

    Pizza.findByIdAndUpdate({_id: req.params.id}, 
        fields_to_update, 
        {new : true})
    .then((updatedPizza) => {
        res.status(200).json(updatedPizza);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteIngredients(req, res) {
    let Pizza = require("../models/pizza");

    let ingredients;
    let index;
    let outputIngredients = [];

    if (req.body.ingredients) ingredients = req.body.ingredients;

    if (!Array.isArray(ingredients)) ingredients = [ingredients];

    Pizza.find({_id: req.params.id})
    .then((foundPizza) => {
        outputIngredients = foundPizza[0].ingredients;
        ingredients.forEach(ingredient => {
            index = outputIngredients.indexOf(ingredient);
            if (index > -1) {
                outputIngredients.splice(index, 1);
            }
        });
        Pizza.findByIdAndUpdate({_id: req.params.id}, 
            {'ingredients': outputIngredients}, 
            {new : true}
        )
        .then((updatedPizza) => {
            res.status(200).json(updatedPizza);
        }, (err) => {
            res.status(500).json(err);
        });
    });
}

function addIngredients(req, res) {
    let Pizza = require("../models/pizza");
    let ingredients;

    if (req.body.ingredients) ingredients = req.body.ingredients;

    if (!Array.isArray(ingredients)) ingredients = [ingredients];

    Pizza.find({_id: req.params.id})
    .then((foundPizza) => {
        ingredients.forEach(ingredient => {
            foundPizza[0].ingredients.push(ingredient);
        });

        Pizza.findByIdAndUpdate({_id: req.params.id}, 
            {'ingredients': foundPizza[0].ingredients}, 
            {new : true}
        )
        .then((updatedPizza) => {
            res.status(200).json(updatedPizza);
        }, (err) => {
            res.status(500).json(err);
        });
    })
}

 function updatePizza(req, res) {

    let Pizza = require("../models/pizza");

    let fields_to_update = {};

    if (req.body.nom) fields_to_update.nom = req.body.nom;
    if (req.body.pate) fields_to_update.pate = req.body.pate;
    if (req.body.calzone) fields_to_update.calzone = req.body.calzone;
    if (req.body.prix) fields_to_update.prix = req.body.prix;
    if (req.body.ingredients) fields_to_update.ingredients = req.body.ingredients;

    Pizza.findByIdAndUpdate({_id: req.params.id}, 
        fields_to_update, 
        {new : true})
    .then((updatedPizza) => {
        res.status(200).json(updatedPizza);
    }, (err) => {
        res.status(500).json(err);
    });
}

//DELETE

function deletePizza(req, res) {

    let Pizza = require("../models/pizza");

    Pizza.findOneAndRemove({_id : req.params.id})
    .then((deletedPizza) => {
        res.status(200).json(deletedPizza);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function done(req, res) {

    let Pizza = require("../models/pizza");

    Pizza.findByIdAndUpdate({_id: req.params.id}, 
        {done : true}, 
        {new : true})
    .then((updatedPizza) => {
        res.status(200).json(updatedPizza);
    }, (err) => {
        res.status(500).json(err);
    });

}

function undone(req, res) {

    let Pizza = require("../models/pizza");

    Pizza.findByIdAndUpdate({_id: req.params.id}, 
        {done : false}, 
        {new : true})
    .then((updatedPizza) => {
        res.status(200).json(updatedPizza);
    }, (err) => {
        res.status(500).json(err);
    });

}

module.exports.createPizza = createPizza;
module.exports.readPizzas = readPizzas;
module.exports.readPizza = readPizza;
module.exports.deletePizza = deletePizza;
module.exports.updatePizza = updatePizza;
module.exports.done = done;
module.exports.undone = undone;

module.exports.deleteIngredients = deleteIngredients;
module.exports.addIngredients = addIngredients;



