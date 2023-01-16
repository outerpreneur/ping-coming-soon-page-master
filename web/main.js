const form = document.querySelector("form")
const button = form.querySelector('[type="submit"]')

const msg = "Please provide a valid email address"
const error = document.createElement('p')
error.classList.add('error_text')
error.textContent = msg

function checkEmail(event) {
    event.preventDefault()
    const email= event.target.querySelector('[type="email"]').value
    console.log(email)
    if (!validateEmail(email)) {
        form.classList.add('error')
        form.insertBefore(error, button)
    } else {
        form.removeChild('error')
        form.classList.remove('error')
    }
}

function validateEmail (email) {
    const regexKey = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexKey.test(String(email).toLowerCase())
}

form.addEventListener('submit', checkEmail)