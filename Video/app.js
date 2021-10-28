const btn = document.querySelector(".switch");
const video = document.querySelector(".video-container");
const loader = document.querySelector(".preloader");
btn.addEventListener("click", () => {
  console.log(!btn.classList.contains("slide"));
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

window.addEventListener("onload", () => {
  loader.classList.add("preloader");
});
