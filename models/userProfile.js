var UserConnection = require('./UserConnection.js')
var connectionDB = require('../util/connectionDB.js')
class UserProfile{
	constructor(userId){
		this.userId = userId;
		this.connections = [];
	}
	
	updateConnection(userConnection){
		this.connections.forEach(element => {
			if(element.connection.ID === userConnection.connection.ID){
				element = userConnection;
			}
		});
	}
	removeConnection(connectionID){
		var newList = []
		this.connections.forEach(element => {
			if(element.connection.ID != connectionID){
				newList.push(element);
			}
		});
		this.connections = newList;
	}
	addConnection(connection, rsvp){
		var exists = false;
		this.connections.forEach(element => {
			if(element.connection.ID == connection.ID){
				element.rsvp = rsvp;
				exists = true;
			}
		});
		if(exists == false){
			this.connections.push(new UserConnection(connection, rsvp))
		}
	}
	getConnections(){
		return this.connections;
	}
	emptyProfile(){
		this.connections = [];
	}
}

module.exports = UserProfile;