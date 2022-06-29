const form = document.querySelector(".form")
const email = document.querySelector("#email")
const warn = document.querySelector(".warn")
const warnMsg = document.querySelector("#label")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    validateForm()
})

function validateForm() {
    const value = email.value
    let rgx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
    const status = value.match(rgx)
    if(!status || value == ""){
        warn.classList.remove("hide")
        warnMsg.classList.remove("hide")
    } else{
        warnMsg.textContent = "You will receive our notifications in your email."
        warnMsg.classList.remove("hide")
        warnMsg.classList.add("show")
    }

    setTimeout(() => {
        warn.classList.add("hide")
        warnMsg.classList.add("hide")
    }, 2500)
}