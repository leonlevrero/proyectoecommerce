 const productID = localStorage.getItem("productID");
const url = "https://japceibal.github.io/emercado-api/products/" + productID + ".json";
 const comentarios = "https://japceibal.github.io/emercado-api/products_comments/" + productID + ".json";


    function mostrarProducto() {
        let body = "";
            body += `<div onclick="setProductID(${arrayaux})" id="producto" class="list-group-item list-group-item-action cursor-active">
                <div class="row">

                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h1 class="page-header">Nombre ${arrayaux.name}  Precio ${arrayaux.currency} ${arrayaux.cost} </h1>
                         </div>
                         <div>
                            <h2 class="col-sm-3 col-md-3 form-control-label nopaddingtop" Precio ${arrayaux.currency} ${arrayaux.cost} </h2>
                            <small class="text-muted">${arrayaux.soldCount} vendidos</small>
                            </div>
                        </div>
                        <p class="mb-1"> Descripcion ${arrayaux.description}</p>
                    </div>
                </div>
            </div>
                    <div class="row">
                    <div class="col-md-4">
                      <div class="thumbnail">
                        <a href="img/prod${productID}_1.jpg" >
                          <img src="img/prod${productID}_1.jpg" alt="Lights" style="width:100%">
                        </a>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="thumbnail">
                        <a href="img/prod${productID}_2.jpg" 
                          <img src="img/prod${productID}_2.jpg" alt="Nature" style="width:100%">
                        </a>
                      </div>
                    </div>
                    <div class="col-md-4">
                    <div class="thumbnail">
                      <a href="img/prod${productID}_.jpg" 
                        <img src="img/prod${productID}_2.jpg" alt="Nature" style="width:100%">
                      </a>
                    </div>
                  </div>
                    <div class="col-md-4">
                      <div class="thumbnail">
                        <a href="img/prod${productID}_3.jpg" >
                          <img src="img/prod${productID}_3.jpg"  alt="Fjords" style="width:100%">
                        </a>
                      </div>
                    </div>
                  </div>
                  
                </div>
            
            </div> `
                
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



        function mostrarComentarios() {
             let cuerpo = "" 
                for (let i = 0; i < coments.length; i++) {
                    let nashe  = coments[i];
                    cuerpo += ` <div class="fondo_mensaje esquinas m-t-5" >
                    <div class="titular-comentario contenido-comentario esquinas">
                        <table cellpadding="1" cellspacing="2&quot;">
                            <tbody><tr>
                                <td> Nombre Usuario <b>${nashe.user}</b></td>
                                <td width="10px"></td>
                                <td> dice ${nashe.dateTime} :  </td>
                            </tr>
                        </tbody></table>
                    </div>
                    <div class="texto_mensaje">${nashe.description}</div>
                </div> 
         
                  
                 </div>
                 <br>`  
                 for (let x = 0; x < nashe.score; x++) {
                    cuerpo += `<span class="fa fa-star checked"></span>`

              }
              
            document.getElementById("comentarios").innerHTML = cuerpo
             
            }
             }
            const texto =  document.getElementById("valor");
            const estrellas =  document.getElementById("puntaje");
            const bcoment = document.getElementById("btnComentar");
            let agregar = "";
            bcoment.addEventListener("click", function(){
               agregar += texto.value
            //    agregar += estrellas.value
                document.getElementById("comentarios").appendChild(agregar)
               document.getElementById("comentarios").innerHTML = agregar
                
            }
            );