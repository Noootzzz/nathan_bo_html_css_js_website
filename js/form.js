// FORMULAIRE
let form = document.querySelector("form")


form.addEventListener("submit", (event) => {
    event.preventDefault()
    // console.log("Envoie du formulaire détecté")


    let errorContainer = document.querySelector(".message-error")
    let errorList = document.querySelector(".message-error ul")

    errorList.innerHTML = ""
    errorContainer.classList.remove("visible")


    // VERIF PSEUDO
    let pseudo = document.querySelector("#pseudo")
    if(pseudo.value.length < 6 ) {
        // console.log("invalide")
        errorContainer.classList.add("visible")
        pseudo.classList.remove("success")
        pseudo.classList.add("error")
        let err = document.createElement("li")
        err.innerHTML = "Le pseudo dooit faire au moins 6 caractères"
        errorList.appendChild(err)
        
    } else {
        // console.log("valide")
        pseudo.classList.add("success")
        pseudo.classList.remove("error")
        
    }


    // VERIF EMAIL
    let email = document.querySelector("#email")
    if(email.value == "") {
        // console.log("invalide")
        errorContainer.classList.add("visible")
        email.classList.remove("success")
        email.classList.add("error")
        let err = document.createElement("li")
        err.innerHTML = "Le champ email ne peut pas être vide"
        errorList.appendChild(err)
        
    } else {
        // console.log("valide")
        email.classList.add("success")
        email.classList.remove("error")
        
    }
    
    
    // VERIF MDP
    let password = document.querySelector("#password")

    let passCheck = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$")

    if(password.value.length < 10 || passCheck.test(password.value) == false) {
        // console.log("invalide")
        // console.log(password.value)
        errorContainer.classList.add("visible")
        password.classList.remove("success")
        password.classList.add("error")
        let err = document.createElement("li")
        err.innerHTML = "Le mot de passe doit faire 10 caractères minimum, contenir, minuscule, majuscule, chiffre, caractère spécial"
        errorList.appendChild(err)
        
    } else {
        // console.log("valide")
        password.classList.add("success")
        password.classList.remove("error")
        
    }


    // VERIF MDP 2
    let passwordRepeat = document.querySelector("#password2")
    if(password.value != passwordRepeat.value) {
        // console.log("invalide")
        errorContainer.classList.add("visible")
        passwordRepeat.classList.remove("success")
        passwordRepeat.classList.add("error")
        let err = document.createElement("li")
        err.innerHTML = "Les mots de passes sont différents"
        errorList.appendChild(err)
        
    } else {
        // console.log("valide")
        passwordRepeat.classList.add("success")
        passwordRepeat.classList.remove("error")
        
    }

    let successContainer = document.querySelector(".message-success")
    successContainer.classList.remove("visible")

    if(
        pseudo.classList.contains("success") &&
        email.classList.contains("success") &&
        password.classList.contains("success") &&
        passwordRepeat.classList.contains("success") 
    ) {
        successContainer.classList.add("visible")
    }

})