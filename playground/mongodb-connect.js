// let mongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost/", (err, client) => {

    if (err) {
        return console.log('unable to connect to mongo server')
    }
    
    console.log('connected to mongodn server');
    let db = client.db('todoApp');
    // db.collection('test').find({_id: new ObjectID("5a5f014e5e84bf5d75b87e4d")}).toArray().then((docs) => {
    //     console.log('test collection');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('unable to fetch test', err);
    // });
    db.collection('test').find({name: "John cena"}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("unable to fetch the test");
    });
    console.log(typeof(db.collection('test').find({_id: new ObjectID("5a5f014e5e84bf5d75b87e4d")}).toArray()));
    // db.collection('test', (err, collection) => {

    //     collection.insertOne({
    //         name: "John cena",
    //         age:43}, (err, result) => {
    //             if(err) {
    //                 return console.log('Unable to insert todo', err);
    //             }
    //             console.log(JSON.stringify(result.ops, undefined, 2)); // result.ops all doc. in db-test
    //         });
    // });

    // db.collection('User').insertOne({
    //     name: 'Williama',
    //     age: 34,
    //     location: 'Mexico'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert User', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    client.close();
});