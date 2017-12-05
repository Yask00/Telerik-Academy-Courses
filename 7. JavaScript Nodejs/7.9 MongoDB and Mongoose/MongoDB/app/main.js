const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const protocol = 'mongodb:/';
const server = 'localhost:27017';
const databaseName = 'Students';

const connectionString = `${protocol}/${server}/${databaseName}`;
const connectionPromise = MongoClient.connect(connectionString);


// connectionPromise.then((db) => {
//     return db;
// }).then((db) => {
//     db.collection('Names')
//         .find({})
//         .toArray()
//         .then((err, result) => {
//             console.log(result);
//         });
// });
// 
// connectionPromise.then((db) => {
//     console.log(db);
// });

// ADD COLLECTION AND ITEM

MongoClient.connect(connectionString)
    .then((db) => {
        db.collection(databaseName).runCommand({ // in the context of currenct database 
            collMod: "Students",
            validator: {
                $or:
                [
                    { firstName: { $type: "string" } },
                    { lastName: { $type: "string" } },
                    { age: { $regex: /[0-9]{2}/g } }
                ]
            },
            validationLevel: "strict",
            validationAction: "warn"
        })
        .then((result) => {
            console.log(result);
        });
    })
    .then((db) => {
        db.collection(databaseName)
            .insert({
                firstName: 'yuttu',
                lastName: 'ututt',
                age: 227
            })
            .then((result) => {
                console.log(result);
            });
    })
    .catch((error) => {
        console.log(error);
    })