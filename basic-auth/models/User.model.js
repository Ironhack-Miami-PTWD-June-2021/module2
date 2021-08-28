const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    unique: [true, "Username is already taken"], // -> Ideally, should be unique, but its up to you
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    unique: [true, "Email is already registered"],
    match: [
      /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
      "Please enter a valid email",
    ],
  },
  password: String,
});

const User = model("User", userSchema);

module.exports = User;
