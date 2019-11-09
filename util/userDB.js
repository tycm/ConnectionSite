var User = require('../models/User.js');
var UserConnection = require('../models/UserConnection.js');
var UserProfile = require('../models/UserProfile.js');
var ConnectionDB = require('./connectionDB.js');

var user1 = new User(01, "Tim", "McCrickard", "tmccrick@uncc.edu", "9201 University City BLVD", "Wallis Hall", "Charlotte", "NC", "28223", "US");
var user2 = new User(02, "Gnome", "Man", "gman@uncc.edu", "9201 University City BLVD", "Student Union", "Charlotte", "NC", "28223", "US");
var up1 = new UserProfile(01);
var up2 = new UserProfile(02);
up1.addConnection(ConnectionDB.getConnection(01), "Yes")
up1.addConnection(ConnectionDB.getConnection(05), "No")
up1.addConnection(ConnectionDB.getConnection(06), "Maybe")
up2.addConnection(ConnectionDB.getConnection(03), "Yes")
up2.addConnection(ConnectionDB.getConnection(02), "No")
up2.addConnection(ConnectionDB.getConnection(04), "Maybe")
var users = [];
var userProfiles = [];
users.push(user1);
users.push(user2);
userProfiles.push(up1);
userProfiles.push(up2);

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
function getUserProfile(userID){
	var toreturn;
	userProfiles.forEach(element => {
		if(element.userId = userID){
			toreturn = element;
		}
	});
	return toreturn;
}
module.exports.getUsers = getUsers;
module.exports.getUser = getUser;
module.exports.getRandomUser = getRandomUser;
module.exports.getUserProfile = getUserProfile;