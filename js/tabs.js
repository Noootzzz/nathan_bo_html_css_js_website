document.addEventListener("DOMContentLoaded", () => {
    
    let tabs = document.querySelectorAll(".tab")
    tabs.forEach( (tab) => {
        tab.addEventListener("click", () => {
            tabs.forEach( (tab) => {
                tab.classList.remove("tab-active")
            })

            let tabContents = document.querySelectorAll(".tab-content");
            tabContents.forEach( (content) => {
                content.classList.remove("active")
            })

            tab.classList.add("tab-active")

            //verifier la classe du li clique et ajouter la classe active à la bonne div
            if (tab.classList.contains("first-tab")) {
                document.querySelector(".tab-content.first-tab").classList.add("active")
            } else if (tab.classList.contains("second-tab")) {
                document.querySelector(".tab-content.second-tab").classList.add("active")
            } else if (tab.classList.contains("third-tab")) {
                document.querySelector(".tab-content.third-tab").classList.add("active")
            }
        })
    })
})