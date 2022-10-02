document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

function redirecttologin(){ //funcion que redirecciona a la pagina de login
    if (localStorage.getItem("currentloggedin") == null) {
    window.location = "login.html";
}
    }

 // function usuario(){ //funcion que muestra el nombre del usuario logueado
  //     localStorage.getItem("currentloggedin")
   //    let  a = ""
   ////    a += `<a class="nav-link" href="perfil.html">${localStorage.getItem("currentloggedin")} </a> `
   //    document.getElementById("usuario1").innerHTML = a
    //     }
      //   usuario();
redirecttologin();