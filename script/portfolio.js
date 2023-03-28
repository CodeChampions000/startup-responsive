let projects = [
  {
    img: "./images/Portfolio/frame1.png",
  },
  {
    img: "./images/Portfolio/frame2.png",
  },
  {
    img: "./images/Portfolio/frame3.png",
  },
  {
    img: "./images/Portfolio/frame4.png",
  },
  {
    img: "./images/Portfolio/frame5.png",
  },
  {
    img: "./images/Portfolio/frame6.png",
  },
  {
    img: "./images/Portfolio/frame7.png",
  },
  {
    img: "./images/Portfolio/frame8.png",
  },
];

document.querySelector(".port-projects").innerHTML = projects
  .map(
    (frames) =>
      `
        <div class="projects">
        <img src="${frames.img}" alt="frame" />
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
