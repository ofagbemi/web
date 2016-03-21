var compression = require('compression');
var express = require('express');
var exphbs = require('express-handlebars');

var http = require('http');

var app = express();

app.use(compression());

var hbs = exphbs.create({
  handlebars: require('handlebars'),
  layoutsDir: './views/layouts',
  defaultLayout: 'main',
  partialsDir: './partials',
  extname: '.hbs'
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(require('./routes'));
app.use('/res', express.static('res'));
app.use(express.static('public'));

var port = Number(process.env.PORT || 4000);
var server = http.createServer(app).listen(port, function() {
  var addr = server.address();
  console.log('Listening at port %d', addr.port);
});
