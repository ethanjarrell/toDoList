const express = require('express');
const bodyParser = require('body-Parser');
const path = require('path');
const mustacheExpress = require('mustache-express');

const data = require("./data.js");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.use(express.static('public'));
app.set('view engine', 'mustache');


app.get('/', function (req, res){

  res.render('index', { toDoList: data.toDoList })
});


app.post("/", function (req, res) {
  toDoList.push(req.body.toDoList);
  res.redirect('/');
});

app.listen(3000, function () {
  console.log('Successfully started express application!');
});
