let router = require('express').Router();
const controller = require('../controllers/auth');
const passport = require("passport");

router.post('/signin', function(req, res) {

  controller.signin(req, res);

});


router.post('/signout', function(req, res) {

    controller.signout(req, res);

});

router.post('/signup', function(req, res) {

	controller.signup(req, res);

});

router.get('/profile', passport.authenticate('jwt', { session: false }), function(req, res) {

	controller.profile(req, res);

});

router.post('/deleteUser', function(req, res) {
  controller.deleteUser(req, res);
})


module.exports = router;
