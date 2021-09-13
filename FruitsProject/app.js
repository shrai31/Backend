
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB")
// mongoose.set('useNewUrlParser', true);
// ,{ useNewUrlPaarser: true }


const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

// model(new collection, what structure or schema of fruits)
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review:"Pretty solid as a fruit."
});

fruit.save();

const findDocuments = function(db, callback){
    const collection = db.collection('fruits');

    collection.find({}).toArray(function (err,fruits){
        assert.equal(err, null);
        console.log("Found the records");
        console.log(fruits);
        callback(fruits);
    });
}