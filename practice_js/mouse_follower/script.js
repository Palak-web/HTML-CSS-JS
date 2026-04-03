// let abcd1 = document.querySelector("#abcd");

// abcd1.addEventListener("mouseover", function() {
//     abcd1.style.backgroundColor = "yellow";
// });
// abcd1.addEventListener("mouseout", function() {
//     abcd1.style.backgroundColor = "rgb(165, 36, 58)";
// });
let abcd = document.querySelector("#abcd");

window.addEventListener("mousemove", function(dets){
    abcd.style.top = dets.clientY + "px";
    abcd.style.left = dets.clientX + "px";
});
