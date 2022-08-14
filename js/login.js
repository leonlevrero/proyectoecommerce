

function succesCase() {
    const email = document.getElementById("floatingInput");
    const pass = document.getElementById("floatingPassword");
    const button = document.getElementById("reg");
    let i= 0;

        button.addEventListener("click", () => {
            if(email.value != "" && pass.value != "") {
                alert("Registro exitoso");
                i = 1;
            }
            else{
                alert("Error al registrar");
                i = 0;
            }
       
            })
          
}
 succesCase();
 

function redirect(){
    const boton = document.getElementById("redirect");
    boton.addEventListener("click", () => {
        location.href = "google.com";
    } )
}

 
