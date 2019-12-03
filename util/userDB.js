var User = require('../models/User.js');

async function getUsers(){
	return User.find();
}
async function getUser(userID){
	return User.findOne({id: userID});
}
async function getUserByEmail(email){
	return User.findOne({email: email});
}
async function login(username, password){
	return User.findOne({email: username, password: password});
}
async function getRandomUser(){
	var users = await getUsers();
	return users[Math.floor(Math.random() * users.length)]
}

module.exports.getUsers = getUsers;
module.exports.getUser = getUser;
module.exports.getRandomUser = getRandomUser;
module.exports.getUserByEmail = getUserByEmail;
module.exports.login = login;