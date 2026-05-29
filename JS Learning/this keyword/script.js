//this keyword special keyowrd hai , kyuki jaise ki baaki saare keyword ki value ya unka  natue same rahta hai this keyword ki value ya nature badal jata hai is baat se ki aap usey kaha use kar rahe ho

// global scope
console.log(this);
//this ki value global scope me window hai

// function ke andar
function abcd() {
    console.log(this);
}
abcd();
// this ki value function me window hai

let obj = {
    name: "harsh",
    age: 26,
    sayName: function () {
        console.log(this.age);
    },
};
obj.sayName();
//this ki value method me object hai
//NOTE: IF you're using arrow func in obj then "this" will lose its value and become "window" again and also if you're making more then onen func it will again become a window
//solution is andr wale fuction ko arrow function banao 

let object = {
    name: "Riya",
    class: "BCA",
    call: function(){
        let abt = () =>{
            console.log(this);
        };
        abt();
    },
};
object.call()

//event handler

document.querySelector("h1")
.addEventListener("click",
    function () {
    console.log((this.style.color = "red"));
});
//call apply and bind
//function ko call karte waqt ap set kar sakte ho ki uski this ki value kya hogi

let obj1 ={
    name: "gita",
};
function abcd(){
    console.log(this.name)
};

// abcd.call(obj1);
