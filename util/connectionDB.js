var Connection = require('../models/connection.js');					
var UserConnection = require('../models/UserConnection.js');					

Array.prototype.max = function(){
	return Math.max.apply(null, this);
}

async function getConnections(){
	var hold = [];
	hold = await Connection.find();
	return hold;
}

async function getConnection(id){
	let connection;
	try{
		connection = await Connection.findOne({id: id});
		return connection;
	}catch(err){
		console.log(err);
	}
}

async function getCategories() {
	var categories = [];
	var connections = await getConnections();
	connections.forEach(element => {
		categories.push(element.category)
		categories = categories.filter(function(value, index, self) { 
			return self.indexOf(value) === index;
		});
	});
	return categories;
}
async function getIDs() {
	var IDs = [];
	var connections = await getConnections();
	connections.forEach(element => {
		IDs.push(element.id)
		IDs = IDs.filter(function(value, index, self) { 
			return self.indexOf(value) === index;
		});
	});
	return IDs;
}
async function deleteConnection(id){
	connectionID = parseInt(id)
	await Connection.remove({id: connectionID});
	await UserConnection.remove({connectionID: id})
}
async function getNextID(){
	var ids = await getIDs();
	return ids.max() + 1;
}

module.exports.getConnections = getConnections;
module.exports.getConnection = getConnection;
module.exports.getCategories = getCategories;
module.exports.getConnection = getConnection;
module.exports.getIDs = getIDs;
module.exports.getNextID = getNextID;
module.exports.deleteConnection = deleteConnection;