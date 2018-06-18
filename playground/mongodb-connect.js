const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MondoDB server',err);
    }
    console.log(`Connected to mongoDB server `);

    const db=client.db('TodoApp')
    // db.collection('Todos').insertOne({
    //     text: "someting to do",
    //     status: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log(`unable to insert to todo`,err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    db.collection('User').insertOne({
        name:"Krishn",
        age:27,
        location:"Ahmedabad"
    },(err,result)=>{
        if(err){
            return console.log('unable to insert user',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    })
    client.close();
})