const $buttons = document.getElementById(`buttonWrap`);
let studentLoop = [];

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
        console.log(loopData)
        fetch(`/submitlog`, {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loopData),
        })
        .catch((err)=> console.error(err))
        studentLoop = []
    };
};

function addToRSA(e){
    let target = new Student(e.target.getAttribute`data-name`);
    studentLoop.push(target);
    checkRSALength();
};

$buttons.addEventListener(`click`, addToRSA)
