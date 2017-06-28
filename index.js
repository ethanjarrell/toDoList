const express = require('express');
const bodyParser = require('body-Parser');
const path = require('path');
const expressValidator = require('express-validator');
const mustacheExpress = require('mustache-express');
const models = require('./models');
const data = require("./data.js");
const app = express();


app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.use(express.static('public'));
app.set('view engine', 'mustache');
app.use(expressValidator());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// read from the json file.
// var file = 'data.json';
// let todo;
// jsonfile.readFile(file, function(err, obj) {
//   todo = obj;
// })

// const task = models.Todo.build({
//   item:'go to the store',
//   status: 'f'
// })
//
// task.save().then(function(newTask){
//   console.log(newTask)
// })


app.get('/', function (req, res, next){
  models.Todo.findAll().then(function(item){
    res.render('index', {listitem:item})
  })
});
// //
// //
app.post("/", function (req, res) {


  // newItem = req.body.Input,
  // newTask = newItem,
  // newTask = models.Todo.build({
  // item:req.body.Input,
  // status: 'f'


  const task = models.Todo.build({
    item: req.body.Input,
    status: 'f'
  })

  task.save().then(function(newTask){
    console.log(newTask)
  })
  res.redirect('/');

});

app.listen(3000, function () {
  console.log('Successfully started express application!');
});
