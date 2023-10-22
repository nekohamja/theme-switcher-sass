const themeToggle = document.getElementById("theme-toggle");
const main = document.getElementById("main");
themeToggle.addEventListener("click", () => {
  if (main.classList.contains("light-mode")) {
    main.classList.remove("light-mode");
    main.classList.add("dark-mode");
  } else {
    main.classList.add("light-mode");
    main.classList.remove("dark-mode");
  }
});
