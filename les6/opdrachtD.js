const readlineSync = require("readline-sync");
var arr = []

function Boodschappenlijst(){
    var toevoegingen = readlineSync.question('Jouw lijst is nog leeg!\nWat wil je nog toevoegen?');
    while(toevoegingen == 'ja'){
        var toevoegingen1 = readlineSync.question('wat wilt u nog iets toevoegen?');
        arr.push(toevoegingen1);
        if(toevoegingen1 == 'nee') {
            arr.pop();
            console.log('hier is jouw nieuwe lijst!', arr);
            break;
        }
    }
}

Boodschappenlijst();