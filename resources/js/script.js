// Header Transition Toggle for Mobile
const icon = document.querySelector("#icon");
const list = document.querySelector("#nav-list");

icon.addEventListener("click", () => {
    list.classList.toggle("show");
})

list.addEventListener("click", () => {
    list.classList.toggle("show");
})

