var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Connections', {useNewUrlParser: true, useUnifiedTopology: true});

var connectionSchema = new mongoose.Schema({
	id: {type: String, required: true},
	name: {type: String, required: true},
	topic: String,
	date: Date,
	category: String,
	host: String,
	where: String,
	details: String
});

var Connection = mongoose.model('Connection', connectionSchema);


module.exports = Connection;
