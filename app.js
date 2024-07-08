document.addEventListener("DOMContentLoaded", function () {
    const dropdownOpenBtn = document.getElementById("dropdown-open");
    const dropdownCloseBtn = document.getElementById("dropdown-close");
    const navDropdown = document.getElementById("nav-dropdown");

    dropdownOpenBtn.addEventListener("click", function () {
        navDropdown.classList.add("show");
    });

    dropdownCloseBtn.addEventListener("click", function () {
        navDropdown.classList.remove("show");
    });
});
