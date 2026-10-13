// Show welcome message
window.addEventListener("load", function () {
    console.log("Welcome to Rohit T Batakurki's Portfolio!");
});

// Highlight the current page in navigation
const currentPage = window.location.pathname
    .split("/")
    .pop() || "index.html";

document.querySelectorAll("nav a").forEach(function (link) {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.style.color = "#38bdf8";
        link.style.textDecoration = "underline";
    }
});

// Contact form validation
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (event) {
        const inputs = form.querySelectorAll(
            "input[required], textarea[required]"
        );

        for (const input of inputs) {
            if (!input.value.trim()) {
                event.preventDefault();
                alert("Please fill in all required fields.");
                input.focus();
                return;
            }
        }

        alert("Your form is ready to submit!");
    });
}

// Automatically update footer year
const footer = document.querySelector("footer p");

if (footer) {
    footer.textContent =
        "© " + new Date().getFullYear() +
        " Rohit T Batakurki | Portfolio";
}
