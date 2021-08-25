const mongoose = require("mongoose");

// Shema defines the sctructure of the documents in the collection
// this is the blueprint for documents in this collection


const Schema = mongoose.Schema;

const catSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 0,
        max: 30
    },
    color: {
        type: String,
        minlength: 3,
        maxlength: 15
    },
    toys:[{type: String}],
    photoUrl: {
        type: String,
        default: "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
    }
});

// Cat is our mongoose model class
// all cats in cats collection will share these properties
// mongoose turns model name into collection name but in pulural (Cat --> cats)
const Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;



