// import/require the model

const Cat = require("./models/Cat.model");

// connect the app to the Mongo db

require("./configs/database.config");


// ****************************************************************************************************
// ****************************************************************************************************
// Create new cats (insert document in the DB (uses insertOne() and insertMany()))
// ----------------------------------------------------------------------------

// .create() is a mongoose method and under the hood uses insertOne and insertMany


Cat
    .create(
        { name: "Garfield", age: 13, color: "orange" }
    )
    .then(catDocFromDB => console.log(`Cat create worked well: ${catDocFromDB}`))
    .catch(err => console.log(`Creating a new cat went wrong! Try again 😭 ${err}`))



Cat
    .create(
        [{ name: "Garfield", age: 13, color: "orange" },
        { name: "Milo", age: 4, color: "white" },
        { name: "Felix", age: 8, color: "yellow" }]
    )
    .then(catDocsFromDB => console.log(`Multiple cats created: ${catDocsFromDB}`))
    .catch(err => console.log(`Creating a new cat went wrong! Try again 😭 ${err}`))

