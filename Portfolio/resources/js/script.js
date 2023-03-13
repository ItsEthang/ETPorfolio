// Header Transition Toggle for Mobile
const icon = document.querySelector("#icon")
const list = document.querySelector("#nav-list")

icon.addEventListener("click", () => {
    list.classList.toggle("show")
})

list.addEventListener("click", () => {
    list.classList.toggle("show")
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))

