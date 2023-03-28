let categories = [
  {
    img: "./images/human1.png",
    name: "Peg Legge",
    title: "CEO",
  },

  {
    img: "./images/human2.png",
    name: "Richard Guerra",
    title: "CTO",
  },

  {
    img: "./images/human3.png",
    name: "Alexandra Stolz",
    title: "DESIGNER",
  },

  {
    img: "./images/human4.png",
    name: "Janet Bray",
    title: "DEVELOPER",
  },
];

document.querySelector(".team-cards").innerHTML = categories
  .map(
    (cards) =>
      `
    <div class="card">
    <img src="${cards.img}" alt="humanpic" />
    <h2>${cards.name}</h2>
    <p>${cards.title}</p>
    </div>
    `
  )
  .join(" ");

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", function () {
  if (menu.style.display === "none") {
    menu.style.display = "flex";
    menu.style.transform = "translateY(0)";
    menu.style.opacity = 0;
    menu.style.transition = "all 0.5s ease-in-out";
    setTimeout(function () {
      menu.style.opacity = 1;
    }, 50);
  } else if ((menu.style.display = "flex")) {
    menu.style.display = "none";
  }
});
