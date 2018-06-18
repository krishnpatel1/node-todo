const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MondoDB server',err);
    }
    console.log(`Connected to mongoDB server `);

    const db=client.db('TodoApp')
    db.collection('Todos').find({_id:new ObjectID('5b22650a6733192f4b43376b')}).toArray().then(docs=>{
        console.log(JSON.stringify(docs,undefined,2));
    },err=>{
        console.log(`Unable to fetch todos`,err);
    })
    client.close();
})