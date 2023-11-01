const readlineSync = require("readline-sync");

function factorial(num) {
    let result = 1;
    for (let n = num; n > 0; n--) {
        result *= n;
    }
    return result;
}

console.log(factorial(readlineSync.questionInt("Nummer: ")));