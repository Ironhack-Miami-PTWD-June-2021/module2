const express = require('express');
const app     = express();
const hbs     = require('hbs'); 
 
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

// URL PARAMS
 
// http://localhost:3000/users/vadim
// : ==> means this is dynamic
// "user" ==> this is a placeholder, it could be any word
app.get('/users/:user', (req, res) => {
  console.log("the URL params are: ", req.params.user); // vadim
});

// http://localhost:3000/store/clothes/winter/coat
app.get('/store/clothes/:season/:singleClothing', (req, res) => {
    console.log("the URL params are: ", req.params); //  { season: 'winter', singleClothing: 'coat' }
});

// QUERY STRINGS

app.get('/store/search', (req, res) => {
    console.log("the query string is: ", req.query); // { name: 'sweater', size: 'M', color: 'yellow' }

    res.render("search-results", req.query )
});

// fake login with GET (🚨🚨🚨🚨 NEVER 🚨🚨🚨🚨🚨)

app.get("/fake-login", (req, res) => {
    res.render("search-results", req.query )
})

app.get('/', (req, res) => res.render("index"))
 
app.listen(3000, () => console.log('App listening on port 3000!'));

