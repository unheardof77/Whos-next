const express = require('express');
const path = require('path');
const fs = require(`fs`);
const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));
app.get(`/randomnamegenerator`, (req, res)=> res.sendFile(path.join(__dirname, `public/mockRandomNameGen/index.html`)));

app.post(`/submitlog`, (req, res) =>{
    console.info(`${req.method} request received to submit data.`);
    fs.readFile(`./db/loopLogs.json`, (err, data) => {
        if(err){
            throw new Error(err);
        }else{
            const json = JSON.parse(data);
            json.push(req.body);
            const newData = JSON.stringify(json, null, 1);
            fs.writeFile(`./db/loopLogs.json`, newData, (err) => err? console.error(err): console.log(`Appended data.`)) 
        };
    })
    res.status(200).json(`It worked.`);
});

app.post(`/submitlograndom`, (req, res) =>{
    console.info(`${req.method} request received to submit data to test logs.`);
    fs.readFile(`./db/testloopLogs.json`, (err, data) => {
        if(err){
            throw new Error(err);
        }else{
            const json = JSON.parse(data);
            json.push(req.body);
            const newData = JSON.stringify(json);
            fs.writeFile(`./db/testloopLogs.json`, newData, (err) => err? console.error(err): console.log(`Appended data to test logs.`)) 
        };
    })
    res.status(200).json(`It worked.`);
});


app.listen(PORT, () =>console.log(`App listening at http://localhost:${PORT}`));