/**
 * SignIn function
 * @param {Event}} event
 */
 function login(event) {

    
        redirectToUrl("/views/login.html");
    
}

/* Prepare sign-in button */
const login1 = document.getElementById("loginLink");
login1.addEventListener("click", login);