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
                //playerMoney = playerMoney - 10;
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney", playerMoney);
                break;
            }
        }
       
        if (promptFight === "fight" || promptFight === "FIGHT") {

        // subtract the value of playerAttack from the value of enemyHealth and use that result to update the value in the enemyHealth variable
        //enemyHealth = enemyHealth - playerAttack;
        
        // generate random damage value based on player's attack power
        var damage = randomNumber(playerAttack - 3, playerAttack);
        enemyHealth = Math.max(0, enemyHealth - damage);
    
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
        //playerHealth = playerHealth - enemyAttack;
        
        // generate random damage value based on enemy-robot's attack power
        var damage = randomNumber(enemyAttack - 3, enemyAttack);
        playerHealth = Math.max(0, playerHealth - damage);

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
// function to start the game
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            //enemyHealth = 50;
            //enemyHealth = Math.floor(Math.random() * 21) + 40;
            enemyHealth = randomNumber(40, 60);
            fight(pickedEnemyName);
            
            // if player is still alive and we're not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                window.alert("Gongratulations, you've earned 10 dollars!");
                playerMoney = playerMoney + 10;
                // ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over. Do you want to visit the store before the next round?");
                
                // if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
                   
            }
        } 
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    // play the game again
    // startGame();
    
    // after the loop ends, player is either out health or enemies to fight, so run the endGame function
    endGame();
};

// function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    //window.alert("The game has now ended. Let's see how you did!");
    
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function() {
    // ask player what they would like to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE you attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    //console.log("entered the shop");

    // use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": // new case
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");

                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }    
            
            break;
        
        case "UPGRADE": // new case
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
                shop();
            }

            break;
        
        case "LEAVE": // new case
        case "leave":
            window.alert("Leaving the store.");

            // do nothing, so function will end
            break;
        default: 
            window.alert("You did not pick a valid option. Try again.");

            // call shop() again to force the player to pick a valid option
            shop();
            break;
    }
}

// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};
// start the game when the page loads
startGame();
/*console.log(Math.PI);
console.log(Math.round(4.4));
console.log(Math.sqrt(25));*/
/*console.log(Math.max(10, 20, 100));
console.log(Math.max(0, -50));*/    