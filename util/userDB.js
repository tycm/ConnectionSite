var User = require('../models/User.js');

async function getUsers(){
	return User.find();
}
async function getUser(userID){
	return User.findOne({id: userID});
}
async function getRandomUser(){
	var users = await getUsers();
	return users[Math.floor(Math.random() * users.length)]
}

module.exports.getUsers = getUsers;
module.exports.getUser = getUser;
module.exports.getRandomUser = getRandomUser;