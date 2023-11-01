const readlineSync = require("readline-sync")


while(opnieuwspelen != 'nee') {
    let points = 0;

console.log("Hello You!");
var username = readlineSync.question("Ik heet Liam, wat is jou naam? ");

console.log("Hallo " + username + "!");
console.log("Om mij beter te leren kennen, ga we een quiz doen. Door het beantwoorden van mijn vragen, kan je me beter leren kennen.");

var woonplaats = readlineSync.question("Waar woon ik? A: Alkmaar, B: Bergen, of C: Amsterdam ");
let antwoord1 = 'A'
if (woonplaats == antwoord1) {
    points++;
    console.log("Dat was het goeie antwoord!") 
}else{
    console.log("dat was niet de juiste antwoord, het was A");
}

var hond = readlineSync.question("Wat voor hond heb ik? A: Husky, B: Akita, C: Duitse herder ") 
let antwoord2 = 'B'
if (hond == antwoord2) {
    points++;
    console.log("Dat was het goeie antwoord!")
}else{
    console.log("dat was niet de juiste antwoord, het was B");
}
var haar = readlineSync.question("Wat kleur is mijn haar? A: blauw, B: Groen, of C: Blonde ");
let antwoord3 = 'C'
if (haar == antwoord3) {
    points++;
    console.log("Dat was het goeie antwoord!")
}else{
console.log("dat was niet de juiste antwoord, het was C");
}
var reis = readlineSync.question("hoe lang duurt het voor mij om naar school te komen? A: 10 min, B: 45 min, of C: 2 dagen ");
let antwoord4 = 'B'
if (reis == antwoord4) {
    points++;
    console.log("Dat was het goeie antwoord!")
}else{
console.log("dat was niet de juiste antwoord, het was B");
}
var moedertaal = readlineSync.question("Wat is mijn moeder taal?) A: Spans, B: Duits, of C: Engels ");
let antwoord5 = 'C'
if (moedertaal == antwoord5) {
    points++;
    console.log("Dat was het goeie antwoord!")
}else{
console.log("dat was niet de juiste antwoord, het was C");
}
 console.log("goed gedaan! Jij hebt " +points+ " punten gescored!")

var opnieuwspelen = readlineSync.question(" wilt u nog een keer spelen?");
    
}
    console.log("Dank u wel voor het meedoen in mijn quiz")