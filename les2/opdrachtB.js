const readlineSync = require("readline-sync")

var leeftijd = readlineSync.question("goede avond, hoe oud ben je?")
if(leeftijd > 20) {
    var jaofnee = readlineSync.question("mag ik jouw ID zien?")
        if(jaofnee == 'ja') {
        console.log("kom naar binnen") 

        }else{
            console.log("Dam mag je helaas niet binnen")
        }
}else{
    console.log("Dam mag je helaas niet binnen")
}
