//Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
//Find the average marks of the entire class.
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let val of marks) {
    sum += val;
}
let avg = sum / marks.length;
console.log(`Avg marks of the class = ${avg}`);

// Qs2. Create an array to store companies --> "Bloomberg", "Microsofst", "Uber", "Google", "IBM", "Netflix"
// a. remove the first company from the Array
// b. remove Uber & Add Ola in its place
// c. Add Amazon at the end

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
console.log(companies);

let comp2 = companies.shift();
console.log("deleted item =",comp2);

companies.splice(1, 1, "Ola");
console.log(companies)

companies.push("Amazon");
console.log(companies)