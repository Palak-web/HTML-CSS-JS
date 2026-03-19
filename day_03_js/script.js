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