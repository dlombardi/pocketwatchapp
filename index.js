var express = require('express');
var morgan = require('morgan');

var app = express();
app.use(morgan());

app.get('*', function(req, res) {
  res.sendfile(__dirname + '/' + req.params[0]);
});

app.listen(process.env.PORT || 3000);
