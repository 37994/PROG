
function Shakefunction(woordDatGeschudMoetWorden){
    const characters = woordDatGeschudMoetWorden.split('');
    for (let i = characters.length-1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }
    const geschudwoord = characters.join('')
    //console.log(geschudwoord);
    return geschudwoord;
  }

Shakefunction("bal")

let woord1 = Shakefunction("boekenkast")
let woord2 = Shakefunction("school")
let woord3 = Shakefunction("schoolwerk")

console.log(woord1);
console.log(woord2);
console.log(woord3);