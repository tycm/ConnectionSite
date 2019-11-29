const express = require('express');

const router = express.Router();

var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const { check, validationResult } = require('express-validator');

var UserDB = require('../util/userDB.js');
var User = require('../models/User.js');
var userConnection = require('../models/UserConnection.js')
var Connection = require('../models/connection.js');
var connectionDB = require('../util/ConnectionDB.js');
var userConnectionDB = require('../util/userConnectionDB.js');

router.get('/newconnection', function(req, res){
	if(req.session.user){
		res.render('newconnection',{user: req.session.user});
	}else{
		res.redirect('/login')
	}
});
router.post('/newconnection', urlencodedParser,[
	check('topic')
		.isLength({ min: 3})
		.withMessage("Topic must be at least 3 characters long")
		.trim()
		.escape(),
	check('name')
		.isLength({ min: 3})
		.withMessage("Name must be at least 3 characters long")
		.trim()
		.escape(),
	check('category')
		.isLength({ min: 3})
		.withMessage("Category must be at least 3 characters long")
		.trim()
		.escape(),
	check('textarea')
		.isLength({ min: 3})
		.withMessage("Details must be at least 3 characters long")
		.trim()
		.escape(),
	check('where')
		.isLength({ min: 5})
		.withMessage("Where must be at least 5 characters long")
		.trim()
		.escape(),
	check('when'),
], async function(req, res){
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		res.render('newConnection', {errors: errors.array()})
	}else{
	var id =Math.floor((Math.random() * 5000) + 1);
	var newConnection = new Connection({id: id, name: req.body.name, topic: req.body.topic, date: req.body.when, category: req.body.category, host: req.session.user.id, where: req.body.where})
	userConnectionDB.addConnection(newConnection)
	var host = await UserDB.getUser(newConnection.host)		
	var hostName = host.firstName + " " + host.lastName
	res.render('connection', {connection: newConnection, user: req.session.user, host: hostName})
	}
});
router.get('/savedConnections', async function(req, res){
	if(req.session.user){
		var events = await userConnectionDB.getUserProfile(req.session.user.id)
		var profile = await userConnectionDB.parseProfile(events)
		res.render('savedConnections', {user: req.session.user, events: profile, connectionDB: connectionDB});
	}else{
		res.redirect('/login')
	}
})
router.post('/savedConnections', async function(req, res){
	if(req.session.user){
		await userConnectionDB.addRSVP(req.query.connectionID, req.session.user.id, req.query.response);
		res.redirect('/savedConnections')
	}else{
		res.redirect('/login')
	}
})
router.post('/delete', async function(req,res){
	userConnectionDB.deleteConnection(req.query.connectionID, req.session.user.id);
	res.redirect('/savedConnections')
})
router.get('/connections', async function(req, res){
	res.render('connections', {events: await connectionDB.getConnections(), categories: await connectionDB.getCategories(), user: req.session.user});
});
router.all('/connection', async function(req, res){
	if(Object.keys(req.query).length === 0){
		res.render('connections', {events: await connectionDB.getConnections(), categories: await connectionDB.getCategories(), user: req.session.user});
	}else{
		var connection = await connectionDB.getConnection(req.query.id);
		var host = await UserDB.getUser(connection.host)		
		var hostName = host.firstName + " " + host.lastName
		res.render('connection', {connection: await connection, user: req.session.user, host: hostName})
	}
});

module.exports = router;