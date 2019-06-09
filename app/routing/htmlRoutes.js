const path = require('path');

module.exports = function(app, port) {
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  })
  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, ('../public/survey.html')))
  })
}