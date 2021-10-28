const sidebarBtn = document.querySelector(".sidebar-toggle");
const crossBtn = document.querySelector(".crossBtn");
const toggleSidebar = document.querySelector(".sidebar");

sidebarBtn.addEventListener("click", () => {
  //   console.log(toggleSidebar.classList.contains("sidebar"));
  toggleSidebar.classList.remove("clickToggle");
});

crossBtn.addEventListener("click", () => {
  toggleSidebar.classList.add("clickToggle");
});
