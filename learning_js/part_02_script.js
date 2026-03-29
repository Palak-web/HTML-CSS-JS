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
