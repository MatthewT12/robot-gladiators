var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// you can also log multiple values at once like this: console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // alert players that they are starting the round
    window.alert("Welcone to Robot Gladiators!")
    
    // subtract the value of playerAttack from the value of enemyHealth and use that result to update the value in the enemyHealth variable
    enemyHealth = enemyHealth - playerAttack;
    
    // log a resulting message to the console so we know that it worked
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check the enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " had died!");
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
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health remaning.");
    }
};

fight();