/**
 * SignIn function
 * @param {Event}} event
 */
function signIn(event) {
    event.preventDefault();

    const emailInput = document.getElementById("emailInput");
    const passInput = document.getElementById("passInput");

    if (
        emailInput.value.toLowerCase() == "john@doe.com" &&
        passInput.value == "12345"
    ) {
        redirectToUrl("/views/main.html");
    } else {
        alert("Invalid Email/password");
        emailInput.focus();
    }
}

const signInButton = document.getElementById("signInButton");
signInButton.addEventListener("click", signIn);
