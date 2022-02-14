var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can also log multiple values at once like this: console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
/*console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}*/
var enemyHealth = 50;
var enemyAttack = 12;


// game states
// "WIN" - player robot has defeated all the enemies
//      * fight all the enemies
//      * defeat each enemy-robot
// "LOSE" - player robot's health is zero or less

var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        // alert players that they are starting the round
        
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you want to quit?");
    
            // if yes (true), leave the fight
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
       
        if (promptFight === "fight" || promptFight === "FIGHT") {

        // subtract the value of playerAttack from the value of enemyHealth and use that result to update the value in the enemyHealth variable
        enemyHealth = enemyHealth - playerAttack;
    
        // log a resulting message to the console so we know that it worked
        console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
    
        // check the enemy's health
        if (enemyHealth <= 0) {
        window.alert(enemyName + " had died!");
        break;
        }
        else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // subtract the value of enemyAttack from the value of playerHealth and use that reult to update the value in the playerHealth variable
        playerHealth = playerHealth - enemyAttack;

        // log a resulting message to the console so we know that it worked
        console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );


        // check player's health
        if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
        }
        else {
        window.alert(playerName + " still has " + playerHealth + " health remaning.");
        }
        }   


        
    }
};
for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
    } else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}