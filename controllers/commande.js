function createCommande(req, res) {
    let Commande = require('../models/commande');
    let newCommande = Commande ({
        pizzas: req.body.pizzas,
        client: req.body.client,
    });

    newCommande.save()
    .then((savedCommande) => {

        //send back the created Pizza
        res.json(savedCommande);
            
    }, (err) => {
        res.status(400).json(err)
    });
}

//GET
function readCommandes(req, res) {

    let Commande = require("../models/commande");

    Commande.find({})
    //.populate('pizzas')
    //.populate('client')
    .then((Commandes) => {
        res.status(200).json(Commandes);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function readClientOrders(req, res) {

    let Commande = require("../models/commande");

    Commande.find({client : req.body.client})
    .populate('pizzas')
    .then((Commande) => {
        res.status(200).json(Commande);
    }, (err) => {
        res.status(500).json(err);
    });
 }


module.exports.createCommande = createCommande;
module.exports.readCommandes = readCommandes;
module.exports.readClientOrders = readClientOrders;


