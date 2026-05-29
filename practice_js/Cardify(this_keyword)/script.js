let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManager = {
    users: [],
    init: function () {
        form.addEventListener("submit", this.submitForm.bind(this));
    },
    submitForm: function (e) {
        e.preventDefault();
        this.addUser();
    },

    addUser: function () {
        if (!username.value || !role.value || !photo.value) {
            alert("Bhai name, role, photo to daalo");
            return;
        }
        this.users.push({
            username: username.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value,
        });
        form.reset();
        this.renderUi();
    },
    renderUi: function () {
        document.querySelector(".users").innerHTML = "";
        this.users.forEach(function (user) {

            const card = document.createElement("div");
            card.classList.add("card");
            card.style.background = "#1e1e28";
            card.style.borderRadius = "10px";
            card.style.padding = "24px 18px";
            card.style.width = "190px";
            card.style.textAlign = "center";

            const img = document.createElement("img");
            img.src = user.photo;
            img.alt = "user photo";
            img.style.width = "68px";
            img.style.height = "68px";
            img.style.borderRadius = "50%";
            img.style.objectFit = "cover";
            img.style.marginBottom = "12px";

            const name = document.createElement("div");
            name.classList.add("name");
            name.textContent = user.username;
            name.style.fontSize = "15px";
            name.style.fontWeight = "bold";
            name.style.color = "#fff";
            name.style.marginBottom = "3px";

            const role = document.createElement("div");
            role.classList.add("role");
            role.textContent = user.role;
            role.style.fontSize = "12px";
            role.style.color = "#999";
            role.style.marginBottom = "10px";

            const bio = document.createElement("div");
            bio.classList.add("bio");
            bio.textContent = user.bio;
            bio.style.fontSize = "12px";
            bio.style.color = "#bbb";
            bio.style.lineHeight = "1.5";

            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(role);
            card.appendChild(bio);

            document.querySelector(".users").appendChild(card);
        });
    },
    removeUser: function () { },
};

userManager.init();