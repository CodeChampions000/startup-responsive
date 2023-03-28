let plans = [
  {
    name: "Basic",
    price: "$100",
  },
  {
    name: "Plus",
    price: "$250",
  },
  {
    name: "Pro",
    price: "$400",
  },
];

document.querySelector(".plan-cards").innerHTML = plans
  .map(
    (plan) =>
      `
      <div class="plans">
      <h3>${plan.name}</h3>
      <div class="month">
        <h2>${plan.price}</h2>
        <h4>/month</h4>
      </div>
      <p>
        Lorem ipsum, dolor sit amet <br />
        consectetur adipisicing elit. Suscipit <br />
        nemo hic quos, ab, dolor aperiam
      </p>
      <div class="checkmarks-text">
        <img src="./images/Services/check.png" alt="checkmark" />
        <span>Lorem ipsum, dolor sit</span>
      </div>
      <div class="checkmarks-text">
        <img src="./images/Services/check.png" alt="checkmark" />
        <span>Lorem ipsum, dolor sit</span>
      </div>
      <div class="checkmarks-text">
        <img src="./images/Services/check.png" alt="checkmark" />
        <span>Lorem ipsum, dolor sit</span>
      </div>
      <div class="checkmarks-text">
        <img src="./images/Services/check.png" alt="checkmark" />
        <span>Lorem ipsum, dolor sit</span>
      </div>
      <div class="checkmarks-text">
        <img src="./images/Services/check.png" alt="checkmark" />
        <span>Lorem ipsum, dolor sit</span>
      </div>
      <button class="btn">Learn more</button>
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
