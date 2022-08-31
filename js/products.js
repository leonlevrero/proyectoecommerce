

const  preciobajo = "01";
const preciomayor = "10";
const cantidad = "Cant.";
let currentCategoriesArray = [];
let currentSortCriteria = undefined;
let minimo = undefined;
let maximo = undefined;

 function mostrarData(data) {
    let body = "";
    for (var i = 0; i <= data.products.length; i++) {
      let currentCategoriesArray = data.products[i];

      if (((minimo == undefined) || (minimo != undefined && (currentCategoriesArray.cost)>= minimo)) &&
           ((maximo == undefined) || (maximo != undefined &&(currentCategoriesArray.cost)<= maximo))){

        body += `<div onclick="setCatID(${currentCategoriesArray})" class="list-group-item list-group-item-action cursor-active">
            <div class="row">
                <div class="col-3">
                    <img src= ${currentCategoriesArray.image} alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${currentCategoriesArray.name} ${currentCategoriesArray.currency} ${currentCategoriesArray.cost} </h4>
                        <small class="text-muted">${currentCategoriesArray.soldCount} artículos</small>
                    </div>
                    <p class="mb-1">${currentCategoriesArray.description}</p>
                </div>
            </div>
            <div class="btn-group">
         <button type="button" class="btn btn-xl btn-outline-secondary">Agregar al carrito</button>
         </div>
        </div> `

        document.getElementById("data").innerHTML = body
      } 
    }
 }




function sortCategories(criteria, currentCategoriesArray){
    let result = [];
    if (criteria === preciobajo)
    {
        result = currentCategoriesArray.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === preciomayor){
        result = currentCategoriesArray.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === cantidad){
        result = currentCategoriesArray.sort(function(a, b) {
          

            if ( a.soldCount > b.soldCount ){ return -1; }
            if ( a.soldCount < b.soldCount ){ return 1; }
            return 0;
        });
    }

    return result;
}




function sortAndShowCategories(sortCriteria, categoriesArray){
    currentSortCriteria = sortCriteria;

    if(categoriesArray != undefined){
        data = categoriesArray;
    }

   data.products = sortCategories(currentSortCriteria, data.products);

    //Muestro las categorías ordenadas
    mostrarData(data);
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let idproducto = localStorage.getItem("catID")
const url = "https://japceibal.github.io/emercado-api/cats_products/" +idproducto+".json";
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(url).then(function(resultObj){
        if (resultObj.status === "ok"){
            data = resultObj.data
            mostrarData(data)
            //sortAndShowCategories(ORDER_ASC_BY_NAME, resultObj.data);
        }
    });

    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowCategories(preciobajo);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowCategories(preciomayor);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
        sortAndShowCategories(cantidad);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("filtromin").value = "";
        document.getElementById("filtromax").value = "";

       minimo = undefined;
        maximo = undefined;

        mostrarData(data);
    });

    document.getElementById("rangofiltrado").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minimo = document.getElementById("filtromin").value;
        maximo = document.getElementById("filtromax").value;

        if ((minimo != undefined) && (minimo != "") && minimo >= 0){
            minimo = minimo;
        }
        else{
            minimo = undefined;
        }

        if ((maximo != undefined) && (maximo != "") && maximo >= 0){
            maximo = maximo;
        }
        else{
            maximo = undefined;
        }

        mostrarData(data);
    });
});