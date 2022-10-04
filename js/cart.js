let  url = "https://japceibal.github.io/emercado-api/user_cart/25801.json";

document.addEventListener("DOMContentLoaded", function(e){
   fetch(url)
    .then(response => response.json())
    .then(data => showCartList(data))
    .catch(error => console.log(error))
    
});
    
    
  
   
    

     // Show array
        function showCartList(array){
            let htmlContentToAppend = "";
            for(let i = 0; i < array.articles.length; i++){
                let cart = array.articles[i];
                htmlContentToAppend += `
                <div id="producto" class="list-group-item list-group-item-action cursor-active">
            <div class="row">
                <div class="col-3">
                    <img src= ${cart.image} height="200" width="200" alt="product image" class="img-thumbnail" >
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <p class="mb-1">${cart.name}  </p>
                        <p class="mb-1">${cart.currency} ${cart.unitCost} </p>.
                        <p class="mb-1">Cantidad: <input type="number" id="cantidad" name="cantidad" min="1" max="100" value="${cart.count}"> </p>
                        <p class="mb-1" id="subtotal">Subtotal: ${cart.unitCost * cart.count}</p>
                    </div> 
                </div>
            </div>  
        </div>
            
                `
                
                
            }
            
            document.getElementById("cart-list-container").innerHTML += htmlContentToAppend;
            calcularSubtotal();
        }
        
        
        function calcularSubtotal(){
            const nCantidad = document.getElementById("cantidad");
        const nPrecio = array.articles.unitCost;
            let subtotal = nCantidad * nPrecio;
            document.getElementById("subtotal").innerHTML += subtotal;
        }
       
    
