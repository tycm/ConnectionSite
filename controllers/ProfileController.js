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
		// req.session.user = UserDB.getRandomUser();
		// res.render("savedConnections",{user: req.session.user})
		res.redirect('/register')
	}
})
router.get('/register', async function(req, res){
	if(req.session.user){
		res.redirect('/')
	}else{
		res.render('register')
	}
});
router.post('/register', urlencodedParser, [
	check('firstName')
		.exists()
		.isAlpha()
		.withMessage('First name is required'),
	check('lastName')
		.exists()
		.isAlpha()
		.withMessage('Last name is required'),
	check('email')
		.exists()
		.isEmail()
		.withMessage('Email is required and must be an email address'),
	check('address1')
		.exists()
		.withMessage('Address1 is required'),
	check('address2')
		.escape()
		.trim(),
	check('city')
		.exists()
		.withMessage('City is required'),
	check('state')
		.exists()
		.isAlpha()
		.withMessage('State is required'),
	check('zip')
		.exists()
		.withMessage('Zip is required'),
	check('country')
		.exists()
		.withMessage('Country is required'),
	check('password')
		.exists()
		.isLength({ min: 4})
		.withMessage('Password must be at least 4 characters long')
], async function(req,res){
	var errors = validationResult(req)
	if(!errors.isEmpty()){
		res.render('register', {errors: errors.array()})
	}else{
		var newUser = new User({id: await UserDB.getNextID(), firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, address1: req.body.address1, address2: req.body.address2, city: req.body.city, state: req.body.state, zip: req.body.state, country: req.body.country, password: req.body.password});
		newUser.save();
		req.session.user = newUser;
		res.redirect('/savedconnections')
		}
});
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
});
router.get('/logout', function(req,res){
	req.session.destroy();
	res.render('index')
});


module.exports = router;