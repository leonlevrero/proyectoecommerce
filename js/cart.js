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
                    <div  id="cart-style" class="d-flex w-100 justify-content-between">
                        <p class="mb-1" id="asa">${cart.name}  </p>
                        <p class="mb-1" id ="asa2">USD <span id="precio" > ${cart.unitCost} </span> </p>
                        <p class="mb-1" id="cantidad">Cantidad: <input type="number" id="cantidad" name="cantidad" min="1" max="100" value="${cart.count}"> </p>
                        <p class="mb-1" id="subtotal"> USD ${cart.unitCost} </p>
                    </div> 
                </div>
            </div>  
        </div>
            
                `
                
                
            }
            
            document.getElementById("cart-list-container").innerHTML += htmlContentToAppend;
            const input = document.querySelector('#cantidad');
            const precio = document.getElementById("precio");
            const subtotal = document.getElementById("subtotal");
            input.addEventListener('input', updateValue);
    
            function updateValue(e) {
                subtotal.textContent =  "USD" + " " + e.target.value * precio.textContent;
                }
        }
        
       




       
       
    
