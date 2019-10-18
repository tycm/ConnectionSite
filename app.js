var express = require('express');

var app = express();
var router = express.Router();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));


var index = require('./routes/index.js');
app.use('/', index);





app.listen(8080);

