const express = require('express');
const { check, validationResult } = require('express-validator');

const router = express.Router();

var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var UserDB = require('../util/userDB.js');
var User = require('../models/User.js');

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
		.withMessage('Username must be an email address'),
	check('username').custom((value, {req}) => {
		return UserDB.login(value, req.body.password).then(user => {
			if(!(user instanceof User)){
				return Promise.reject('Invalid username or password')
			}
		})
	})
], async function(req,res){
	var errors = validationResult(req)
	var loginuser = await UserDB.login(req.body.username, req.body.password);
	if(!errors.isEmpty()){
		res.render('login', {errors: errors.array()})
	}else{
		req.session.user = loginuser;
		res.redirect('/savedconnections')
		}
})
router.get('/logout', function(req,res){
	req.session.destroy();
	res.render('index')
});

module.exports = router;