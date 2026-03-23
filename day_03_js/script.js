//for loop
for (let count = 1; count<=5; count++){
    console.log("Apna college"); // 5 execution
}

//calculate sum of 1 to 5
let sum= 0;
let n = 33;
for (let i= 1; i <=n; i++){
    sum = sum + i;

}
console.log("sum = ",sum) 
//print 1 to 5

for (let i = 1; i <= 5; i++) {
    console.log("i = ",i);
}

//while loop
let j = 1;
while (j <= 5) {
    console.log("j =", j);
    j++;
}
//do while 
let k = 20;
do {
    console.log("Hello world!");
    k++;
} while (k <= 10);

// Output: "Hello world!" (1 time)

// for-of loop 
let str = "Apna College";

for(let p of str) { //iterator
    console.log(p);
}

let str2 = "JavaScript"

let size = 0;
for (let a of str2){
    console.log("a= ", a);
    size++;
}
console.log("str2 size = ", size);
//for in loop
let student = {
    name: "Kavita singh",
    age:20,
    cgpa: 7.7,
    isPass: true
};

for (let key in student) {
    console.log("key = ", key, "value =", student[key])
}
// strings in JS 
let Str = "ApnaCollege";
let Str2 = "Mannat";

//template litrals
let s = `this is a template litral`;

// console.log(typeof specialString);
let obj = {
    item: "Book",
    price: 100,
};
let output = `the price of ${obj.item} is ${obj.price} rupees`;
console.log(output);

let specialString = `you can add expression also ${1+2+3}`;
console.log(specialString);

//escape character
console.log("apna\ncollege");
let tabchar = "hello guys\twhat's up"; //20
console.log(tabchar.length);
//str methods
let college = "National pg college";
let newcollege = college.toUpperCase();
console.log(newcollege);
console.log(college); //in JS strings are immutable

college = college.toLowerCase();
console.log(college);

let forTrim = "         good Morning everyone      ";
console.log(forTrim.trim());
let string = "Apna College";

// slice - returns part of string
console.log(str.slice(0, 4));    // "Apna"
console.log(str.slice(5));       // "College"
console.log(str.slice(-7));      // "College" (negative index)

// concat - joins two strings
let string1 = "Hello";
let string2 = " World";
let result = string1.concat(string2);
console.log(result);             // "Hello World"
console.log(string1.concat(" ", "JavaScript", "!")); // multiple concat

// replace - replaces searchVal with newVal
let msg = "I love Java";
let newMsg = msg.replace("Java", "JavaScript");
console.log(newMsg);             // "I love JavaScript"

// charAt - returns char at given index
let college1 = "Apna College";
console.log(college1.charAt(0));  // "A"
console.log(college1.charAt(5));  // "C"
console.log(college1.charAt(100)); // "" (out of range)