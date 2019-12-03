var User = require('../models/User.js');

Array.prototype.max = function(){
	return Math.max.apply(null, this);
}

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
async function getIDs() {
	var IDs = [];
	var users = await getUsers();
	users.forEach(element => {
		IDs.push(element.id)
		IDs = IDs.filter(function(value, index, self) { 
			return self.indexOf(value) === index;
		});
	});
	return IDs;
}
async function getNextID(){
	var ids = await getIDs();
	return ids.max() + 1;
}

module.exports.getUsers = getUsers;
module.exports.getUser = getUser;
module.exports.getRandomUser = getRandomUser;
module.exports.getUserByEmail = getUserByEmail;
module.exports.login = login;
module.exports.getIDs = getIDs;
module.exports.getNextID = getNextID;