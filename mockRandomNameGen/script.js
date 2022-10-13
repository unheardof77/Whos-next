$btn = document.querySelector('button');
$nameDisplay = document.querySelector('h1');

studentsArray = ["Andrew", "Brandon", "Brittany", "Cole", "Daniel", "Derrick", "Dustin", "Fernando", "Gayle", "Jake", "James", "Jerome", "Joy", "Leo", "Lu", "Miguel", "Mitzi", "Morgan", "Mychael", "Skylar", "Toacin", "Trevor", "Tristan", "William"];
const safeArray = [];

function randomizer() {
    if (safeArray.length === 24) {
        safeArray.length = 0;
    };
    let randomIndex = Math.floor(Math.random()*studentsArray.length);
    let calledOn = studentsArray[randomIndex];
    if (!safeArray.includes(calledOn)) {
        $nameDisplay.textContent = calledOn;
        safeArray.push(calledOn);
    } else {
        randomizer();
    }
    console.log(safeArray)
};

$btn.addEventListener("click", randomizer);


console.log(Math.random());