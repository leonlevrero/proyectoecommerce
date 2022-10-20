let  url = "https://japceibal.github.io/emercado-api/user_cart/25801.json";

document.addEventListener("DOMContentLoaded", function(e){
   fetch(url)
    .then(response => response.json())
    .then(data => showCartList(data))
    .catch(error => console.log(error))
    
});
    
    
  
   
    

     // FUNCION  QUE MUESTRA EL CARRITO DE COMPRAS
        function showCartList(array){
            let htmlContentToAppend = "";
            for(let i = 0; i < array.articles.length; i++){
                let cart = array.articles[i];
                htmlContentToAppend += `
               

        <tr>
        <th scope="col"><img src= ${cart.image} height="200" width="200" alt="product image" class="img-thumbnail" ></th>
        <th scope="col" id="asa" >${cart.name} </th>
        <th scope="col" id ="asa2" >${cart.currency} <span id="precio" > ${cart.unitCost} </span></th>
        <th scope="col" id="cantidad" >Cantidad: <input type="number" id="cantidad" name="cantidad" min="1" max="100" value="${cart.count}"></th>
        <th scope="col" id="subtotal">${cart.unitCost}  </th>
      </tr>
                `
                
                
            }
            
            document.getElementById("cart-list-container2").innerHTML += htmlContentToAppend;
            const input = document.querySelector('#cantidad');
            const precio = document.getElementById("precio");
            const subtotal = document.getElementById("subtotal");
           
            
            input.addEventListener('input', updateValue);
    
            function updateValue(e) {
                subtotal.textContent =  " " +  e.target.value * precio.textContent ;
                }
            } 
            // LINEAS QUE HACEN QUE SI SE CAMBIA EL CHECKBOX CAMBIE EL SUBTOTAL Y EL TOTAL Y EL ENVIO
             const checkPremium = document.getElementById('Premium');
             const checkExpress = document.getElementById('Express');
             const checkStandard = document.getElementById('Standard')
             checkPremium.addEventListener('change', (event) => {
                document.getElementById("sub-envio").innerHTML = subtotal.textContent;

                document.getElementById("usd-total").innerHTML = "USD"
                document.getElementById("usd-sub").innerHTML = "USD"
                document.getElementById("usd-envio").innerHTML = "USD"

                document.getElementById("costo-envio").innerHTML = (subtotal.textContent * 1.5);
                document.getElementById("costo-total").innerHTML = parseInt(subtotal.textContent)  + parseInt(document.getElementById("costo-envio").textContent);
             }) 

             checkExpress.addEventListener('change', (event) => {
                document.getElementById("sub-envio").innerHTML = subtotal.textContent;

                document.getElementById("usd-total").innerHTML = "USD"
                document.getElementById("usd-sub").innerHTML = "USD"
                document.getElementById("usd-envio").innerHTML = "USD"


                document.getElementById("costo-envio").innerHTML = (subtotal.textContent * 0.7);
                document.getElementById("costo-total").innerHTML = parseInt(subtotal.textContent)  + parseInt(document.getElementById("costo-envio").textContent);
             }) 

             checkStandard.addEventListener('change', (event) => {
                document.getElementById("sub-envio").innerHTML = subtotal.textContent;

                document.getElementById("usd-total").innerHTML = "USD"
                document.getElementById("usd-sub").innerHTML = "USD"
                document.getElementById("usd-envio").innerHTML = "USD"

                document.getElementById("costo-envio").innerHTML = (subtotal.textContent * 0.5);
                document.getElementById("costo-total").innerHTML =    parseInt(subtotal.textContent)  + parseInt(document.getElementById("costo-envio").textContent);

             }) 
        document.getElementById("nashe").addEventListener("click",chequear)
        function chequear(){
            if ((checkExpress.checked || checkPremium.checked || checkStandard.checked) && document.getElementById("esquina").value != "" && 
            document.getElementById("numero").value != "" && document.getElementById("calle").value != "") {
                alert("Puto");
                
            } else {
                alert("nao nao");
            }
             }
        

      
         
   /*      document.addEventListener("DOMContentLoaded", function(){
            
          document.getElementById("cart-list-container2").innerHTML += `<div id="producto" class="list-group-item list-group-item-action cursor-active">
          <div class="row">
              <div class="col-3">
                  <img src="${localStorage.getItem("product-image")} + ${localStorage.getItem("productID")} + _1.jpg  " height="200" width="200" alt="product image" class="img-thumbnail" >
              </div>
              <div class="col">
                  <div  id="cart-style" class="d-flex w-100 justify-content-between">
                      <p class="mb-1" id="asa"> ${localStorage.getItem("product-name")}  </p>
                      <p class="mb-1" id ="asa2"> <span id="precio" >  ${localStorage.getItem("product-currency")} ${localStorage.getItem("product-cost")} </span> </p>
                      <p class="mb-1" id="cantidad">Cantidad: <input type="number" id="cantidad" name="cantidad" min="1" max="100" value=""> </p>
                      <p class="mb-1" id="subtotal"> $  </p>
                  </div> 
              </div>
          </div>  
      </div>   `
      const input = document.querySelector('#cantidad');
            const precio = document.getElementById("precio");
            const subtotal = document.getElementById("subtotal");
            input.addEventListener('input', updateValue);
    
            function updateValue(e) {
                subtotal.textContent =  " " + e.target.value * precio.textContent;
                }
          } );*/

      
        
        
  


   



   
   

       
       
    
