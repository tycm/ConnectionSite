var express = require('express');
var session = require('express-session');

var app = express();
var router = express.Router();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use(session({
	secret: 'ilovebread',
	resave: false,
	saveUninitialized: true
}))


var index = require('./routes/index.js');
var ProfileController = require('./controllers/ProfileController.js')
app.use('/', index);
app.use('/', ProfileController);
app.get('/*', function(req,res){
	res.send("404 Not found");
})





app.listen(8080);

