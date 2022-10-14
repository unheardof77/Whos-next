const jsonData = require(`./db/testloopLogs.json`);

const readIntoArray = ()=>{
    for(i=1; i< jsonData.length; i++){
        console.log(`${i}-i`)
        comparison(jsonData[0].loop, jsonData[i].loop);
    };
    for(k=2; k< jsonData.length; k++){
        console.log(`${k}-k`)
        comparison(jsonData[1].loop, jsonData[k].loop);
    };
    for(l=3; l< jsonData.length; l++){
        console.log(`${l}-l`)
        comparison(jsonData[2].loop, jsonData[l].loop);
    };
    for(m=4; m< jsonData.length; m++){
        console.log(`${m}-m`)
        comparison(jsonData[3].loop, jsonData[m].loop);
    };
    for(n=5; n< jsonData.length; n++){
        console.log(`${n}-n`)
        comparison(jsonData[4].loop, jsonData[n].loop);
    };
    // for(k=0; k< jsonData.length; k++){
    //     console.log(k)
    //     comparison(jsonData[k].loop, jsonData[k+1].loop);
    // };
};
function comparison (array1, array2){
    for(j=0; j< array1.length; j++){
        if(array1[j].name == array2[j].name){
            return console.log(array1[j].name, j, array2[j].name);
        };
    };
};

readIntoArray();