var express = require('express');
var app = express();

var routes = require('./routes/routes');

app.use(routes);
app.use(express.static('./public'));

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
