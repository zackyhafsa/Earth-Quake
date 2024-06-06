const menuButton = document.getElementById("menuButton");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");

// Toggle sidebar
menuButton.addEventListener("click", function () {
  sidebar.classList.toggle("-translate-x-full");
  sidebarOverlay.classList.toggle("hidden");
});

// Close sidebar when overlay is clicked
sidebarOverlay.addEventListener("click", function () {
  sidebar.classList.add("-translate-x-full");
  sidebarOverlay.classList.add("hidden");
});
