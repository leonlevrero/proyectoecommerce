 const productID = localStorage.getItem("productID");
const url = "https://japceibal.github.io/emercado-api/products/" + productID + ".json";
 const comentarios = "https://japceibal.github.io/emercado-api/products_comments/" + productID + ".json";

 
 

 //  funcion que apreto el  producto relacionado y me redirige a su html
function setProductID(id) {
    localStorage.setItem("productID", id);
    window.location = "product-info.html"
}

 
    function mostrarProducto() {
        let body = "";
            body += `<div  onclick="setProductID(${arrayaux})" id="producto">
                <div class="row mt-5">
                <h1 >
               <span id="product-name"> Nombre: ${arrayaux.name} </span> <br>
                <small class="text-muted">Precio: ${arrayaux.currency} <span id="product-cost"> ${arrayaux.cost} </span> </small>
                </h1>
                        <p class="mb-3"> <strong> Descripcion: </strong> ${arrayaux.description}</p>
                  </div>
             
                <div class="row">
                <div class="col-lg-4 col-md-4 col-xs-4 thumb"> 
                <img src="img/prod${productID}_1.jpg"  class="img-thumbnail"  id="product-img">
                </div>
                <div class="col-lg-4 col-md-4 col-xs-4 thumb">

                <img src="img/prod${productID}_2.jpg"  class="img-thumbnail" >
                </div>
                <div class="col-lg-4 col-md-4 col-xs-4 thumb">

                <img src="img/prod${productID}_3.jpg"  class="img-thumbnail" >
                </div>
               
                </div>
                </div>
                <div class="btn-group mt-5">
                <button id="to-cart" type="button" class="btn btn-success">Añadir al Carrito</button>
                </div>
                </div>
                </div>
                  `
            
            let cuerpo = "";
            for (let i = 0; i < arrayaux.relatedProducts.length; i++) {
                let related = arrayaux.relatedProducts[i];
                cuerpo += `
                 <div  onclick="setProductID(${related.id})" id="producto"  class="container text-center cursor-active mt-3">
                <div class="row" >
                <div class="row">
                    <div class="col-3">
                      <p class="mb-1"> <strong> ${related.name} </strong>  </p>
                      </div>
                      </div>       
                </div>
                <div class="row">
                <div class="col-lg-4 col-md-4 col-xs-4 thumb"> 
                <img src="img/prod${related.id}_1.jpg"  class="img-thumbnail" >
                </div>
              </div> 
             </div>
             `  
          }
          document.getElementById("data").innerHTML = body
          document.getElementById("related").innerHTML = cuerpo
           localStorage.setItem("product-name", arrayaux.name);
              localStorage.setItem("product-cost", arrayaux.cost);
               localStorage.setItem("product-image",img/prod );
               localStorage.setItem("product-currency", arrayaux.currency);
          } 
          
     
          document.addEventListener("DOMContentLoaded", function(e){
            getJSONData(url).then(function(resultObj){
                if (resultObj.status === "ok"){
                    data = resultObj.data
                    arrayaux = data
                    mostrarProducto()
                   
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


                //Funcion para mostrar la puntuacion
               function mostrarPuntuacion(score) { 
                let estrellas = `<span class="fa fa-star checked"></span >` 
                let vacio = `<span class="fa fa-star"></span >`
                let cuerpo = estrellas.repeat(score) + vacio.repeat(5-score)	

                return cuerpo
                }

        //Funcion para mostrar los comentarios
        function mostrarComentarios() {
             let cuerpo = "" 
                for (let i = 0; i < coments.length; i++) {
                    let comentario = coments[i];
                    cuerpo += ` <div class="list-group-item mt-4">
                    <div class="row">
                        <div class="col-3">
                          <div class="d-flex w-100 justify-content-between">
                          <p class="mb-1"> <strong> ${comentario.user} </strong> - ${mostrarPuntuacion(comentario.score)} </p>
                            </div>     
                      
                    </div>
                    <div class="mb-1">${comentario.description}</div>
                    <div> <p> ${comentario.dateTime} </p> </div>  

                     </div> 
                  </div> 
                 </div>
                
                 `  
              }
              
            document.getElementById("comentarios").innerHTML = cuerpo
             
            }
             
           
              
          



          

       /*   document.getElementById("btnComentar").addEventListener("click", () => { 
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

             
  
          
               
               
            } ); */
         