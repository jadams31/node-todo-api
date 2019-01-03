const {ObjectId} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');

var id = '5c2e270331ba1e91e94dae6d';

if (!ObjectId.isValid(id)) {
  console.log('ID not valid!');
}

Todo.find({
  _id:id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id:id
}).then((todo) => {
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
  console.log('Todo by Id', todo);
});
