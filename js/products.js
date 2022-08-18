const url = "https://japceibal.github.io/emercado-api/cats_products/101.json"
fetch(url)
 .then(response => response.json())
 .then(data => mostrarData(data))
 .catch(error => console.log(error))

 const mostrarData = (data) => {
    console.log(data.products[1].id)
    let body = '' 
    for (var i = 0; i<=data.products.length; i++){
        body += `<div onclick="setCatID(${data.products[i]})" class="list-group-item list-group-item-action cursor-active">
            <div class="row">
                <div class="col-3">
                    <img src="${data.products[i].image}" alt="$category.description}" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${data.products[i].name} ${data.products[i].currency} ${data.products[i].cost} </h4>
                        <small class="text-muted">${data.products[i].soldCount} artículos</small>
                    </div>
                    <p class="mb-1">${data.products[i].description}</p>
                </div>
            </div>
            <div class="btn-group">
         <button type="button" class="btn btn-xl btn-outline-secondary">Agregar al carrito</button>
         </div>
        </div> `
       
        document.getElementById("data").innerHTML = body
       /* body += `<div>${data.products[i].currency}
        ${data.products[i].cost}
        ${data.products[i].name}
        ${data.products[i].description}
        ${data.products[i].soldCount}
        ${data.products[i].image}</div>`
        document.getElementById("data").innerHTML = body */
    }
   
 }