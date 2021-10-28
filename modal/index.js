const clickBtn = document.querySelector(".btn");
const crossBtn = document.querySelector(".btn-toggle");
const container = document.querySelector(".container-toggle");

clickBtn.addEventListener("click", () => {
  console.log(container.classList.contains("container-visible"));
  container.classList.toggle("container-visible");
});

crossBtn.addEventListener("click", () => {
  console.log("click");
  container.classList.add("container-visible");
});
