const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to MondoDB server',err);
    }
    console.log(`Connected to mongoDB server `);
    const db=client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({_id:ObjectID('5b226395e971732ef81d88bd')},
    {
        $set:{
            status:true
        }
    },
    {
        returnOriginal:false
    }).then(result=>{
        console.log(result);
    })
})
