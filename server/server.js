var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('./db/mongoose.js').mongoose;
var Todo = require('./models/todo').Todo;
var User = require('./models/user').User;


var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  console.log(req.body);
  todo = new Todo({
    text: req.body.text,
    completed: req.body.completed
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    console.log('error while saving the document');
    res.send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then( (todos)=>{
    res.send({
      todos,
      'code': 'success'
    })
  }, (e)=>{
    res.send(e);
  });
})

app.listen(port, () => {
  console.log(`Server is listening on server ${port}`);
});
