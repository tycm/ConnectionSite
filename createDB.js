var Connection = require('./models/connection.js')

console.log("\x1b[91m------------------------\x1b[39m")
console.log("\x1b[91m| Creating The Database!!!\x1b[39m")
console.log("\x1b[91m|					 \x1b[39m")
console.log("\x1b[91m| Please make sure to   \x1b[39m")
console.log("\x1b[91m| comment out line 4    \x1b[39m")
console.log("\x1b[91m| within app.js     \x1b[39m")
console.log("\x1b[91m------------------------\x1b[39m")

var connection1 = new Connection({id: 01, name: 'Gnome 5K', topic: 'Running together', date: new Date('November 12, 2019 05:00:00'), category: "Cardio", host: 02, where: "9201 University City BLVD", details: "A whole 5k make sure you're prepared"});
var connection2 = new Connection({id: 02, name: 'Gnome Marathon', topic: 'Running marathons together', date: new Date('December 12, 2019 05:00:00'), category: "Cardio", host: 02, where: "1234 South Main St.", details: "A whole marathon 26.2 miles!"});
var connection3 = new Connection({id: 03, name: 'Gnome Sprint', topic: 'Sprinting together', date: new Date('October 3, 2019 05:00:00'), category: "Cardio", host: 01, where: "1294 Tryon Street", details: "Just some sprinting around the track"});

var connection4 = new Connection({id: 04, name:'Gnome Squats', topic: 'Squatting together', date: new Date('December 4, 2019 05:00:00'), category: "WeightLifting", host: 01, where: "1284 Northbend Dr.", details: "Squats, make sure to stretch your knees"});
var connection5 = new Connection({id: 05, name:'Gnome Bench', topic: 'Benching marathons together', date: new Date('October 12, 2019 05:00:00'), category: "WeightLifting", host: 01, where: "1286 University City Blvd.", details: "Bench pressing."});
var connection6 = new Connection({id: 06, name:'Gnome Lifts', topic: 'Lifting together', date: new Date('January 11, 2020 05:00:00'), category: "WeightLifting", host: 02, where: "1235 Luke Road", details: "General free weight lifting"});

connection1.save(function(err, connection1){
	if(err) return console.log(err);
})
connection2.save(function(err, connection2){
	if(err) return console.log(err);
})
connection3.save(function(err, connection3){
	if(err) return console.log(err);
})
connection4.save(function(err, connection4){
	if(err) return console.log(err);
})
connection5.save(function(err, connection5){
	if(err) return console.log(err);
})
connection6.save(function(err, connection6){
	if(err) return console.log(err);
})


var User = require('./models/User.js');

var user0 = new User({id: 0, firstName: "Admin", lastName: "Null", email: "admin@uncc.edu", address1: "notneeded", address2: "notneeded", city: "notneeded", state: "notneeded", zip: "notneeded", country: "notneeded", password: "admin"});
var user1 = new User({id: 01, firstName: "Tim", lastName: "McCrickard", email: "tmccrick@uncc.edu", address1: "9201 University City BLVD", address2: "Wallis Hall", city: "Charlotte", state: "NC", zip: "28223", country: "US", password: "cheese"});
var user2 = new User({id: 02, firstName: "Gnome", lastName: "Man", email: "gman@uncc.edu", address1: "9201 University City BLVD", address2: "Student Union", city: "Charlotte", state: "NC", zip: "28223", country: "US", password: "gnome"});

user0.save(function(err, user1){
	if(err) return console.log(err);
});
user1.save(function(err, user1){
	if(err) return console.log(err);
});
user2.save(function(err, user2){
	if(err) return console.log(err);
});



var UserConnection = require('./models/UserConnection');

var userConnection1 = new UserConnection({userID: 2,connectionID: 3,rsvp: "Yes"});
var userConnection2 = new UserConnection({userID: 2,connectionID: 6,rsvp: "Maybe"});
var userConnection3 = new UserConnection({userID: 2,connectionID: 5,rsvp: "Yes"});
var userConnection4 = new UserConnection({userID: 2,connectionID: 1,rsvp: "No"});
var userConnection5 = new UserConnection({userID: 1,connectionID: 3,rsvp: "Maybe"});
var userConnection6 = new UserConnection({userID: 1,connectionID: 2,rsvp: "No"});
var userConnection7 = new UserConnection({userID: 1,connectionID: 1,rsvp: "Maybe"});
var userConnection8 = new UserConnection({userID: 1,connectionID: 4,rsvp: "Yes"});
var userConnection9 = new UserConnection({userID: 1,connectionID: 5,rsvp: "Yes"});
var userConnection10 = new UserConnection({userID: 1,connectionID: 6,rsvp: "Maybe"});

userConnection1.save(function(err, userConnection1){
	if(err) return console.log(err);
});
userConnection2.save(function(err, userConnection2){
	if(err) return console.log(err);
});
userConnection3.save(function(err, userConnection3){
	if(err) return console.log(err);
});
userConnection4.save(function(err, userConnection4){
	if(err) return console.log(err);
});
userConnection5.save(function(err, userConnection5){
	if(err) return console.log(err);
});
userConnection6.save(function(err, userConnection6){
	if(err) return console.log(err);
});
userConnection7.save(function(err, userConnection7){
	if(err) return console.log(err);
});
userConnection8.save(function(err, userConnection8){
	if(err) return console.log(err);
});
userConnection9.save(function(err, userConnection9){
	if(err) return console.log(err);
});
userConnection10.save(function(err, userConnection10){
	if(err) return console.log(err);
});