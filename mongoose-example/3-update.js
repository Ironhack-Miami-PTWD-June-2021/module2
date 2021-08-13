// import/require the model

const Cat = require("./models/Cat.model");

// connect the app to the Mongo db

require("./configs/database.config");

// ****************************************************************************************************
// ****************************************************************************************************
// Updating cats in the DB
// ----------------------------------------------------------------------------

Cat
    .findByIdAndUpdate(
        "6115bd03da131b28965a72fa", 
        {$set: {name: "Sandra", age: 17}}, 
        {new: true}
    )
    .then(updatedCat => console.log('Updated cat: ', updatedCat))
    .catch(err => console.log('Error while updating a cat: ', err))