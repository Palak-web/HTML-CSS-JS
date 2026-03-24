//  VAR, LET, CONST 
var username = "Palak";
let num = ((2 * 3 * 4 / 5) + 32);
const PI = 3.14;

//  PRIMITIVE (real copy) 
let a = 10;
let b = a;
b = 20;
console.log("a =", a); // 10
console.log("b =", b); // 20

//  REFERENCE (same memory) 
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("arr1 =", arr1); // [1,2,3,4]
console.log("arr2 =", arr2); // [1,2,3,4]

let obj1 = { name: "Palak" };
let obj2 = obj1;
obj2.name = "Shivani";
console.log("obj1 =", obj1); // { name: "Shivani" }
console.log("obj2 =", obj2); // { name: "Shivani" }

//  BIGINT
let bigNum = 9007199254740991n;
console.log(bigNum);

// DYNAMIC TYPING
let n = "5" - 4;   // 1  (coercion → number)
let n1 = "5" + 4;  // "54" (concatenation)
console.log(n, n1);

//TRUTHY / FALSY 
let falsyVals = [0, false, "", null, undefined, NaN];
falsyVals.forEach(val => console.log(`${String(val)} →`, Boolean(val))); // all false

console.log(Boolean(1));       // true
console.log(Boolean("hello")); // true

// OPERATORS 
let x = 10, y = 3;

// Arithmetic
console.log(x + y);  // 13
console.log(x - y);  // 7
console.log(x * y);  // 30
console.log(x / y);  // 3.33
console.log(x % y);  // 1
console.log(x ** y); // 1000

// Comparison
console.log(x == "10");  // true  (loose)
console.log(x === "10"); // false (strict)
console.log(x != y);     // true
console.log(x !== "10"); // true

// Logical
console.log(x > 5 && y < 5);  // true
console.log(x > 15 || y < 5); // true
console.log(!true);            // false
console.log(!!0);              // false

// Ternary
let result = x > y ? "x is greater" : "y is greater";
console.log(result); // "x is greater"