const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  // unless you are defining more than the "type" property, you don't have to use {} (see below)
  // title: {type: String, require: true},
  title: String,
  description: String,
  author: String,
  rating: Number
});

// const Book = model("Book", bookSchema);
// module.exports = Book;

// a single line that does the same as 2 lines above
module.exports = model("Book", bookSchema);

// Book --> model --> always uppercase and singular
// books --> collection --> always lowercase and plural
