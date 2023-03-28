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
