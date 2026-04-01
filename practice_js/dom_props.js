//Create a new list item <li>New Task</li> and add it to the end of a <ul>.
let  ul = document.querySelector("ul")
let li = document.createElement("li");
li.textContent = "Star fruit";
ul.appendChild(li);

//Create a new img element woth a placeholder source and add it at the top of a div 
let img = document.createElement("img");
img.setAttribute("src",
"https://play-lh.googleusercontent.com/Od_uEStv5JnUgzNuWd1ljzyavnP_eaET5XDOtDpfUXG5qHp7xoFsa5B0l0sBnSQfZnc"
);
document.querySelector("div").prepend(img);
//Select the first item in a list and delete it from the DOM
let one_itm = document.querySelector("ul");
let li_itm = document.querySelector("li");
one_itm.removeChild(li_itm);

//Add a highlight class to every even item in a list.
let bgc = document.getElementById("bgc").querySelectorAll("ul li:nth-child(2n)");
console.dir(bgc);
bgc.forEach(function(elem){
    elem.classList.add("highlight")
});

// set the font of all <p> elements to 18px using .style
let fontset = document.querySelectorAll("p");
console.dir(fontset);
fontset.forEach(function(elem){
    elem.style.fontSize ="18px";
});