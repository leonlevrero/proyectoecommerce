 const productID = localStorage.getItem("productID");
const url = "https://japceibal.github.io/emercado-api/products/" + productID + ".json";
 const comentarios = "https://japceibal.github.io/emercado-api/products_comments/" + productID + ".json";


    function mostrarProducto() {
        let body = "";
            body += `<div  onclick="setProductID(${arrayaux})" id="producto">
                <div class="row">
                <h1  >
                Nombre: ${arrayaux.name}
                <small class="text-muted">Precio ${arrayaux.currency}${arrayaux.cost} </small>
                </h1>
                        <p class="mb-1"> <strong> Descripcion: </strong> ${arrayaux.description}</p>
                  </div>
             
                <div class="row">
                <div class="col-lg-4 col-md-4 col-xs-4 thumb"> 
                <img src="img/prod${productID}_1.jpg"  class="img-thumbnail" >
                </div>
                <div class="col-lg-4 col-md-4 col-xs-4 thumb">

                <img src="img/prod${productID}_2.jpg"  class="img-thumbnail" >
                </div>
                <div class="col-lg-4 col-md-4 col-xs-4 thumb">

                <img src="img/prod${productID}_3.jpg"  class="img-thumbnail" >
                </div>
               
                </div>
                </div>
                  `
            document.getElementById("data").innerHTML = body
        
          } 
          
     
          document.addEventListener("DOMContentLoaded", function(e){
            getJSONData(url).then(function(resultObj){
                if (resultObj.status === "ok"){
                    data = resultObj.data
                    arrayaux = data
                    mostrarProducto()
                    //sortAndShowCategories(ORDER_ASC_BY_NAME, resultObj.data);
                }
            }); });
        

            document.addEventListener("DOMContentLoaded", function(e){
                getJSONData(comentarios).then(function(resultObj){
                    if (resultObj.status === "ok"){
                        data = resultObj.data
                        coments = data
                        mostrarComentarios()
                        //sortAndShowCategories(ORDER_ASC_BY_NAME, resultObj.data);
                    }
                }); });

               function mostrarPuntuacion(score) { 
                let estrellas = `<span class="fa fa-star checked"></span >` 
                let vacio = `<span class="fa fa-star"></span >`
                let cuerpo = estrellas.repeat(score) + vacio.repeat(5-score)	

                return cuerpo
                }


        function mostrarComentarios() {
             let cuerpo = "" 
                for (let i = 0; i < coments.length; i++) {
                    let nashe  = coments[i];
                    cuerpo += ` <div class="list-group-item" >
                    <div class="row">
                        <div class="col-3">
                          <div class="d-flex w-100 justify-content-between">
                          <p class="mb-1"> <strong> ${nashe.user} </strong> - ${mostrarPuntuacion(nashe.score)} </p>
                            </div>     
                      
                    </div>
                    <div class="mb-1">${nashe.description}</div>
                    <div> <p> ${nashe.dateTime} </p> </div>  

                     </div> 
                  </div> 
                 </div>
                 `  
              }
              
            document.getElementById("comentarios").innerHTML = cuerpo
             
            }
             
           
              



          

          document.getElementById("btnComentar").addEventListener("click", () => { 
            let fecha = new Date();
            let agregar = [];
            let comentado = {
                "user": sessionStorage.getItem("currentloggedin"),
                "product": productID,
                "description": document.getElementById("valor").value,
                "score": document.getElementById("puntaje").value,
                "dateTime": (fecha.getDate() + " " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds())
                 }
                
                 if (comentado.description != ""){
                    if(localStorage.getItem("comentado")) { 
                   agregar = JSON.parse(localStorage.getItem("comentado"));
                    agregar.push(comentado);

                 }else { 
                      agregar.push(comentado);
                 }
             };
               localStorage.getItem("comentado",JSON.stringify(agregar));
                          
               document.getElementById("comentarios").innerHTML += agregar;

               document.getElementById("valor").value = "";
                document.getElementById("puntaje").value = "";
                location.reload

             
  
          
               
               
            } );
         