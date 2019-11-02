var express = require('express');
var connectionDB = require('../util/connectionDB.js');

var router = express.Router();

router.get('/', function(req, res){
	res.render('index');
});
router.get('/index', function(req, res){
	res.render('index', {user: req.session.user});
});
router.get('/connections', function(req, res){
	res.render('connections', {events: connectionDB.getConnections(), categories: connectionDB.getCategories(), user: req.session.user});
});
router.get('/connection', function(req, res){
	if(Object.keys(req.query).length === 0){
		res.render('connections', {categories: connectionDB.getCategories(), user: req.session.user});
	}else{
		res.render('connection', {connection: connectionDB.getConnection(req.query.id), user: req.session.user})
	}
});
router.get('/about', function(req, res){
	res.render('about', {user: req.session.user});
});
router.get('/contact', function(req, res){
	res.render('contact', {user: req.session.user});
});






module.exports = router;