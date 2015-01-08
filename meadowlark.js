var express = require('express');
var app = express();
var handlebars = require('express-handlebars').
  create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);

app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate ...');
});

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/about', function(req, res) {
  res.render('about');
});

// Custom 404 page
app.use(function(req, res, next) {
  res.status(404);
  res.render('404');
})

// Custom 500 page
app.use(function(err, req, res, next) {
  console.log(err.stack);
  res.status(500);
  res.render('500');
});

