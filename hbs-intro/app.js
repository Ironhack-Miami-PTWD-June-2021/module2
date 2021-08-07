const express = require("express");

const app = express();
const port = 3000;

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  const data = {
    h2: "Hey there class, this is HBS",
    h5: "hbs is awesome",
    students: ["Joe", "Kyle", "Dria"],
    class: {
      name: "PTWD-Mia-2021",
    },
  };

  res.render("home", data);
});

app.listen(port, () => console.log(`listening on port: ${port}`));
