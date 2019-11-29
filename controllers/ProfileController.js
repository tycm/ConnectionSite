const express = require('express');
const { check, validationResult } = require('express-validator');

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
		res.render('login')
	}
});
router.post('/login', urlencodedParser, [
	check('username')
		.isEmail()
		.withMessage('Username must be an email address')
], async function(req,res){
	var errors = validationResult(req)
	var loginuser = await UserDB.login(req.body.username, req.body.password);
	if(!errors.isEmpty()){
		res.render('login', {errors: errors.array()})
	}else{
		errors = []
		if(loginuser instanceof User){
			req.session.user = loginuser;
			res.redirect('/savedconnections')
		}else{
			var error = {msg: "Invalid username or password"}
			errors.push(error);
			res.render('login', {errors: errors})
		}
	}
})
router.get('/logout', function(req,res){
	req.session.destroy();
	res.render('index')
})

module.exports = router;