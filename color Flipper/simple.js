const color = [
  "green",
  "red",
  "blue",
  "black",
  "teal",
  "aqua",
  "white",
  "cornflowerblue",
];

const displayColor = document.querySelector(".color");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  console.log("clicked");
  const random = randomNumber();
  document.body.style.backgroundColor = color[random];
  displayColor.textContent = color[random];
});

function randomNumber() {
  return Math.floor(Math.random() * color.length);
}
