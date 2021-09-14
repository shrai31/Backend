
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB")
// mongoose.set('useNewUrlParser', true);
// ,{ useNewUrlPaarser: true }


const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the name"]
    },
    rating: {
        type: Number,
        // validation
        min: 1,
        max: 10
    },
    review: String
});

// model(new collection, what structure or schema of fruits)
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 34,
    review:"Pretty solid as a fruit."
});

// fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
})

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 37
})

// person.save();

// const kiwi = new Fruit({
//     name: "Kiwi",
//     score: 10,
//     review: "Energy is High"
// })

// const banana = new Fruit({
//     name: "Banana",
//     score: 8,
//     review: "Red in color"
// })

// const orange = new Fruit({
//     name: "Orange",
//     score: 2,
//     review: "too much sour"
// })

// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if(err){
//         console.log(err);
//     }
//     else {
//         console.log("Succesfully saved all the fruits to fruitsDB");
//     }
// })

Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    }
    else{
        // fruits.map( items =>{
            //     console.log(items.name);
            // })
            // for(let i in fruits)
            // console.log(fruits[i].name);
            // mongoose.connection.close();
            fruits.forEach(function(fruits){
                console.log(fruits.name);
            })
            // fruits.forEach( item=>{
                //     console.log(item.name);
                // })
            }
        });

// Fruit.updateOne({_id: "613f01f536d682eec65d93f7"}, {name: "Pineapple"}, function(err){
//        if(err){
//            console.log(err);
//        }
//        else{
//            console.log("Update succefully");
//        }
//     })

Fruit.deleteOne({name: "Banana"}, function(err){
       if(err){
           console.log(err);
       }
       else{
           console.log("Delete succefully");
       }
    })

const findDocuments = function(db, callback){
    const collection = db.collection('fruits');

    collection.find({}).toArray(function (err,fruits){
        assert.equal(err, null);
        console.log("Found the records");
        console.log(fruits);
        callback(fruits);
    });
}