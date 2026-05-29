//Arrays in JS
let marks = [ 92, 82, 88, 97, 90]
console.log(marks);
console.log(marks.length); //property
let heroes = ["Spiderman", "hulk", "antman", "cpt of america" , "Shaktimaan", "Ironman", "Thor"]
//Loops over an array
console.log(heroes)
for(let i=0; i< heroes.length ; i++) {
    console.log(heroes[i])
}
//for of
for(let hero of heroes){
    console.log(hero);
}

//properties of array
//push()
let foodItems = ["potato", "Apple", "litchi" , "tomato"];
foodItems.push("Orange", "banana");
console.log(foodItems);

//pop()
let deletedItem = foodItems.pop();
console.log(foodItems);
console.log("deleted", deletedItem);

//toString
console.log(foodItems);
console.log(foodItems.toString());

let num = [22, 57, 784, 33]
console.log(num);
console.log("num to str = ", num.toString());

//concat
let stu = ["raghav", 'sam', 'diya', ];
let stu2 = ["kashvi", 'deepika', 'savi'];
let students = stu.concat(stu2);
console.log(students);
//unshift
students.unshift("Divakar");
console.log(students)
// shift
let val = students.shift();
console.log("deleted val = ",val)
// slice 
console.log(students)
console.log(students.slice(0, 3));

let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(2, 2, 101, 102);
console.log(arr);
