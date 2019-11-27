const express = require('express');

const router = express.Router();

var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var UserDB = require('../util/userDB.js');
var User = require('../models/User.js');
var Connection = require('../models/connection.js');
var connectionDB = require('../util/ConnectionDB.js');
var userConnectionDB = require('../util/userConnectionDB.js');

router.get('/signup', function(req, res){
	if(req.session.user){
		res.render('index',{user: req.session.user});
	}else{
		req.session.user = UserDB.getRandomUser();
		res.render("savedConnections",{user: req.session.user})
	}
})
router.get('/login', async function(req, res){
	if(req.session.user){
		res.render('index',{user: req.session.user});
	}else{
		var user = await UserDB.getRandomUser();
		req.session.user = user;
		res.redirect('/savedConnections')
	}
});
router.get('/logout', function(req,res){
	req.session.destroy();
	res.render('index')
})

module.exports = router;