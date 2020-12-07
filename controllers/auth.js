const jwt = require('jsonwebtoken');

function createToken(user) {
    return jwt.sign({id: user.id, username: user.username}, "My so secret sentence");
}

function signin(req, res) {

    let User = require('../models/user');

	User.findOne({username: req.body.username}, function(err, user) {
		if (err)
			{console.log(err);}

		else if (user && user.comparePassword(req.body.password)) {
            req.session.username = req.body.username;
			req.session.logged = true;
			res.status(200).json({token: createToken(user)});
		}
		else{
			res.status(400).json();
		}
	});
}

//POST
function signup(req, res) {
    let User = require('../models/user');
	let user = new User();

	user.username = req.body.username;
	user.password = req.body.password;

	user.save((err, savedUser) => {
		console.log(savedUser);
		if (err){
			console.log(err);
			res.sendStatus(400);
		}

		else{
			res.status(200).json();
		}
	});
}

function signout(req, res) {

    req.session.username = "";
	req.session.logged = false;
    res.redirect("/");

}

function profile(req, res) {

    if (req.session.logged)
        res.send("Profile");
    else
		res.sendStatus(400);
}

function deleteUser(req, res){
	let User = require('../models/user');

	User.deleteOne({username : req.body.username}, function(err, user) {
		if (err) {
			console.log(err);
			res.sendStatus(500);
		}
		res.sendStatus(200);
	})
}

module.exports.signin = signin;
module.exports.signup = signup;
module.exports.signout = signout;
module.exports.profile = profile;
module.exports.deleteUser = deleteUser;