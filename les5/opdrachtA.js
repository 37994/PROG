const readlineSync = require("readline-sync");
let playerName = readlineSync.question('kees jouw naam: ');
console.log('welkom', playerName);

function spel() {
    
    console.log('\nJe komt een Slijm tegen \nJe hebt 21 HP.\nWat ga je doen? \n\nVechten of vluchten?');
    let keuze1 = readlineSync.question('antwoord: ');
    
    if(keuze1 == 'Vechten') {
        console.log(playerName, 'doet 5 schade!\nSlijm valt aan en doet 2 schade.\n\nVechten of vluchten?');
        let keuze2 = readlineSync.question('antwoord: ');

        if(keuze2 == 'Vechten') {
            console.log(playerName, 'heeft de slijm vermoort!')

        }else if(keuze2 == 'vluchten'){
            console.log(playerName, 'heeft weg gerent!');
        }
    }else if(keuze1 == 'vluchten'){
        console.log(playerName, 'heeft weg gerent!');
    }
}

spel();