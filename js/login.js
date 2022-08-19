
function succesCase() {
    const email = document.getElementById("validationServer01");
    const pass = document.getElementById("validationServer02");
    const button = document.getElementById("reg");
   

        button.addEventListener("click", () => {
            if(email.value != "" && pass.value != "") {
               
                sessionStorage.setItem("currentloggedin", email.value);
            }
            else{
               
               
            }
       
            })
         
}

function redirecttoindex(){
    if (sessionStorage.getItem("currentloggedin") != null) {
    window.location = "index.html";
}
  }


  // funcion que agrega la validacion de los campos del formulario de registro
  (function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


  function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }











 succesCase();
 redirecttoindex();
 




 
