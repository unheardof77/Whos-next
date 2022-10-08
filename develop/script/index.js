const $buttons = document.getElementById(`buttonWrap`);
const revolvingStudentsArray = [];
//there are 24 people total in the class
class Student {
    constructor(name){
        this.name = name;
    };
};

Student.prototype.add = function(){
    revolvingStudentsArray.push(this);
};

function addToArray(e){
    let target = new Student(e.target.getAttribute`data-name`);
    target.add(target);
    console.log(revolvingStudentsArray);
};

$buttons.addEventListener(`click`, addToArray)