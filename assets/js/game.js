window.alert("Welcome to Robot Gladiators!")
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10
var playerMoney = 10

console.log(playerName, playerAttack, playerHealth)

var enemyName = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
  while (enemyHealth > 0) {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'Skip' to choose.")


    // if player chooses to fight, then fight 
    if (promptFight === "fight" || promptFight === "FIGHT") {
      // remove enemys helth by the plyer attack
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );

      //check enemys health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!")
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.")
      }

      // remove player's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );

      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
      } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }
      // if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
      //confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?")

      // if yes, leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!")
        playerMoney = playerMoney - 2;
      }
    } 
    else {
      fight()
      
      }
    }
  }

 for (var i = 0; i < enemyName.length; i++) {
        var pickedEnemyName = enemyName[i]
        enemyHealth = 50
        fight(pickedEnemyName)
}







function addElement() {
  var oneDive = document.createElement("div")

  var newContent = document.createTextNode("hi there this is awsome!!")

  oneDive.appendChild(newContent)

  var currentDiv = document.getElementById("two")
  document.body.insertBefore(oneDive, currentDiv)

}
addElement()