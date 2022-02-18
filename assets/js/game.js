/*var playerInfo.name = window.prompt("what is your robot's name?");
var playerInfo.health = 100;
var playerInfo.attack = 10;
var playerInfo.money = 10;*/

/*var playerInfo = {
    name: window.prompt("What is your robot's name"),
    health: 100,
    attack: 10,
    money: 10
};*/

/*var enemyInfo = [
    {
        name: "Roberto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];*/

// you can also log multiple values at once like this: console.log(playerInfo.name, playerInfo.health, playerInfo.attack);

//var enemy.names = ["Roberto", "Amy Android", "Robo Trumble"];
/*console.log(enemy.names);
console.log(enemy.names[0]);
console.log(enemy.names[1]);
console.log(enemy.names[2]);
console.log(enemy.names.length);
for(var i = 0; i < enemy.names.length; i++) {
    console.log(enemy.names[i]);
    console.log(i);
    console.log(enemy.names[i] + " is at " + i + " index");
}*/
//var enemy.health = 50;
//var enemy.attack = 12;


// game states
// "WIN" - player robot has defeated all the enemies
//      * fight all the enemies
//      * defeat each enemy-robot
// "LOSE" - player robot's health is zero or less

var fight = function(enemy) {
    
    while (playerInfo.health > 0 && enemy.health > 0) {
        // alert players that they are starting the round
        
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you want to quit?");
    
            // if yes (true), leave the fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has chosen to skip this fight. Goodbye!");
                // subtract money from playerInfo.money for skipping
                //playerInfo.money = playerInfo.money - 10;
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money);
                break;
            }
        }
       
        if (promptFight === "fight" || promptFight === "FIGHT") {

        // subtract the value of playerInfo.attack from the value of enemy.health and use that result to update the value in the enemy.health variable
        //enemy.health = enemy.health - playerInfo.attack;
        
        // generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
    
        // log a resulting message to the console so we know that it worked
        console.log(
        playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );
    
        // check the enemy's health
        if (enemy.health <= 0) {
        window.alert(enemy.name + " had died!");
        break;
        }
        else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }

        // subtract the value of enemy.attack from the value of playerInfo.health and use that reult to update the value in the playerInfo.health variable
        //playerInfo.health = playerInfo.health - enemy.attack;
        
        // generate random damage value based on enemy-robot's attack power
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);

        // log a resulting message to the console so we know that it worked
        console.log(
        enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );


        // check player's health
        if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        break;
        }
        else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health remaning.");
        }
        }   


        
    }
};
// function to start the game
var startGame = function() {
    // reset player stats
    playerInfo.reset();
    //playerInfo.health = 100;
    //playerInfo.attack = 10;
    //playerInfo.money = 10;
    
    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            //enemy.health = 50;
            //enemy.health = Math.floor(Math.random() * 21) + 40;
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);
            
            // if player is still alive and we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                window.alert("Gongratulations, you've earned 10 dollars!");
                playerInfo.money = playerInfo.money + 10;
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
            playerInfo.refillHealth();
            
            break;
        
        case "UPGRADE": // new case
        case "upgrade":
            playerInfo.upgradeAttack();

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

var playerInfo = {
    name: window.prompt("What is your robot's name"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
};

var enemyInfo = [
    {
        name: "Roberto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

// start the game when the page loads
startGame();
/*console.log(Math.PI);
console.log(Math.round(4.4));
console.log(Math.sqrt(25));*/
/*console.log(Math.max(10, 20, 100));
console.log(Math.max(0, -50));*/    