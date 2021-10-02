const express = require('express');
const { writeFile } = require('fs');
const app = express();
const PORT = 3001;
const path = require('path')
const noteArry = require('./db/db.json')
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.static('public'))

// get routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

//  post routes
app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    
    noteArry.push(newNote)
    writeFile('./develop/db/db.json', JSON.stringify(noteArry), () => {
        console.log('success')
    })
    res.json(newNote);
});

// starts server
app.listen(PORT, () => {
console.log(`API server now on port ${PORT}!`);
})