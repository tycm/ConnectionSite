var UserConnection = require('../models/UserConnection.js');
var Connection = require('../models/connection.js')

async function getUserProfile(userID){
	var events = []
	events = await UserConnection.find({userID: userID});
	return events;
}
async function addRSVP(connectionID, userID, rsvp){
	if(await UserConnection.findOne({userID: userID, connectionID: connectionID})){
		updateRSVP(connectionID, userID, rsvp)
	}else{
		var newEvent = new UserConnection({userID: userID, connectionID: connectionID, rsvp: rsvp});
		newEvent.save();
	}
}
async function updateRSVP(connectionID, userID, rsvp){
	var userConnection = await UserConnection.findOne({connectionID: connectionID, userID: userID});
	userConnection.rsvp = rsvp;
	userConnection.save();
}
async function addConnection(connection){
	connection.save()
}
async function parseProfile(userProfile){
	var profile = []
	for (let index = 0; index < userProfile.length; index++) {
		const element = userProfile[index];
		var currentConnection = await Connection.findOne({id: element.connectionID})
		var hold = {name: currentConnection.name, category: currentConnection.category, rsvp: element.rsvp, id: currentConnection.id}
		profile.push(hold);
	}
	return profile
}
async function deleteConnection(connectionID, userID){
	connectionID = parseInt(connectionID)
	userID = parseInt(userID)
    await UserConnection.deleteOne({connectionID: connectionID, userID: userID});
}
module.exports.getUserProfile = getUserProfile;
module.exports.addRSVP = addRSVP;
module.exports.updateRSVP = updateRSVP;
module.exports.addConnection = addConnection;
module.exports.parseProfile = parseProfile;
module.exports.deleteConnection = deleteConnection;