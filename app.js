// navbar menu section
const dropdownOpenBtn = document.getElementById("dropdown-open");
const dropdownCloseBtn = document.getElementById("dropdown-close");
const navDropdown = document.getElementById("nav-dropdown");

dropdownOpenBtn.addEventListener("click", () => {
    navDropdown.classList.add("show");
});

dropdownCloseBtn.addEventListener("click", () => {
    navDropdown.classList.remove("show");
});
//end of navbar menu section

// sticky navbar
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 100) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});

//end of sticky navbar
