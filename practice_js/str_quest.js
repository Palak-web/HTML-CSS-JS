// Prompt the user to enter their full name. Generate a username for them based on the input.
// Start username wwith @, followed by their full name and ending with the fullname length. eg. "savi" -->" @savi4"
let user = prompt("Enter your full name");
let len = user.length
console.log(`@${user}${len}`);