$btn = document.querySelector('button');
$nameDisplay = document.querySelector('h1');
let studentLoop = [];
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
        fetch(`/submitlograndom`, {
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
    let target = new Student(e);
    studentLoop.push(target);
    checkRSALength();
};

studentsArray = ["Andrew", "Brandon", "Brittany", "Cole", "Daniel", "Derrick", "Dustin", "Fernando", "Gayle", "Jake", "James", "Jerome", "Joy", "Leo", "Lu", "Miguel", "Mitzi", "Morgan", "Mychael", "Skylar", "Toacin", "Trevor", "Tristan", "William"];
const safeArray = [];

function randomizer() {
    if (safeArray.length === 24) {

        safeArray.length = 0;
    };
    let randomIndex = Math.floor(Math.random()*studentsArray.length);
    let calledOn = studentsArray[randomIndex];
    if (!safeArray.includes(calledOn)) {
        addToRSA(calledOn);
        $nameDisplay.textContent = calledOn;
        safeArray.push(calledOn);
    } else {
        randomizer();
    }
    console.log(safeArray)
};

$btn.addEventListener("click", randomizer);


