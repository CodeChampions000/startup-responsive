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
