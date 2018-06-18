const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MondoDB server',err);
    }
    console.log(`Connected to mongoDB server `);

    const db=client.db('TodoApp');

    // db.collection('User').deleteMany({name:"Krishn"})
    // .then(result =>{
    //     console.log(result);
        
    // }).catch(err=>{
    //     console.log(err);
    // })

    // db.collection('User').deleteOne({name:'Krishn'})
    // .than(result=>{
    //     console.log(result);
    // }).catch(err=>{
    //     console.log(err);
    // })
    
    // db.collection('User').findOneAndDelete({name:'Krishn'})
    // .than(result=>{
    //     console.log(result);
    // }).catch(err=>{
    //     console.log(err);
    // })

    client.close();
})