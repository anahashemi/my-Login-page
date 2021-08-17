const signInButton = document.getElementById("signInButton");

/**
 * SingIn function
 */
function signIn() {
    const emailInput = document.getElementById("emailInput");
    const passInput = document.getElementById("passInput");

    if (
        emailInput.value.toLowerCase() == "john@doe.com" &&
        passInput.value == "12345"
    ) {
        confirm("Welcome");
    } else {
        alert("Invalid Email/password");
    }
}

signInButton.addEventListener("click", signIn);
