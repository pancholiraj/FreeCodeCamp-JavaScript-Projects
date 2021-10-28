const images = [
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1140&q=80",
  "https://images.unsplash.com/photo-1587502537745-84b86da1204f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
];

const rightBtn = document.querySelector(".right");
const leftBtn = document.querySelector(".left");

document.slide.src = images[0];
let i = 0;
rightBtn.addEventListener("click", () => {
  if (i < images.length - 1) {
    i++;
    document.slide.src = images[i];
    console.log(i);
  } else {
    i = 0;
    document.slide.src = images[i];
  }
});
leftBtn.addEventListener("click", () => {
  if (i > 0) {
    i--;
    document.slide.src = images[i];
    console.log(i);
  } else {
    i = images.length;
    document.slide.src = images[2];
  }
});
