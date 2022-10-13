const express = require('express');
const path = require('path');
const fs = require(`fs`);
const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.post(`/submitlog`, (req, res) =>{
    console.info(`${req.method} request received to submit data.`);
    fs.readFile(`./db/loopLogs.json`, (err, data) => {
        if(err){
            throw err;
        }else{
            const json = JSON.parse(data);
            json.push(req.body);
            const newData = JSON.stringify(json);
            fs.writeFile(`./db/loopLogs.json`, newData, (err) => err? console.error(err): console.log(`Appended data.`)) 
        };
    })
    return res.status
});

app.listen(PORT, () =>console.log(`App listening at http://localhost:${PORT}`));