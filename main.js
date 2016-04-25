var express = require('express');
var app = express();

app.use(express.static(__dirname + '/client'));

app.get('/', function(req, res){
  res.sendfile(__dirname + '/client/index.html');
});
app.listen(3001, function() { console.log('listening')});