let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const displayColor = document.querySelector(".color");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[randomNumber()];
  }
  document.body.style.backgroundColor = hexColor;
  displayColor.textContent = hexColor;
});

function randomNumber() {
  return Math.floor(Math.random() * hex.length);
}
