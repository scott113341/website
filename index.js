var express = require('express');
var app = express();

var routes = require('./routes/routes');

app.use(routes);
app.use(express.static('./public'));


var port = Number(process.env.PORT || 3000);
app.listen(port, function() {
  console.log('Listening on port %d', port);
});
