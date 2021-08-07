const express = require("express");

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (request, response) => {
  console.log(request.url, request.method, __dirname); // C:\Users\I\Desktop\code\PTWD-Jun\module2\express-intro
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/ironhack", (req, res) => {
  res.send("Hey Rodrigo");
});

app.get("/cats", (req, res) => {
  res.sendFile(`${__dirname}/views/cat.html`);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
