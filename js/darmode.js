let darkButton = document.querySelector(".darkmode")

darkButton.addEventListener("click", () => {
    let body = document.querySelector("body")
    if(body.classList.contains("dark")) {
        body.classList.remove("dark")
        darkButton.innerHTML = "DarkMode"
    } else {
        body.classList.add("dark")
        darkButton.innerHTML = "LightMode"
    }
})

darkButton.innerHTML = "DarkMode"