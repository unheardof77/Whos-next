const $buttons = document.getElementById(`buttonWrap`);
const revolvingStudentsArray = [];
let dangerZone = ``;
//there are 24 people total in the class
class Student {
    constructor(name){
        this.name = name;
    };
};

Student.prototype.add = function(array){
    array.push(this);
};

function checkRSALength(){
    if(revolvingStudentsArray.length === 24){
        dangerZone = revolvingStudentsArray.shift()
        console.log(dangerZone)
        console.log(revolvingStudentsArray)
    };
};

function addToRSA(e){
    let target = new Student(e.target.getAttribute`data-name`);
    target.add(revolvingStudentsArray);
    console.log(revolvingStudentsArray);
    checkRSALength();
};

$buttons.addEventListener(`click`, addToRSA)

