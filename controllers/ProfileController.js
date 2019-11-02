const express = require('express');

const router = express.Router();

var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var UserDB = require('../util/userDB.js');
var User = require('../models/User.js');
var connectionDB = require('../util/ConnectionDB.js');

router.get('/signup', function(req, res){
	if(req.session.user){
		res.render('index',{user: req.session.user});
	}else{
		req.session.user = UserDB.getRandomUser();
		res.render("savedConnections",{user: req.session.user})
	}
})
router.get('/newconnection', function(req, res){
	if(req.session.user){
		res.render('newconnection',{user: req.session.user});
	}else{
		res.redirect('/login')
	}
});
router.get('/savedConnections', function(req, res){
	if(req.session.user){
		res.render('savedConnections', {events: connectionDB.getConnections(), categories: connectionDB.getCategories(), user: req.session.user});
	}else{
		res.redirect('/login')
	}
});
router.post('/newconnection', function(req, res){
	res.render('newconnection',{connection: req.query});
});
router.get('/login', function(req, res){
	if(req.session.user){
		res.render('index',{user: req.session.user});
	}else{
		req.session.user = UserDB.getRandomUser();
		res.render("savedConnections", {user: req.session.user})
	}
});
router.get('/logout', function(req,res){
	req.session.destroy();
	res.render('index')
})
router.get('/killsession', function(req,res){
	req.session.destroy();
	res.render('index')
})

module.exports = router;