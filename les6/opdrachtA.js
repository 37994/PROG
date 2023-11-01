function toWeirdCase(string) {
    var splitStr = string.split(" ");
    var newArr = [];
  
    for (var j = 0; j < splitStr.length; j++) {
      var letters = splitStr[j].split("");
      for (var i = 0; i < letters.length; i++) {
        if (letters.indexOf(letters[i]) % 2 === 0) {
          letters[i] = letters[i].toUpperCase();
        }
      }
      newArr.push(letters.join(""));
    }
    console.log(newArr.join(" "));
  }
  
  console.log(toWeirdCase('ik vindt javascript erg leuk'));