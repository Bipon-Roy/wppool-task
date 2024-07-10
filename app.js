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

    if (window.scrollY > 50) {
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
                        <td >${item.Price}</td>
                        <td class="text-center">${item.MarketCap}</td>
                        <td class="text-center">${item.RevenueGrowth}</td>
                        <td class="text-center">${item.GrossMargin}</td>
                        <td class="text-center">${item.EV}</td>
                        <td class="text-center">${item.YTDPerformance}</td>
                    </tr>
                `;
            });

            tableData.innerHTML = rows;
        })
        .catch((error) => console.error("Error fetching table data:", error));
});

// slider script
const slider = document.getElementById("slider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
let currentIndex = 0;
const slidesToShow = 2;

nextBtn.addEventListener("click", () => {
    if (currentIndex < slider.children.length - slidesToShow) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slider.children.length - slidesToShow;
    }
    updateSlider();
});

function updateSlider() {
    slider.style.transform = `translateX(-${(currentIndex * 100) / slidesToShow}%)`;
}
// end of slider script

const ctx = document.getElementById("myChart").getContext("2d");
const labels = ["Feb", "", "Mar", "", "Apr", "", "May", "", "Jun", ""];
const data = {
    labels: labels,
    datasets: [
        {
            label: "WPPOOL",
            data: [0, 35, 30, 60, 25, 50, 42, 40, 80, 60],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
        },
        {
            label: "Google",
            data: [15, 45, 20, 65, 20, 55, 42, 30, 70, 60],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 2,
        },
        {
            label: "Microsoft",
            data: [5, 55, 25, 70, 15, 60, 42, 35, 75, 60],
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 2,
        },
        {
            label: "Twitter",
            data: [10, 40, 35, 55, 9, 45, 42, 25, 85, 60],
            backgroundColor: "rgba(255, 206, 86, 0.2)",
            borderColor: "rgba(255, 206, 86, 1)",
            borderWidth: 2,
        },
    ],
};

const config = {
    type: "line",
    data: data,
    options: {
        scales: {
            y: {
                min: -10,
                max: 100,
                ticks: {
                    stepSize: 10,
                    callback: function (value) {
                        return value + "%";
                    },
                },
            },
        },
    },
};

new Chart(ctx, config);
