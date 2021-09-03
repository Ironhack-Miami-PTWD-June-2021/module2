const router = require("express").Router();
const axios = require("axios");
const { response } = require("../app");

/* GET home page */
router.get("/characters/list", (req, res, next) => {
  axios
    .get("https://ih-crud-api.herokuapp.com/characters")
    .then((responseFromTheAPI) => {
      // console.log(responseFromTheAPI.data);
      res.render("characters/list", {
        character: responseFromTheAPI.data,
      });
    });
});

router.post("/characters/create", (req, res) => {
  // console.log(req.body);
  axios
    .post("https://ih-crud-api.herokuapp.com/characters", req.body)
    .then((responseFromTheAPI) => {
      // console.log("response from POST", responseFromTheAPI.data);
      res.redirect("/characters/list");
    });
});

router.get("/characters/edit/:id", (req, res) => {
  const { id } = req.params;
  const url = `https://ih-crud-api.herokuapp.com/characters/${id}`;
  axios.get(url).then((responseFromTheAPI) => {
    // console.log("a single character", responseFromTheAPI.data);
    res.render("characters/edit", responseFromTheAPI.data);
  });
});

router.post("/characters/edit/:id", (req, res) => {
  console.log("form data", req.body);
  const { id } = req.params;
  axios
    .put(`https://ih-crud-api.herokuapp.com/characters/${id}`, req.body)
    .then((responseFromTheAPI) => {
      // console.log("response from Put", responseFromTheAPI.data);
      res.redirect("/characters/list");
    });
});

router.post("/characters/delete/:id", (req, res) => {
  const { id } = req.params;
  axios
    .delete(`https://ih-crud-api.herokuapp.com/characters/${id}`)
    .then((responseFromTheAPI) => {
      // console.log("response from Delete", responseFromTheAPI.data);
      res.redirect("/characters/list");
    });
});

module.exports = router;
