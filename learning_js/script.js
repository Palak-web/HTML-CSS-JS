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

// unary operators
// + - ! typeof ++ --
let c = "10";
console.log(typeof c);
c = +"10"
console.log(typeof c);

// let c1 = ++c + c;
// console.log(c1) //22

let c2 = c++ + c; //21
console.log(c2)

let m = 20;
console.log(m--); //20    //postrequisite
console.log(m);  //19 

console.log(--m); //19    //prerequisite

// control flow 
// if else else if
let loggedin = false ;
let admin = true;
if(loggedin && admin){
    console.log("Hello ma'am")
}
else if(loggedin){
    console.log("Hello user")
}
else{
    console.log("hello Welcome")
}

// switch case
switch(3){
    case 1:
        break;
    case 2:
        break;
    case 3:
        console.log("Hello");
    break;
    default:
}

// early return pattern 
function getVal(val){
    if(val<25) return 'D';
    else if(val<50) return 'C';
    else if(val <75) return 'B';
    else return 'A';
}
console.log(getVal(12)); //D

function getGrade(marks){
    if(marks >= 90 && marks <= 100) return "A";
    else if(marks >= 80 && marks <= 89) return "B";
    else if(marks >= 70 && marks <= 79) return "C";
    else if(marks >= 60 && marks <= 69) return "D";
    else if(marks >= 33 && marks <= 59) return "E";
    else return "fail";  
};
console.log(getGrade(49));  //E

//Loops 
// for (from where, to where and how? go!)
console.log("for loop ")
for(let i = 1; i<101; i++){
    console.log(i);
}

// while (from where, where to stop, how to go!)
console.log("while loop ")
let i =1;
while(i<32) {
    console.log(i);
    i++;
}
let j = 12;

//do-while
do{
    console.log("do-while ",j);
    j++;
}
while(j<2)

//continue & break
console.log("continue; ");
for(let k = 1; k<51; k++){
    if(k === 12){
        continue;
    }
    console.log(k)
}
console.log("break;");
for(let k = 1; k<51; k++){
    if(k === 12){
        break;
    }
    console.log(k)
}

let p = 10;
while(p>0){
    console.log(p)
    p--;
}

//functions
function abcd(){
    console.log("fnc statements")
}

let abc = ()=> {
    console.log("fat arrow fnc")
}

let fnc = function(){
    // fnc expression
}
function dance(v1){  
    console.log(`${v1} is dancing`);
}dance("ghoda");
dance("bhoot"); 