// const mongoose = require('mongoose');

// // specify the port and create if not exists db name fruitsDB
// mongoose.connect("mongodb://localhost:27017/fruitsDB",{ useNewUrlPaarser: true })

// // create new schema 

// const fruitSchema = new mongoose.Schema({
//     name: String,
//     rating: Number,
//     review: String
// });

// // model(new collection, what structure or schema of fruits)
// const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//     name: "Apple",
//     rating: 7,
//     review:"Pretty solid as a fruit."
// });

// fruit.save();

// // const personSchema = new mongoose.Schema ({
// //     name: String,
// //     age: Number
// // });

// // const Person = mongoose.model("Person", personSchema);

// // const person = new Person({
// //     name: "John",
// //     age: 37
// // });

// // person.save();


// const findDocuments = function(db, callback){

//     const collection = db.collection('fruits');

//     collection.find({}).toArray(function(err, doc){
//         assert.equal(err, null);
//         console.log("found the records");
//         console.log(docs);
//         callback(docs);
//     });
// }