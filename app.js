const dropdownOpenBtn = document.getElementById("dropdown-open");
const dropdownCloseBtn = document.getElementById("dropdown-close");
const navDropdown = document.getElementById("nav-dropdown");

dropdownOpenBtn.addEventListener("click", () => {
    navDropdown.classList.add("show");
});

dropdownCloseBtn.addEventListener("click", () => {
    navDropdown.classList.remove("show");
});
