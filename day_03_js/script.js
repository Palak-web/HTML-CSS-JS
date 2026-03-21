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