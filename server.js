//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

//configuring ejs
app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {

  var day = "";
  var today = new Date();
  var currentDay = today.getDay();

  if (currentDay === 6 || currentDay === 0)
    day = "Weekend";
  else
    day = "Weekday";


  res.render('list', {
    kindOfDay: day
  });




});

app.listen(3000, () => console.log("ToDo List app listening on port 3000!"));
