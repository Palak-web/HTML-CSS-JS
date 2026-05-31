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
        if(!username.value || !role.value || !photo.value) {
            alert("Bhai naam, role, photo to daal");
            return;
        }
        this.users.push({
            id: Date.now(), // unique id ke liye
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
        this.users.forEach((user) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.style.background = "#1e1e28";
            card.style.borderRadius = "10px";
            card.style.padding = "24px 18px";
            card.style.width = "190px";
            card.style.textAlign = "center";
            card.style.position = "relative"; // delete btn ke liye

            // Delete Button
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "×";
            deleteBtn.style.position = "absolute";
            deleteBtn.style.top = "8px";
            deleteBtn.style.right = "8px";
            deleteBtn.style.background = "#ff4d4d";
            deleteBtn.style.color = "#fff";
            deleteBtn.style.border = "none";
            deleteBtn.style.borderRadius = "50%";
            deleteBtn.style.width = "22px";
            deleteBtn.style.height = "22px";
            deleteBtn.style.cursor = "pointer";
            deleteBtn.style.fontSize = "16px";
            deleteBtn.style.lineHeight = "20px";
            deleteBtn.onclick = () => this.removeUser(user.id);

            const img = document.createElement("img");
            img.src = user.photo;
            img.alt = "user photo";
            img.style.width = "68px";
            img.style.height = "68px";
            img.style.borderRadius = "50%";
            img.style.objectFit = "cover";
            img.style.marginBottom = "12px";
            img.onerror = () => img.src = "https://i.pravatar.cc/100";

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

            card.appendChild(deleteBtn); // button add kiya
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(role);
            card.appendChild(bio);

            document.querySelector(".users").appendChild(card);
        });
    },
    removeUser: function (id) {
        this.users = this.users.filter(user => user.id !== id);
        this.renderUi();
    },
};

userManager.init();