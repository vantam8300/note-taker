const express = require("express");
const app = express();
const path = require('path');
const noteApi = require("./public/assets/js/notes");

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/", noteApi);
app.use(express.static("public"));

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
})

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
)