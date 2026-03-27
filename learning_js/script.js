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

function add(v1 =0 , v2=0){
    console.log(v1+ v2);

}
add(41, 57);

//return in func
function abcd(v){
    return 10+v;
}
let val = abcd(9);
console.log(val)

function naamTera(v){
    return v + " Verma";
}
console.log(naamTera("Palak"));

//first class function
//Higher order function --> ek aisa function jo ki return kare funtion ya fir accept kare ek fnc apne parameter mein
function Greet(val){  //hof
    val();
}
Greet(function(){
    console.log("Hello Doston Mera naam hai Doremon")
})

//pure vs impure fnc
let no = 12;
function pure(){
    console.log("Hello");
}
pure();
function impure(){
    no++;
    console.log(no);
}
impure();

//closures
function close(){
    let a = "happy";
    return function(){
        console.log(a," Birthday");
    }
}
const closure = close();
closure();
// IIFE
(function(){
    console.log("it is a immediate function")
})();

//Hoasting func
hoast();

function hoast(){
    console.log("heyehey")
}

let multiply = (a, b) => {
    return a * b;
};
function dfg(hell){
    hell();
}
dfg(function(){
    console.log("simple")
});
function bmi(weight, height){
    return weight / (height*height);
}
console.log(bmi(45, 1.7).toFixed(2));

//Higher-Order Function
function discCal(d){
    return function(price){
        return price - price*(d /100);
    }
}
let discounter = discCal(10);
console.log(discounter(200));

//HOF + CallBack function
function disc(price,d, callback){
    return callback(price, d);
}
const finalPrice = disc(100, 20 ,function(price,d){
    return price - price*(d /100);
});
console.log(finalPrice);
function double(val){
    return val *2;
}
console.log(double(9));

(function(){
    const password = "SECRET PASSWORD";
    console.log(password);
})();
// console.log(password);

//Arrays
let marks = [10, 20, 30, 40, 99];
console.log(marks)
console.log(marks[0])
marks.push(90);
console.log(marks);
marks.pop(90);
console.log(marks);
marks.shift();
console.log(marks);
marks.splice(2,1);
console.log(marks);
let newarr = marks.slice(0,2)
console.log(newarr);
//reverse arr
let arr = [1, 2, 3, 4, 5];
console.log(arr.reverse());

//sorting of arr
let arr3 = [11, 67, 54, 55, 33];
let ar = arr3.sort(function(a, b){  // sort always accepting a function
    return a-b;       //a - b ascending order & b-a descending order
});
//forEach
console.log(ar);
arr3.forEach(function(val) {
    console.log(val +5);
}); 
//map
let newarr1 = arr3.map(function(val){
    if(val > 50) return val;
}); console.log(newarr1);
//filter
let rownum = [1, 2, 3, 4, 5, 6];
let newrownum = rownum.filter(function(val){
    return (val%2 === 0);
}); console.log(newrownum);
//reduce
let ans = rownum.reduce(function(accumulator, val){
    return accumulator + val;
}, 0);
//find
let rownum1 = [1, 2, 4, 3, 4, 5, 6];
let answer = rownum1.find(function(vl){
    return vl === 4;
}); console.log(answer);
//some
let scr = [30, 50, 77, 90, 57];
let any = scr.find(function(vl){
    return vl >= 75;
}); console.log(any);
//every
let score = [9, 50, 77, 90, 57];  // return false
let everyy = score.every(function(vl){
    return vl > 30;
});
//Destructuring, Spreate operator
let arr4 = [1,4, 5, 6, 7,];
let [s, u, ,v] = arr4;


//Object
let obj = {
    name : "Pragya Verma",
    age: 20,
    Gender: "F"
};
console.log(obj.Gender);
let aa = "name";
console.log(obj[aa]);

const user = {
    name: "Palak Verma",
    address:{
        City: "Lucknow",
        pin: 123321,
        Locations:{
            lat:22.4,
            lng: 77.2,
        },
    },
};     //Nesting
console.log(user.address.Locations.lat);  //Deep Access
let {lat,lng} = user.address.Locations;
console.log(lng);   //Destructuring

let obj2 = {
    name: "Ram",
    age: 23,
    email: "ram22@gmail.com"
};
for (let key in obj2){  //Loop in Obj
    console.log(key, obj2[key]);  //key accessing and also values
}