const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return consolo.log('Unable to connect to mongodb');
  }

  var db = client.db('TodoApp');
  db.collection('Users').findOneAndUpdate(
    {
      _id:ObjectID('5a43a3806510503fc980cc8e')
    }, {
      $set: {
        name:'High-fen'
      },
      $inc: {
        age: 2
      }
    }, {
      returnOriginal: false
    }).then((res) => {
    console.log('Document updated');
    console.log(JSON.stringify(res, undefined, 2));
  }, (err) => {
    console.log('Unable to update document from TodoApp');
  });
  client.close();
})
