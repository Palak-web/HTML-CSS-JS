class Createpencil {
    constructor(name, company, price, color) {
        this.name = name;
        this.company = company;
        this.price = price;
        this.color = color;

    }
write(Text) {
    let h1 = document.createElement("h1");
    h1.textContent = Text;
    h1.style.color = this.color;
    h1.setAttribute("data-color", this.color); // yeh add kar
    document.body.appendChild(h1);
}

erase() {
    document.body.querySelectorAll("h1").forEach((element) => {
        if (element.getAttribute("data-color") === this.color) { // yeh check kar
            element.remove();
        }
    });
}
}

let p1 = new Createpencil("nataraj", "Nataraj", 10, "black");
let p2 = new Createpencil("apsara", "Nataraj", 15, "blue");
