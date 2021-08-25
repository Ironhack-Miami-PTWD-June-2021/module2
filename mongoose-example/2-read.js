// import/require the model

const Cat = require("./models/Cat.model");

// connect the app to the Mongo db

require("./configs/database.config");

// ****************************************************************************************************
// ****************************************************************************************************
// Reading the cats from DB (use find(), findOne(), findById())
// ----------------------------------------------------------------------------

// .find() --> always returns an array
Cat
    .find({age: {$gt: 10}})
    .then(catDocs => console.log(`Found these 🐈: ${catDocs}`))
    .catch(err => console.log(`Error while getting cats: ${err}`))


// .findById() --> always returns an object

Cat
    .findById("6115bd03da131b28965a72fc")
    .then(catDoc => console.log(`Found it: ${catDoc}`))
    .catch(err => console.log(`Error while getting a specific cat: ${err}`))