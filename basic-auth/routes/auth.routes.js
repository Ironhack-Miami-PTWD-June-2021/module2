const router = require("express").Router();
const bcrypt = require("bcryptjs");

const User = require("../models/User.model");

/* GET home page */
router.get("/auth/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/auth/signup", (req, res, next) => {
  console.log("Body", req.body);
  //   res.render("auth/signup");
  const { username, password, email } = req.body;

  User.find({ email }).then((userFromDB) => {
    if (!userFromDB) {
      const hashedPassword = bcrypt.hashSync(password, 10);
      User.create({ username, password: hashedPassword, email }).then(
        (responseFromDB) => {
          res.render("index", responseFromDB);
        }
      );
    }
    res.render("index", { errorMessage: "Hey that email is already taken" });
  });
});

module.exports = router;
