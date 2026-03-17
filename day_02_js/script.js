//This code prints hello world 
/* hello world is our first 
 line of code*/
// console.log("Hello World!");

//Aritmentic operators
// let a = 5;
// let b = 3;
// console.log("a = ", a," & b = ", b);
// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a ** b = ", a ** b);

//Unary noperator
let a = 5;
let b = 3;
console.log("a = ", a," & b = ", b);
a-- ;
a++; 
console.log("a = ", a);
//pro and pre
console.log("a++ = ", a++); //5
console.log("a =", a); //6
console.log("++a = ", ++a); //6

console.log("--a = ", --a); //5
console.log("a =", a); //4
console.log("a-- = ", a--); //4

// // assingment op
// let c = 5;
// let d = 2;

// c +=4; // c =c+4
// console.log("c = ", c); //9

// comparison op
let c = 5;
let d = 2;

console.log("c == b",c == d); //false
console.log("c != b",c != d); //true

let h = 5;
let u = "5"; //str --> number
console.log("h == u",h == u); //true even u is str
//that is why we use === it is strictly checking. Its checking data tyoe also
console.log("h === u",h === u); //now its false

//logical op
let k = 6;
let l = 5;
let cond1 = k > l;  //true
let cond2 = a === 5; //true
console.log("cond1 && cond2 = ", cond1 && cond2);