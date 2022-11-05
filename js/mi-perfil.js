 function redirect(){
    if (localStorage.getItem("currentloggedin")
    == null)
    {
    window.location = "login.html";
    }
     }


// funcion que muestra el nombre del usuario logueado

localStorage.getItem("currentloggedin")
 document.getElementById("email-perfil").value = localStorage.getItem("currentloggedin");

 // Guarda los valores en el local storage
    function save(){
        if (document.getElementById("1-nombre").value != "" && document.getElementById("1-apellido").value) {
            localStorage.setItem("1-nombre", document.getElementById("1-nombre").value);
        localStorage.setItem("2-nombre", document.getElementById("2-nombre").value);
        localStorage.setItem("1-apellido", document.getElementById("1-apellido").value);
        localStorage.setItem("2-apellido", document.getElementById("2-apellido").value);
        localStorage.setItem("contacto", document.getElementById("contacto").value);
        } else { 
            alert("Por favor complete los campos obligatorios");
        }

        
    }

// funcion que carga los valores del local storage
function cargar(){
    document.getElementById("1-nombre").value = localStorage.getItem("1-nombre");
    document.getElementById("2-nombre").value = localStorage.getItem("2-nombre");
    document.getElementById("1-apellido").value = localStorage.getItem("1-apellido");
    document.getElementById("2-apellido").value = localStorage.getItem("2-apellido");
    document.getElementById("contacto").value = localStorage.getItem("contacto");
}
 
document.getElementById("save").addEventListener("click", save);

document.addEventListener("DOMContentLoaded",cargar )
