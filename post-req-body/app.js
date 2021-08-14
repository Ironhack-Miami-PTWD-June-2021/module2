const express = require('express');
const app     = express();
const hbs     = require('hbs'); 

app.use(express.urlencoded({ extended: true }))
 
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');


app.post('/login', (req, res) => {
    // GET: req.params --> always associated with ":" 
    // GET: req.query --> always associated with "?" 

    // POST: req.body --> always associated with FORM with method "POST"

    // "username" and "pass" are actually values of the "name" attribute in the input in the form
    // <input type="text" name="username"> and <input type="text" name="pass">
    console.log(`username is: ${req.body.username} and password is ${req.body.pass}`);

    res.render('index', req.body)
});

app.get('/', (req, res) => res.render('index'))

app.listen(3000, () => console.log('App listening on port 3000!'));

