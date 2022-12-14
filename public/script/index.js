const $buttons = document.getElementById(`buttonWrap`);
const $allButtons = document.querySelectorAll(`button`);
const $chance = document.querySelector(`span`)
let studentLoop = [];

//there are 24 people total in the class
class Student {
    constructor(name){
        this.name = name;
    };
};

calcOdds = () => $chance.textContent = ((1/(24-studentLoop.length))*100).toFixed(2);

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
        calcOdds();
        for(i=0; i < $allButtons.length; i++){
            $allButtons[i].style.display = "inline-block";
        };
    };
};

function addToRSA(e){
    let target = new Student(e.target.getAttribute(`data-name`));
    e.target.style.display = "none"
    studentLoop.push(target);
    checkRSALength();
    for (i=0; i<studentLoop.length; i++) {
        if (studentLoop[i].name === "Morgan") {
            $chance.textContent = 0;
            return;
        } else {
            calcOdds();
        }
    }
};

$buttons.addEventListener(`click`, addToRSA)
calcOdds();