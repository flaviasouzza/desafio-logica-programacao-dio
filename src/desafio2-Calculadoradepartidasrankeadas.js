const prompt = require("prompt-sync")();
while(true) {
let name = prompt("Enter the hero's name: ");
let win = parseInt(prompt("How many wins: "));
let defeats = parseInt(prompt("How many defeats: "));
// let result = win - defeats;


function winNow(win){
    console.log("Hello " + name + "your number of wins is: " + win)
}

function defeatsNow(defeats) {
    console.log("and your number of defeats is:" + defeats)
}

function saldo(win, defeats) {
    return win - defeats;
  }
  let totalSaldo = saldo(win, defeats);


if (totalSaldo <= 10) {
    console.log("The hero has the balance of " + name + " is at level = Iron");
}
else if (totalSaldo > 11 && totalSaldo <= 20) {
    console.log("The hero has the balance of " + name + " is at level = Bronze");
}
else if (totalSaldo > 21 && totalSaldo <= 50){
    console.log("The hero has the balance of " + name + " is at level = Silver");
}
else if (totalSaldo > 51 && totalSaldo <= 80){
    console.log("The hero has the balance of " + name + " is at level = Gold");
}
else if (totalSaldo > 81 && totalSaldo <= 90){
    console.log("The hero has the balance of " + name + " is at level = Diamond");
}
else if (totalSaldo > 91 && totalSaldo <= 100){
    console.log("The hero has the balance of " + name + " is at level = Legendary");
}
else  {
    console.log("The hero has the balance of " + name + " is at level = Immortal");
}

let checkAnotherLevel = prompt("Would you like to check out any more heroes? [Y/N]: ");


if (checkAnotherLevel.trim().toLowerCase() === "n") {
    console.log("Checks completed");
    break;

  } else if (checkAnotherLevel.trim().toLowerCase() === "y") {
    console.log("Let's go...");

  } else {
    console.log("Invalid entry! Please enter 'Y' or 'N'.");
  }
}