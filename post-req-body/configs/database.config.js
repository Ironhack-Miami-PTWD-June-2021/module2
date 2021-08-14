const mongoose = require("mongoose")

mongoose
  //                                gery-params-demo is the name of our database
  //                                   |
    .connect('mongodb://localhost/gery-params-demo', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to Mongo: ', err))