// 🚨🚨🚨 ROUTES FILE NEEDS TO BE REQUIRED IN THE APP.JS IN ORDER NOT TO GIVE 404 🚨🚨🚨
// ⭐️⭐️⭐️ APP NEEDS TO KNOW YOU CREATED A NEW ROUTE FILE, THAT'S THE ONLY WAY FOR IT TO KNOW WHICH ROUTES YOU WANT TO HIT ⭐️⭐️⭐️

const router = require("express").Router();

// ********* require Book model in order to use it *********
const Book = require("../models/Book.model");


// ****************************************************************************************
// GET route to display all the books
// ****************************************************************************************

// http://localhost:3000/books
// since we prefixed all routes with /books in the app.js when we connected the bookRoutes file with the whole app,
// here we don't have to specify /books, just the rest

router.get("/books", (req, res, next) => {

    // .find() - always returns an array
    Book.find()
    .then(allBooksFromDB => { // allBooksFromDB is a placeholder, you can name it however you want
        // console.log("Here are the books from DB: ", allBooksFromDB);

        res.render("book-pages/books-list", { books: allBooksFromDB });
    })
    .catch(error => console.log("An error occurred while getting books from database: ", error )) // <--- .catch() - if some error happens handle it here
});


// ****************************************************************************************
// GET route to display the book details
// ****************************************************************************************

// http://localhost:3000/books/611eebe3ad71be3893d5271f

router.get("/books/:bookId", (req, res, next) => {

    // console.log(req.params.bookId);

    // .findById() - always returns an object
    Book.findById(req.params.bookId)
    .then(bookFromDB => { // bookFromDB - placeholder
        // console.log("A book is: ", bookFromDB);

        res.render("book-pages/book-details", bookFromDB);
    })
    .catch(error => console.log("An error occurred while getting a book from database: ", error )) // <--- .catch() - if some error happens handle it here


})

module.exports = router;
