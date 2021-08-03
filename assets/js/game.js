
var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//Game States
// "WIN" - Player robot has defeated all enemy-robots
//  *Fight all enemy-robots
//  *Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less


 var fight = function(enemyName) {
     // fight function statements
   // Alert players that a round is starting 
    window.alert("Welcome to the Robot Gladiators!");
    // player choose's  to fight or skip 
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ");

    //if player chooses to fight, then fight 
    if (promptFight === "fight" || promptFight === "FIGHT") {
       // remove enemys helth by subtracting the amount set in the playerAttack vareuble
       enemyHealth = enemyHealth - playerAttack;
     console.log(
         playerName + " attacked " + enemyNames + ". " + enemyName + " now has " + enemyHealth + " health remaining."
     );  
    
 // check enemys helth
      if (enemyHealth <= 0) {
          window.alert (enemyNames + " has died!");
      } else {
          window.alert(enemyNames + " still has " + enemyHelth + " health left.");
      } 

 // remove players health by subtracting the amount set in the enemyAttack variable 
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
    );
    
 // if player's heath
 if (playerHealth <= 0) {
     window.alert(playerName + " has died! ");
    }   else {
     window.alert(playerName + " still has " + playerHealth + " health left.");
    }

 // if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
 // if yes (ture), leave fight
  if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
        } 
    else {
   fight();
    }

    } else {
    window.alert("You need to pick a valid option. Try again!");
    }   
    console.log(enemyNames.length);

  for(var i = 0; i < enemyNames.length; i++) {
     fight(enemyNames[i]);
  }
}