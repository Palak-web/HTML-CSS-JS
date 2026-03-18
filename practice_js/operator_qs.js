//Get user to input a number using prompt("Enter a number:").
//Check if the number is a multiple of 5 or not.

let user = Number(prompt("Enter a number: "));

if (user%5 === 0){
    console.log(user," is a multiple of 5")
}
else{
    console.log(user,"is not a multiple by 5")
}

/* Write a code which can give grades to students according to their scores:
- 80–100 → A
- 70–79 → B
- 60–69 → C
- 50–59 → D
- 0–49 → F
 */

let score = Number(prompt("Enter a number: "));

if (score >= 80 && score <= 100) {
    console.log("Grade: A");
} else if (score >= 70 && score <= 79) {
    console.log("Grade: B");
} else if (score >= 60 && score <= 69) {
    console.log("Grade: C");
} else if (score >= 50 && score <= 59) {
    console.log("Grade: D");
} else if (score >= 0 && score <= 49) {
    console.log("Grade: F");
} else {
    console.log("Invalid score");
}