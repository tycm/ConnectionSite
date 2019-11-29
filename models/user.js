var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Connections', {useNewUrlParser: true, useUnifiedTopology: true});

var userSchema = new mongoose.Schema({
	id: {type: String, required: true},
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	email: String,
	address1: String,
	address2: String,
	city: String,
	state: String,
	zip: String,
	country: String,
	username: String,
	password: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;