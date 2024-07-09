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

const hidePlaceholder = () => {
    document.getElementById("search-placeholder").classList.add("hidden");
};

const showPlaceholder = () => {
    const searchField = document.getElementById("search-field");
    if (searchField.value.trim() === "") {
        document.getElementById("search-placeholder").classList.remove("hidden");
    }
};

document.addEventListener("DOMContentLoaded", function () {
    fetch("/tableData.json")
        .then((response) => response.json())
        .then((data) => {
            const tableData = document.getElementById("tableData");
            let rows = "";

            data.forEach((item) => {
                rows += `
                    <tr>
                        <td>${item.Company}</td>
                        <td>${item.Ticker}</td>
                        <td>${item.Vertical}</td>
                        <td>${item.Price}</td>
                        <td>${item.MarketCap}</td>
                        <td>${item.RevenueGrowth}</td>
                        <td>${item.GrossMargin}</td>
                        <td>${item.EV}</td>
                        <td>${item.YTDPerformance}</td>
                    </tr>
                `;
            });

            tableData.innerHTML = rows;
        })
        .catch((error) => console.error("Error fetching table data:", error));
});
