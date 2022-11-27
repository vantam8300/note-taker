const notes = require("express").Router();
const uuid = require("../../../helper/uuid");
const fs = require("fs");

notes.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            res.json(JSON.parse(data))
        }
      });
})

notes.post("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            let newNotes = JSON.parse(data)
            req.body.id = uuid();
            newNotes.push(req.body);
            fs.writeFile("./db/db.json", JSON.stringify(newNotes, null, 4), err => {
                res.json(newNotes);  
            })
        }
      });
})

notes.delete("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    fs.readFile("./db/db.json", 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            let newNotes = JSON.parse(data)
            newNotes.forEach((element, i) => {
                if (element.id === id) {
                    newNotes.splice(i, 1)
                }
            })
            fs.writeFile("./db/db.json", JSON.stringify(newNotes, null, 4), err => {
                res.json(newNotes);  
            })
        }
      });
})

module.exports = notes;