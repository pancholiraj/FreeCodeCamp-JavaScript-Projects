const toggleBtn = document.querySelector(".menu-btn");
const links = document.querySelector(".links");

toggleBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
  console.log(links.classList.contains("show-link"));
});
