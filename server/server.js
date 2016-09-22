var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var massive = require('massive');
var connectionString = 'postgres://dougmaxfield@localhost/thursdayDemo';

var app = express();
module.exports = app;

var massiveInstance = massive.connectSync({connectionString : connectionString});

app.set('db', massiveInstance);

app.use(bodyParser.json());

app.use(cors());

var animalCtrl = require('./controllers/animalCtrl');

var port = 9001;
app.listen(port, function() {
  console.log('Its over ' + (port - 1) + '!!!');
});
