const readlineSync = require("readline-sync");
var points = 0;
function cookieClicker() {

    while(true) {
        let answer = readlineSync.keyIn("wil je klikken? ");
        if(answer = '')  
            points++;
            console.log("punten:", points);
    } 
}

cookieClicker();