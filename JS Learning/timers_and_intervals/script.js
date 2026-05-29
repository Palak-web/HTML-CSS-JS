// setTimeout(function(){
//     console.log("hello");
// }, 5000);
// setInterval(function() {
//     console.log("hello");
// }, 5000);
// setTimeout(function(){
//     console.log("hey");
// }, 3000);
// clearTimeout(tm);
let count = 0;
let prog = document.querySelector(".progress-bar");
let status = document.querySelector(".status");



let intv = setInterval(function() {
    if(count <= 99){
        count++;
        prog.style.width = `${count}%`;
        status.textContent = `Phase: Initializing ${count}%`;
    }
    else {document.querySelector("h2").textContent = "downloaded.";
        clearInterval(intv);
    }
}, 10000 / 100);