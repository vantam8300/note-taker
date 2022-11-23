const notes = require("express").Router();
const path = require('path');

notes.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '../../notes.html'))
})

notes.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, '../../index.html'))
})

notes.get("/api/notes", (req, res) => {
    
})

notes.post("/api/notes", (req, res) => {
    
})

notes.delete("/api/notes/:id", (req, res) => {
    
})

module.exports = notes;