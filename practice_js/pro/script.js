let users = [
    {
        name: "amisha rathore",
        pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "silent chaos in a loud world 🌍🫧 | not for everyone",
    },
    {
        name: "kiara mehta",
        pic: "https://images.unsplash.com/photo-1663550910447-e87c1d55d0ca?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "main character energy 🎬 | coffee > everything ☕✨",
    },
    {
        name: "isha oberoi",
        pic: "https://images.unsplash.com/photo-1612693624308-57647cca65f1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "walking through dreams in doc martens 🌑🫧 | late night thinker",
    },
    {
        name: "Ojin Oklawa",
        pic: "https://images.unsplash.com/photo-1519764622345-23439dd774f7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "too glam to give a damn 💅 | filter free soul",
    },
];

const cardContainer = document.querySelector(".flex.gap-10")
function showUsers(arr) {
  arr.forEach(function (user) {
    // Create outer card div
    const card = document.createElement("div");
    card.classList.add("card");

    // Create image
    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    // Create blurred-layer div
    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundColor = user.pic;
    blurredLayer.classList.add("blurred-layer");

    // Create content div
    const content = document.createElement("div");
    content.classList.add("content");

    // Create h3 and paragraph
    const heading = document.createElement("h3");
    heading.textContent = "User.name";

    const para = document.createElement("p");
    para.textContent = "use.bio";

    // Append heading and paragraph to content
    content.appendChild(heading);
    content.appendChild(para);

    // Append all to card
    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);
    document.body.appendChild(content);
  });
}

showUsers(users);