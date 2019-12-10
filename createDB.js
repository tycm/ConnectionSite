var Connection = require('./models/connection.js');
var UserConnection = require('./models/UserConnection');
var User = require('./models/User.js');
var bcrypt = require('bcryptjs')

console.log("\x1b[91m------------------------\x1b[39m")
console.log("\x1b[91m| Creating The Database!!!\x1b[39m")
console.log("\x1b[91m|					 \x1b[39m")
console.log("\x1b[91m| Please make sure to   \x1b[39m")
console.log("\x1b[91m| comment out line 7    \x1b[39m")
console.log("\x1b[91m| within app.js     \x1b[39m")
console.log("\x1b[91m------------------------\x1b[39m")

//Creating connections
var connection1 = new Connection({id: 01, name: 'Gnome 5K', topic: 'Running together', date: new Date('January 12, 2020 05:00:00'), category: "Cardio", host: 02, where: "9201 University City BLVD", details: "A whole 5k make sure you're prepared"});
var connection2 = new Connection({id: 02, name: 'Gnome Marathon', topic: 'Running marathons together', date: new Date('December 12, 2019 05:00:00'), category: "Cardio", host: 02, where: "1234 South Main St.", details: "A whole marathon 26.2 miles!"});
var connection3 = new Connection({id: 03, name: 'Gnome Sprint', topic: 'Sprinting together', date: new Date('December 21, 2019 05:00:00'), category: "Cardio", host: 01, where: "1294 Tryon Street", details: "Just some sprinting around the track"});

var connection4 = new Connection({id: 04, name:'Gnome Squats', topic: 'Squatting together', date: new Date('December 18, 2019 05:00:00'), category: "WeightLifting", host: 01, where: "1284 Northbend Dr.", details: "Squats, make sure to stretch your knees"});
var connection5 = new Connection({id: 05, name:'Gnome Bench', topic: 'Benching marathons together', date: new Date('October 12, 2020 05:00:00'), category: "WeightLifting", host: 01, where: "1286 University City Blvd.", details: "Bench pressing."});
var connection6 = new Connection({id: 06, name:'Gnome Lifts', topic: 'Lifting together', date: new Date('January 11, 2020 05:00:00'), category: "WeightLifting", host: 02, where: "1235 Luke Road", details: "General free weight lifting"});

//Saving created connections to database
connection1.save()
connection2.save()
connection3.save()
connection4.save()
connection5.save()
connection6.save()

//Hashing passwords
user0pass = bcrypt.hashSync("admin",8)
user1pass = bcrypt.hashSync("cheese",8)
user2pass = bcrypt.hashSync("gnome",8)

//creating users
var user0 = new User({id: 0, firstName: "Admin", lastName: "Null", email: "admin@uncc.edu", address1: "notneeded", address2: "notneeded", city: "notneeded", state: "notneeded", zip: "notneeded", country: "notneeded", password: user0pass});
var user1 = new User({id: 01, firstName: "Tim", lastName: "McCrickard", email: "tmccrick@uncc.edu", address1: "9201 University City BLVD", address2: "Wallis Hall", city: "Charlotte", state: "NC", zip: "28223", country: "US", password: user1pass});
var user2 = new User({id: 02, firstName: "Gnome", lastName: "Man", email: "gman@uncc.edu", address1: "9201 University City BLVD", address2: "Student Union", city: "Charlotte", state: "NC", zip: "28223", country: "US", password: user2pass});

//Saving created users to database
user0.save();
user1.save();
user2.save();

//creating the userconnections for the users profiles
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

//Saving created userconnections to database
userConnection1.save();
userConnection2.save();
userConnection3.save();
userConnection4.save();
userConnection5.save();
userConnection6.save();
userConnection7.save();
userConnection8.save();
userConnection9.save();
userConnection10.save();