//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/pizza');

//CREATE
router.post("/createPizza", (req, res) => {

    controller.createPizza(req, res);

});

//READ
router.get("/readPizzas", (req, res) => {
    
    controller.readPizzas(req, res);

});

router.get("/readPizza/:id", (req, res) => {
    
    controller.readPizza(req, res);

});

//UPDATE
router.put("/updatePizza/:id", (req, res) => {
    
    controller.updatePizza(req, res);

});

router.put("/deleteIngredients/:id", (req, res) => {controller.deleteIngredients(req, res);});
router.put("/addIngredients/:id", (req, res) => {controller.addIngredients(req, res);});


//DELETE
router.delete("/deletePizza/:id", (req, res) => {
    
    controller.deletePizza(req, res);

});

//COMPLETED
router.post("/donePizza/:id/done", (req, res) => {

    controller.done(req, res);

});

router.post("/undonePizza/:id/undone", (req, res) => {

    controller.undone(req, res);

});

module.exports = router;