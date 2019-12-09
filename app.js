var express = require('express');
var session = require('express-session');
var favicon = require('serve-favicon');
/////////////////////////////////////////////
//   Make sure to comment the line below ///
/////////////////////////////////////////////
// var createDB = require('./createDB.js')

var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(favicon(__dirname + '/assets/images/favicon.ico'));
app.use(session({
	secret: 'ilovebread',
	resave: false,
	saveUninitialized: true
}))


var index = require('./routes/index.js');
var ProfileController = require('./controllers/ProfileController.js')
var ConnectionController = require('./controllers/ConnectionController.js')
app.use('/', index);
app.use('/', ProfileController);
app.use('/', ConnectionController);
app.get('/*', function(req,res){
	res.send("404 Not found");
})





app.listen(8080);

