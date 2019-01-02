//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //Same as above line using destructuring

//First arg takes URL for DB
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect');
  }
  console.log('Connected to server');

  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
      if (err) return console.log('Unable to insert todo', err);
      console.log(JSON.stringify(result.ops, undefined, 2));
    });

  db.collection('Users').insertOne({
    name: 'Boudreaux',
    age: 32,
    location: 'Austin'
  }, (err, result) => {
      if (err) return console.log('Unable to insert user', err);
      console.log(JSON.stringify(result.ops, undefined, 2));
    });

  db.close();
});
