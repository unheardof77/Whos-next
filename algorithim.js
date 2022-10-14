const jsonData = require(`./db/loopLogs.json`);

const readIntoArray = ()=>{
    for(i=0; i< jsonData.length; i++){
        comparison(jsonData[i].loop, jsonData[i+1].loop);
    };
};
function comparison (array1, array2){
    for(i=0; i< array1.length; i++){
        if(array1[i] === array2[i]){
            
        }
    };
};

readIntoArray();