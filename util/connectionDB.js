var Connection = require('../models/connection.js');					


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

module.exports.getConnections = getConnections;
module.exports.getConnection = getConnection;
module.exports.getCategories = getCategories;