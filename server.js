const express = require('express');
const app = express();
const PORT = 3001;
const path = require('path')



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './develop/public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './develop/public/notes.html'));
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
})