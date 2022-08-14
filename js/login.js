

function succesCase() {
    const email = document.getElementById("floatingInput");
    const pass = document.getElementById("floatingPassword");
    const button = document.getElementById("reg");
    let i= 0;

        button.addEventListener("click", () => {
            if(email.value != "" && pass.value != "") {
                alert("Registro exitoso");
                sessionStorage.setItem("currentloggedin", email.value);
            }
            else{
                alert("Error al registrar");
                i = 0;
            }
       
            })
         
}

function redirecttoindex(){
    if (sessionStorage.getItem("currentloggedin") != null) {
    window.location = "index.html";
}
  }
 succesCase();
 redirecttoindex();
 




 
