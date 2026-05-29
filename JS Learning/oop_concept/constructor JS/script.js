function CreatePens(name, price, color, qty) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.qty = qty;
};
CreatePens.prototype.write = function(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color
        document.body.append(h1);
    };
let pen1 = new CreatePens("Alkos", 15, "red", 5)
let pen2 = new CreatePens("linc starline", 12, "orange", 5)

//'cause of new this is constructure function and in cons func always capitalize first letter of function


