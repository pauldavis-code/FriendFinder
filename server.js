const express = require('express');
const path = require('path');

const route = require('./app/routing/htmlRoutes')

var app = express();
var PORT = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

route(app, PORT)

app.listen(PORT, function() {
  console.log('connected to port ' + PORT)
})