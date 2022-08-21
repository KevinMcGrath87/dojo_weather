function cityAlert(element) {

    alert("The weather in " + element.innerText + " is crummy.");

}

function cookieKiller() {
    console.log(document.getElementsByClassName("centerRect four"));
    var theDiv= document.getElementsByClassName("centerRect four");
    theDiv[0].remove();                                                                 
}

function tempSwitch(element) {
    console.log("\u2109")
    console.log(element.value);
    const temps = document.querySelectorAll(".hi, .low");
    // console.log(temps);
    constTempCol = [];
    var tempNums = [];
    for (var i = 0; i < 8; i++) {
        constTempCol.push(temps[i].innerText.slice(1,3));
        // console.log(constTempCol[i]);
        // console.log(constTempCol);
        tempNums.push(parseInt(constTempCol[i]));
        // console.log(tempNums[i]);
    }

     if(element.value == "\u2109") {
        for (var i=0; i < 8; i++) {
            temps[i].value = tempNums[i]+1;
            console.log(temps[i].value);
        }
        alert("hehehayaya");

     }
    
}