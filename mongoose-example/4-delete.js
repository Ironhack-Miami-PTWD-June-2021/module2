// import/require the model

const Cat = require("./models/Cat.model");

// connect the app to the Mongo db

require("./configs/database.config");

// ****************************************************************************************************
// ****************************************************************************************************
// Deleting cats from DB
// ----------------------------------------------------------------------------

// .findByIdAndRemove() works the same as .findByIdAndDelete()

Cat
    .findByIdAndDelete("6115bd03da131b28965a72fa")
    .then(deletedCat => console.log('Deleted cat: ', deletedCat))
    .catch(err => console.log('Error while updating a cat: ', err))