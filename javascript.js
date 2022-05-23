const myform = document.getElementById('sign-up');
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirm-password")
const passwordParagraph = document.querySelector(".password-paragraph")
myform.noValidate = true;

myform.addEventListener('submit', validateForm);

function validateForm(e) {
    const form = e.target;
    console.log(form)

    if (form.checkValidity()) {
        if (password.value == confirmPassword.value) {
            passwordParagraph.hidden = true;
        } else {
            e.preventDefault();
            passwordParagraph.hidden = false;
            password.classList.add("invalid")
            confirmPassword.classList.add("invalid")
            password.classList.remove("valid")
            confirmPassword.classList.remove("valid")
        }
    }
    else {
        e.preventDefault();
        Array.from(form.elements).forEach(i => {
            if (i.checkValidity()) {
                i.classList.remove('invalid');
                i.classList.add("valid")
            }
            else {
                i.classList.add('invalid');
                i.classList.remove("valid")
            }
        });
    }
};

function validaKeyDown(e) {
    const form = e.target;
    console.log(e.target)
    if (form.checkValidity()) {
        form.classList.remove('invalid');
        form.classList.add("valid")

    }
    else {
        form.classList.add('invalid');
        form.classList.remove("valid")
    }
}

myform.addEventListener('keydown', validaKeyDown)
myform.addEventListener('keyup', validaKeyDown)