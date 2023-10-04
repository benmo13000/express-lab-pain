// Require modules
const express = require('express');
const path = require('path');
const teacherDb = require('./data/teacher-Db')
// Create the Express app
const app = express();
  
// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Mount middleware (app.use)
  
  
// Mount routes
app.get('/', function(req, res) {
    res.redirect('/home');
  });

  app.get('/teachers', function(req, res) {
    res.render('teachers/index', {
      teachers: teacherDb.getAll()
    });
  });
//define a route that matches a request of
// GET /home and sends a text response of 
// <h1> Home Page </h1>    
app.get('/home', function(req, res) {
    res.render('home');
  });
  
// Tell the app to listen on port 3000
app.listen(3000, function() {
  console.log("Fuck you it's working");
});