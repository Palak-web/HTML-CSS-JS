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

let m = 6;
let n = 2;
console.log("cond1 || cond2 = ", m < n || m === 6);
console.log("!(6<2) = ", !(a === 6));

// condition statement
let age = 18;

if (age >= 18){
    console.log("You can vote");
}
if (age < 18){
    console.log("You cannot vote");
}

let theme = "dark";
let color;

if (theme === "dark") {
    console.log("Black")
    }
if (theme === "light"){
        console.log("White")
    }

let mode = "silent";

if (mode === "silent") {
    console.log("silent mode")
    }
else {
        console.log("normal or anothoer mode")
    }

//else-if statement
let marks = 100;

if (marks > 50) {
    console.log("Grade A");
} else if (marks == 50) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}
//turnary operators(cond statement)
let Age = 19;
let result = Age >= 18 ? "adult" : "not adult";
console.log(result);

