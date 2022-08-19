

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

 succesCase();
 redirecttoindex();
 




 
