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
		var events = UserDB.getUserProfile(req.session.user.id).getConnections();
		res.render('savedConnections', {user: req.session.user, events: events, connectionDB: connectionDB});
	}else if(req.session.user){
		UserDB.getUserProfile(req.session.user.id).addConnection(connectionDB.getConnection(req.query.connectionID), req.query.response);
	}else{
		res.redirect('/login')
	}
})
router.post('/savedConnections', function(req, res){
	if(req.session.user){
		UserDB.getUserProfile(req.session.user.id).addConnection(connectionDB.getConnection(req.query.connectionID), req.query.response);
		var events = UserDB.getUserProfile(req.session.user.id).getConnections();
		res.render('savedConnections', {user: req.session.user, events: events, connectionDB: connectionDB});
	}else{
		res.redirect('/login')
	}
})
router.post('/newconnection', function(req, res){
	res.render('newconnection',{connection: req.query});
});
router.post('/delete', function(req,res){
	UserDB.getUserProfile(req.session.user.id).removeConnection(req.query.connectionID)
	var events = UserDB.getUserProfile(req.session.user.id).getConnections();
	res.render('savedConnections', {user: req.session.user, events: events, connectionDB: connectionDB});
})
router.all('/connection', function(req, res){
	if(Object.keys(req.query).length === 0){
		res.render('connections', {categories: connectionDB.getCategories(), user: req.session.user});
	}else{
		res.render('connection', {connection: connectionDB.getConnection(req.query.id), user: req.session.user})
	}
});
router.get('/login', function(req, res){
	if(req.session.user){
		res.render('index',{user: req.session.user});
	}else{
		req.session.user = UserDB.getRandomUser();
		req.session.userProfile = UserDB.getUserProfile(req.session.user.id);
		res.redirect('/savedConnections')
	}
});
router.get('/logout', function(req,res){
	req.session.destroy();
	res.render('index')
})

module.exports = router;