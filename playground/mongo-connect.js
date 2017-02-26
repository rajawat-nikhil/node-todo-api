const MongoClient = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectId;

// const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Users', (err, db) => {
  if(err){
    console.log('Unable to connect to MongoDB server');
  }
  else{
    console.log('Connect to MongoDB server');
  }
  db.collection('Users').find({_id: objectId('58af1a042d6d6be5067772cb')}).toArray().then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch the User documents');
  })
  db.close();
});
