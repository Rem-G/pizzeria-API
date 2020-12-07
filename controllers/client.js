function createClient(req, res) {
    let Client = require('../models/client');
    let newClient = Client ({
        nom: req.body.nom,
        email: req.body.email,
    });

    newClient.save()
    .then((savedClient) => {

        //send back the created Pizza
        res.json(savedClient);
            
    }, (err) => {
        res.status(400).json(err)
    });
}

//PUT
function updateClient(req, res) {

    let Client = require("../models/client");

    Client.findByIdAndUpdate({_id: req.params.id}, 
        {
            nom: req.body.nom,
            email: req.body.email,
        }, 
        {new : true})
    .then((updatedPizza) => {
        res.status(200).json(updatedPizza);
    }, (err) => {
        res.status(500).json(err);
    });
}

function readClient(req, res) {
    let Client = require("../models/client");

    Client.find({email : req.body.email})
    .then((Client) => {
        res.status(200).json(Client);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function deleteClient(req, res){
	let Client = require('../models/client');

	Client.deleteOne({email : req.body.email}, function(err, user) {
		if (err) {
			console.log(err);
			res.sendStatus(500);
		}
		res.status(200);
	})
}

module.exports.createClient = createClient;
module.exports.updateClient = updateClient;
module.exports.readClient = readClient;
module.exports.deleteClient = deleteClient;

