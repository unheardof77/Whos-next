const $buttons = document.getElementById(`buttonWrap`);
const studentLoop = [];
const fs = require(`fs`);

//there are 24 people total in the class
class Student {
    constructor(name){
        this.name = name;
    };
};


function checkRSALength(){
    if(studentLoop.length === 24){
        const d = new Date();
        const loopData = {
            loop: studentLoop,
            date: d.getTime()
        };
        //const strData = JSON.stringify(loopData);
        fs.readFile(`../db/loopLogs.json`, `utf-8`, (err, data) =>{
            if(err){
                console.log(err);
            }else if(data){
                const prevData = JSON.parse(data);
                const newOldData = prevData.push(loopData);
                const strData = JSON.stringify(newOldData);
                fs.writeFile(`../db/loopLogs.json`, strData, `utf-8`, (err) => err?console.log(err):console.log(`Added data to JSON file`))
            }else{
                const strData = JSON.stringify(loopData);
                fs.writeFile(`../db/loopLogs.json`, strData, `utf-8`, (err) => err?console.log(err):console.log(`Added data to JSON file`))
            }
        })
    };
};

function addToRSA(e){
    let target = new Student(e.target.getAttribute`data-name`);
    studentLoop.push(target);
    checkRSALength();
};

$buttons.addEventListener(`click`, addToRSA)

