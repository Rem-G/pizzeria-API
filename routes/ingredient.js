//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/ingredient');

//CREATE

router.post("/createIngredient", (req, res) => {

    controller.createIngredient(req, res);

});

router.get("/readIngredient/:id", (req, res) => {

    controller.readIngredient(req, res);

});


module.exports = router;