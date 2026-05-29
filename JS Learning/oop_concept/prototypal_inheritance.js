// ek object hai aap chaho to uski saari props/ method ko inherit kara dete ho doosre object mein
let coffee = {
    color: "dark",
    drink: function(){
        console.log("sip sip sip")
    },
};

let arabiataCoffee = Object.create(coffee);
console.log(arabiataCoffee);
arabiataCoffee.taste = "yummy";
arabiataCoffee.drink();