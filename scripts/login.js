var log=document.getElementById('loginId');

log.addEventListener("click",checkfunc);

function checkfunc(){
     if (
        userInput.value.toLowerCase() == "admin@ojvar.dev" &&
        passInput.value == "@ojvar"
) {
    confirm("Welcome");
} else {
    alert("Invalid Email/password");
}

}


      var myTimer = setInterval(myFunction, 1000);

      function myFunction() {
        var d = new Date();
        document.getElementById("timeId").innerHTML = d.toLocaleTimeString();
      }