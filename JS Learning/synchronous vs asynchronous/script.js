//jo code line by line chale usko bolte hai synchronous code
//jo code line by line na chale vo apna time aane par chalega asychronous code
function kuchDerBaadChalega(fnc){
    setTimeout(fnc, Math.floor(Math.random()* 20)* 1000);
}
kuchDerBaadChalega(function(){
    console.log("Hey");
});