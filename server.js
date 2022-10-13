const express = require('express');
const path = require('path');
const fs = require(`fs`);
const PORT = 3001;
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.post(`/submitlog`, (req, res) =>{
    console.info(`${req.method} request received to submit data.`);
    console.log(req.body);
});

app.listen(PORT, () =>console.log(`App listening at http://localhost:${PORT}`));