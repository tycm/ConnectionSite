var UserConnection = require('./UserConnection.js')
class UserProfile{
	constructor(userId){
		this.userId = userId;
		this.connections = [];
	}
	addConnection(connection, rsvp){
		this.connections.forEach(element => {
			if(connection.ID === element.connection.ID){
				updateConnection(new UserConnection(connection, rsvp));
			}else{
				this.connections.push(new UserConnection(connection, rsvp));
			}
		});
	}
	set updateConnection(UserConnection){
		this.connections.forEach(element => {
			if(element.connection.ID === UserConnection.connection.ID){
				element = UserConnection;
			}
		});
	}
	set removeConnection(UserConnection){
		this.connections = this.connections.filter(function(item){
			return item != UserConnection;
		});
	}
	getConnections(){
		return this.connections;
	}
	emptyProfile(){
		this.connections = [];
	}

}

module.exports = UserProfile;