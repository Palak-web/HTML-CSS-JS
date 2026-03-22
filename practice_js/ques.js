//print all even numbers from 0 to 100
for(num = 0; num<=100; num++){
    if(num%2==0){ //even num
        console.log("num",num)
    }
}

//create a game where you start with any random game num. ask the user to keep guessing the game number until the user enters correct value 
let ans = 5; 
let guess;
while (true) {
    guess = prompt("Guess a number:");
    if (guess == ans) {
        alert("YAY! Correct!");
        break;
    }
}