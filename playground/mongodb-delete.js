const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return consolo.log('Unable to connect to mongodb');
  }

  var db = client.db('TodoApp');
  db.collection('Users').findOneAndDelete({name:'pd'}).then((res) => {
    console.log('Document deleted');
    console.log(JSON.stringify(res, undefined, 2));
  }, (err) => {
    console.log('Unable to delete document from TodoApp');
  });
  client.close();
})
