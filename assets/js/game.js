var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10

console.log(playerName, playerAttack, playerHealth)

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!")
   
    // Subtract the value of the playerattack from the value of enemyHelth and use that result to update the value of the enemyHelth variable

    // Log a resulting message to the console so we know that it worked.

    //Subtract the value of the EnemyAttack from the value of playerHealth and use that result to update the value in the playerHealth variable.

    // Log a resulting message to the console so we know that it worked
}

fight()

function addElement () {
 var oneDive = document.createElement("div")

 var newContent = document.createTextNode("hi there this is awsome!!")

 oneDive.appendChild(newContent)

 var currentDiv = document.getElementById("two")
 document.body.insertBefore(oneDive, currentDiv)

}
addElement()