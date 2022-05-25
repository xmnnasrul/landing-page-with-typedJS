// toggle
const styleswitchToggle = document.querySelector(".style-switcher-toggler");
styleswitchToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

const home = document.getElementById("homee");
const about = document.getElementById("aboutt");
const services = document.getElementById("servicess");
const portfolio = document.getElementById("portfolioo");
const contact = document.getElementById("contactt");

home.addEventListener("click", () => {
    document.getElementById("homee").classList.add("active");
    // remove
    document.getElementById("portfolioo").classList.remove("active");
    document.getElementById("aboutt").classList.remove("active");
    document.getElementById("servicess").classList.remove("active");
    document.getElementById("contactt").classList.remove("active");
});
about.addEventListener("click", () => {
    document.getElementById("aboutt").classList.add("active");
    // remove
    document.getElementById("portfolioo").classList.remove("active");
    document.getElementById("homee").classList.remove("active");
    document.getElementById("servicess").classList.remove("active");
    document.getElementById("contactt").classList.remove("active");
});
services.addEventListener("click", () => {
    document.getElementById("servicess").classList.add("active");
    // remove
    document.getElementById("aboutt").classList.remove("active");
    document.getElementById("portfolioo").classList.remove("active");
    document.getElementById("contactt").classList.remove("active");
    document.getElementById("homee").classList.remove("active");
});
portfolio.addEventListener("click", () => {
    document.getElementById("portfolioo").classList.add("active");
    // remove
    document.getElementById("aboutt").classList.remove("active");
    document.getElementById("contactt").classList.remove("active");
    document.getElementById("homee").classList.remove("active");
    document.getElementById("servicess").classList.remove("active");
});

contact.addEventListener("click", () => {
    document.getElementById("contactt").classList.add("active");
    // remove
    document.getElementById("aboutt").classList.remove("active");
    document.getElementById("portfolioo").classList.remove("active");
    document.getElementById("homee").classList.remove("active");
    document.getElementById("servicess").classList.remove("active");
});

// theme
const alternative = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternative.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

// dark and light mode
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});