document.querySelector("#nav").addEventListener("click", function(){
    alert("clicked");
});
let ul = document.querySelector("ul");
ul.addEventListener("click", function(dets){
    dets.target.classList.toggle("lt");
});

// jab bhi aao click karte ho ya koi bhi event raise karte ho to jo aapka event flow hai do phases me chalta hai
// phase1: event top level element se niche ki taraf aayega 
// phase 2: event raised element se parent ki taraf jayega

let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let btn = document.querySelector(".btn");

btn.addEventListener("click", function(dets){
    console.log("button clicked");
});

c.addEventListener("click", function(dets){
    console.log("c clicked");
}, true);
b.addEventListener("click", function(dets){
    console.log("b clicked");
});
a.addEventListener("click", function(dets){
    console.log("a clicked");
}, true);