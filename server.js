var express = require('express');

var port = process.argv[2] || 4000;

var app = express();

app.use('/', express.static(__dirname));

app.listen(port, function() {
  console.log('listening on port %d', port);
});
