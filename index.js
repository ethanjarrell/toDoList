const express = require('express');
const bodyParser = require('body-Parser');
const path = require('path');
const expressValidator = require('express-validator');
const mustacheExpress = require('mustache-express');
// const jsonfile = require('jsonfile');
const data = require("./data.js");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.use(express.static('public'));
app.set('view engine', 'mustache');
app.use(expressValidator());

// read from the json file.
// var file = 'data.json';
// let todo;
// jsonfile.readFile(file, function(err, obj) {
//   todo = obj;
// })



app.get('/', function (req, res){


    // let inputResluts = input.value;
    // let inputResults = {  },
    // todo.toDoList.push(inputResults);
  res.render('index', { toDoList: data.toDoList });
});


app.post("/", function (req, res) {


  // req.checkBody('item', 'Vader Input').notEmpty();
  // let errors = req.validationErrors();
  // if (errors) {
  //   res.render('index', {errors: errors});
  // }else{
  //   let toDoList = {
  //     'item' : req.body.toDoInput,
  //     'priority' : req.body,
  //     'checked' : ""
  //   }
  // }

  data.toDoList.push(req.body.toDoInput);

  // write to the json file.
  // jsonfile.writeFile(file, todo);

  res.redirect('/');
  
});

app.listen(3000, function () {
  console.log('Successfully started express application!');
});
