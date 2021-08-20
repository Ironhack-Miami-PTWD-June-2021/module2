// 🚨🚨🚨 ROUTES FILE NEEDS TO BE REQUIRED IN THE APP.JS IN ORDER NOT TO GIVE 404 🚨🚨🚨
// ⭐️⭐️⭐️ APP NEEDS TO KNOW YOU CREATED A NEW ROUTE FILE, THAT'S THE ONLY WAY FOR IT TO KNOW WHICH ROUTES YOU WANT TO HIT ⭐️⭐️⭐️

const router = require("express").Router();

// ********* require Book model in order to use it *********
const Book = require("../models/Book.model");


// ****************************************************************************************
// GET route to display all the books
// ****************************************************************************************

router.get("/books", (req, res, next) => {

    // .find() - always returns an array
    Book.find()
    .then(allBooksFromDB => { // allBooksFromDB is a placeholder, you can name it however you want
        // console.log("Here are the books from DB: ", allBooksFromDB);

        res.render("books-list", { books: allBooksFromDB });
    })
    .catch(error => console.log("An error occurred while getting books from database: ", error )) // <--- .catch() - if some error happens handle it here
});

module.exports = router;
