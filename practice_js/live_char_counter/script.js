let inp = document.querySelector("input");
let span = document.querySelector("span");

inp.addEventListener("input", function(){
    let left = 50 - inp.value.length ;
    if(left < 0){
        span.textContent = left;
        span.style.color = "red";
    } else {
        span.textContent = left;
        span.style.color = ""; // ya jo bhi default color ho
}
});
