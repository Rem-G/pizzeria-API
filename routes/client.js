//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/client');

//CREATE

router.post("/createClient", (req, res) => {

    controller.createClient(req, res);

});

//UPDATE
router.put("/updateClient/:id", (req, res) => {
    
    controller.updateClient(req, res);

});

router.post("/readClient", (req, res) => {
    controller.readClient(req, res);
})

router.post('/deleteClient', function(req, res) {
    controller.deleteClient(req, res);
  })

module.exports = router;