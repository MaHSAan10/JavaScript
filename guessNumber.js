let number = Math.floor(Math.random() * 100)
let guessNum
let chances = 0;
console.log("**********Guess Number Game**********\nYou Have 100 Chances To Guess The Number\n")
do {
  guessNum = prompt("Enter a number between 0-100: ")
  guessNum = parseInt(guessNum)
  chances++
  if (guessNum > 100) {
console.log("\nYou Entered Wrong Number!\nYour Number Is Greater Than 100\nTry Again\nYour Number Should Be Between 0-100")
    console.log("Chances Left: " + (100 - chances) + "\n")
  }
  else if(guessNum<0){
      console.log("\nYou Entered Wrong Number!\nYour Number Is Less Than 0\nTry Again\nYour Number Should Be Between 0-100")
    console.log("Chances Left: " + (100 - chances) + "\n")
  }
  else {
    if (guessNum < number) {
      console.log("\nYou Enter Wrong Number!\nYour Number Is Less Than From Given Number\nTry Again")
      console.log("Chances Left: " + (100 - chances) + "\n")
    }
    else if (guessNum > number) {
      console.log("\nYou Enter Wrong Number!\nYour Number Is Greater Than From Given Number\nTry Again")
      console.log("Chances Left: " + (100 - chances) + "\n")
    }
    else if (guessNum == number) {
      console.log("\nCongratulations!\nYou Guessed The Number")
      console.log("Number Of Chances You Got: " + (chances))
      console.log("Number Of Chances You Left: "+(100-chances))
      console.log("Score: " + (100 - chances) + "\n")
    }
  }
  if (chances == 100) {
      console.log("Bad Luck :(\nYou Lost The Game")
      consolle.log("score = "(100 - chances))
    }

} while (guessNum != number && chances < 100);
