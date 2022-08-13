
function succesCase() {
    const email = document.getElementById("floatingInput");
    const pass = document.getElementById("floatingPassword");
    const button = document.getElementById("reg");

        button.addEventListener("click", () => {
            if(email.value != "" && pass.value != "") {
                alert("Registro exitoso");
            }
            else{
                alert("Error al registrar");
            }
            })
 }  
 succesCase();