// DOM MANIPULATION
// HTML SE ELEMENT SELECT KARNA 
// TEXT BADALNA
// CSS BADALNA
// ATTRIBUTE
// EVENT LISTENERS 
let abcd = document.getElementById("abcd");
console.log(abcd);
// let abc = document.getElementsByClassName("abc");
// console.log(abc);
let abc = document.querySelector("h4");
console.dir(abc);
let h1 = document.querySelector("h1");
h1.innerHTML = "<i>hey hello</i>";
// h1.hidden=true;
console.dir(h1);
//attribute Manipulation 

// let a = document.querySelector("a");
// // a.href= "https://www.google.com";
// a.setAttribute("href", "https://www.google.com");
// console.dir(a);

let img = document.querySelector("img");
img.setAttribute("src","https://thumbs.dreamstime.com/b/beautiful-scarlet-red-dahlia-flower-faded-blurry-blue-background-dark-art-moody-floral-toned-filters-retro-vintage-178241108.jpg");
// img.setAttribute("src","")
console.dir(img)

let a = document.querySelector("a");
console.log(a.getAttribute("href"));

let u = document.getElementById("u");
u.removeAttribute("href");

//Dynamic DOM manipulation
let h3 = document.createElement("h3");
h3.textContent = "Hello hey!";
document.body.append(h3);  //prepend --> phle aa jayega
// console.log("h3")
let h11 = document.createElement("h1");
h1.textContent = "Okay bye ";
document.querySelector("div").append(h11);  //prepend --> phle aa jayega
console.log("h3")

//CSS via JS
let h12 = document.querySelector("h1");
h12.style.color = "red";
h12.style.backgroundColor = "pink";
h12.style.textTransform = "capitalize";
console.dir(h12);
let h4all = document.querySelector("h4");
h4all.classList.add("abc")  //recommended  way
h4all.classList.toggle("abc"); //reversing 