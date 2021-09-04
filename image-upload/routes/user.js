const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const cloudinary = require("../config/cloudinary.config");

/* GET home page */
router.get("/profile", isLoggedIn, (req, res, next) => {
  res.render("user/profile");
});

router.post("/profile", cloudinary.single("image"), (req, res) => {
  console.log("file object", req.file);
  res.render("user/profile", req.file);
});

module.exports = router;
