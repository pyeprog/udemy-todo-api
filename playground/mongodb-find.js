const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb');
  }
  console.log('Connected to Mongodb');
  
  var db = client.db('TodoApp');
  db.collection('Users').find().toArray().then(
    (res) => {
      console.log(JSON.stringify(res, undefined, 2));
    },
    (err) => {
      console.log('Unable to find user', err)
    }
  );
  client.close();
});
