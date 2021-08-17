const signInButton = document.getElementById("signInButton");

/**
 * SingIn function
 */
function signIn(event) {
    event.preventDefault();

    const emailInput = document.getElementById("emailInput");
    const passInput = document.getElementById("passInput");

    if (
        emailInput.value.toLowerCase() == "john@doe.com" &&
        passInput.value == "12345"
    ) {
        document.location.href = "/views/main.html";
    } else {
        alert("Invalid Email/password");
        emailInput.focus();
    }
}

signInButton.addEventListener("click", signIn);
