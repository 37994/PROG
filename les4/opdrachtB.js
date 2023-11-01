const readlineSync = require("readline-sync");

function nummerRadden() {
    let answer = "";
    while(answer != Math.random(100)) {
        answer = readlineSync.question("kees een nummer tussen 1 en 100 ");
    }
}

nummerRadden();