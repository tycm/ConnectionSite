var express = require('express');
var connectionModel = require('../models/connectionDB.js');
var getConnections = connectionModel.getConnections;
var getConnection = connectionModel.getConnection;

var router = express.Router();

router.get('/', function(req, res){
	res.render('index');
});
router.get('/index', function(req, res){
	res.render('index');
});
router.get('/connections', function(req, res){
	res.render('connections', {events: getConnections()});
});
router.get('/savedConnections', function(req, res){
	res.render('savedConnections', {events: getConnections()});
});
router.get('/connection', function(req, res){
	if(Object.keys(req.query).length === 0){
		res.render('connections', {events: getConnections()});
	}else{
		var connection = getConnection(req.query.id);
		res.render('connection', {student:req.query})
	}

	res.render('connection',{connection: connection});
});
router.get('/about', function(req, res){
	res.render('about');
});
router.get('/contact', function(req, res){
	res.render('contact');
});
router.get('/newconnection', function(req, res){
	res.render('newconnection');
});
router.post('/newconnection', function(req, res){
	res.render('newconnection',{connection: req.query});
});

router.get('/*', function(req, res){
	res.send('404 Page not found');
});




module.exports = router;