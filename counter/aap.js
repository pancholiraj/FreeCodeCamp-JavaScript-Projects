const decrease = document.querySelector("#decrease");
const reset = document.querySelector("#reset");
const increase = document.querySelector("#increase");
const score = document.querySelector(".score");

let total = 0;

increase.addEventListener("click", () => {
  total++;
  score.textContent = total;
  if (total.textContent == 0) {
    score.style.color = "black";
  } else if (total > 0) {
    score.style.color = "green";
  }
});
decrease.addEventListener("click", () => {
  total--;
  score.textContent = total;

  if (total < 0) {
    score.style.color = "red";
  } else if (total === 0) {
    score.style.color = "black";
  }
});
reset.addEventListener("click", () => {
  total = 0;
  score.style.color = "black";
  score.textContent = total;
});
