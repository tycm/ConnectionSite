var User = require('../models/User.js');
var UserProfile = require('../models/UserProfile.js');

var user1 = new User(01, "Tim", "McCrickard", "tmccrick@uncc.edu", "9201 University City BLVD", "Wallis Hall", "Charlotte", "NC", "28223", "US");
var user2 = new User(02, "Gnome", "Man", "gman@uncc.edu", "9201 University City BLVD", "Student Union", "Charlotte", "NC", "28223", "US");
var users = [];

users.push(user1);
users.push(user2);

function getUsers(){
	return users;
}
function getUser(userID){
	var toreturn;
	users.forEach(element => {
		if(element.id === userID){
			toreturn = element;
		}
	});
	return toreturn;
}
function getRandomUser(){
	return users[Math.floor(Math.random() * users.length)]
}
module.exports.getUsers = getUsers;
module.exports.getUser = getUser;
module.exports.getRandomUser = getRandomUser;