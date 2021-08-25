const express = require("express");

const hbs = require("hbs");

const app = express();

const port = 3000;

app.use(express.static("public"));

hbs.registerPartials(`${__dirname}/views/partials`);

var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

app.set("views", `${__dirname}/views`);
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/books", (req, res) => {
  res.render("books", { library });
});

app.get("/authors", (req, res) => {
  res.render("authors-view");
});

app.listen(port, () => console.log(`listening on port: ${port}`));
