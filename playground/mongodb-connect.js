const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb');
  }
  console.log('Connected to Mongodb');

  var db = client.db('TodoApp');
  db.collection('Users').insertOne({
    name: 'pd',
    age: 18,
    description: 'love programming'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  client.close();
});
