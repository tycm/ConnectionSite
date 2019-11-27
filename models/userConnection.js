var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Connections', {useNewUrlParser: true, useUnifiedTopology: true});

var userConnectionSchema = new mongoose.Schema({
	userID: {type: Number, required: true},
	connectionID: {type: Number, required: true},
	rsvp: String
});

var UserConnection = mongoose.model('UserConnection', userConnectionSchema);

module.exports = UserConnection;