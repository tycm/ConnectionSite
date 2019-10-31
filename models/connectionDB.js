var connectionModel = require('./connection.js');
var connection = connectionModel.connection;
events = [];

var connection1 = connection(01, 'Gnome 5K', 'Running together', '11/12/2019 5:00pm EST', "Cardio", "Gnome Man", "9201 University City BLVD");
var connection2 = connection(02, 'Gnome Marathon', 'Running marathons together', '11/21/2019 5:00pm EST', "Cardio", "Gnome Man", "1234 South Main St.");
var connection3 = connection(03, 'Gnome Sprint', 'Sprinting together', '12/04/2019 5:00pm EST', "Cardio", "Bill Clinton", "1294 Tryon Street");

var connection4 = connection(04, 'Gnome Squats', 'Squatting together', '11/12/2019 5:00pm EST', "WeightLifting", "George Lopez", "1284 Northbend Dr.");
var connection5 = connection(05, 'Gnome Bench', 'Benching marathons together', '11/21/2019 5:00pm EST', "WeightLifting", "Norm the Miner", "1286 University City Blvd.");
var connection6 = connection(06, 'Gnome Lifts', 'Lifting together', '12/04/2019 5:00pm EST', "WeightLifting", "Gnome Man", "1235 Luke Road");

events.push(connection1);
events.push(connection2);
events.push(connection3);
events.push(connection4);
events.push(connection5);
events.push(connection6);

var getConnections = function () {
	return events;
}

var getConnection = function (id) {
	var toreturn = 0;
	events.forEach(element => {
		if (element.ID == id) {
			toreturn = element;
		}
	})
	return toreturn;
};
var getCategories = function() {
	var categories = [];
	events.forEach(element => {
		if(!events.contains(element.category)){
			events.push(element.category)
		}
	});
	return categories;
}

module.exports.getConnections = getConnections;
module.exports.getConnection = getConnection;
module.exports.getCategories = getCategories;