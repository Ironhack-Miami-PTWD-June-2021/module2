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

        res.render("book-pages/books-list", { books: allBooksFromDB, numberOfBooks: allBooksFromDB.length });
    })
    .catch(error => console.log("An error occurred while getting books from database: ", error )); // <--- .catch() - if some error happens handle it here
});

// ****************************************************************************************
// GET route to display the form to create a new book
// ****************************************************************************************

router.get("/books/create", (req, res, next) => {
    res.render("book-pages/book-new");
});

// ****************************************************************************************
// POST route to create a new book
// ****************************************************************************************

// <form action="/books/new" method="POST">
router.post("/books/new", (req, res, next) => {

    // const title = req.body.title;
    // const description = req.body.description;
    // const author = req.body.author;
    // const rating = req.body.rating;

    // the line below is the same as 4 lines above:

    const { title, description, author, rating } = req.body;

    // Goal 1: capture the data from the form --> req.body
    // console.log("What did user input in the form: ", req.body);

    // Goal 2: save the data in the DB --> .create() Mongoose method
    Book.create({ title, description, author, rating })
    .then(newSavedBook => {
        // console.log("is this a new book: ", newSavedBook);
        res.redirect("/books"); // 🏃‍♀️ 🏃‍♀️ 🏃‍♀️ GO TO LIST OF ALL BOOKS PAGE TO SEE YOUR NEW BOOK THERE
    })
    .catch(error => console.log("An error occurred while saving a book to the database: ", error )); // <--- .catch() - if some error happens handle it here

});


// ****************************************************************************************
// POST route to delete a book
// ****************************************************************************************

// <form action="/books/{{_id}}/delete" method="POST">
router.post("/books/:bookId/delete", (req, res, next) => {

    Book.findByIdAndDelete(req.params.bookId)
    .then(() => {
        res.redirect("/books"); // 🏃‍♀️ 🏃‍♀️ 🏃‍♀️ GO TO LIST OF ALL BOOKS PAGE TO SEE THAT YOUR BOOK IS NOT THERE ANY MORE
    })
    .catch(error => console.log("An error occurred while deleting a book from the database: ", error )); // <--- .catch() - if some error happens handle it here
})


// ****************************************************************************************
// GET route to update (edit) a book
// ****************************************************************************************

router.get("/books/:bookId/edit", (req, res, next) => {

    Book.findById(req.params.bookId)
    .then((bookToBeEditedFromDB) => {  // bookToBeEditedFromDB - placeholder

        // console.log("Book to be edited: ", bookToBeEditedFromDB)
        res.render("book-pages/book-edit", bookToBeEditedFromDB);
    })
    .catch(error => console.log("An error occurred while deleting a book from the database: ", error )); // <--- .catch() - if some error happens handle it here
});

// ****************************************************************************************
// POST route to update (edit) a book
// ****************************************************************************************
// <form action="/books/{{_id}}/edit" method="POST">

router.post("/books/:bookId/edit", (req, res, next) => {

    // console.log("is this UPDATED book: ", req.body);

    const { title, description, author, rating } = req.body;
    
    Book.findByIdAndUpdate(req.params.bookId, { title, description, author, rating }, { new: true })
    .then(updatedBookFromDB => { // updatedBookFromDB - placeholder
        // console.log("is this updated >>>>> ", updatedBookFromDB);

        res.redirect(`/books/${req.params.bookId}`); // 🏃‍♀️ 🏃‍♀️ 🏃‍♀️ GO TO DETAILS PAGE TO SEE THE UPDATED BOOK
    })
    .catch(error => console.log("An error occurred while updating a book in the database: ", error )); // <--- .catch() - if some error happens handle it here
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
    .catch(error => console.log("An error occurred while getting a book from database: ", error )); // <--- .catch() - if some error happens handle it here
})





module.exports = router;
