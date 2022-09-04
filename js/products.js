

 
 function mostrarData() {
    let body = "";
    for (var i = 0; i <= arrayaux.length; i++) {
     let currentProductsArray = arrayaux[i];
        
        body += `<div onclick="setCatID(${currentProductsArray})" class="list-group-item list-group-item-action cursor-active">
            <div class="row">
                <div class="col-3">
                    <img src= ${currentProductsArray.image} alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${currentProductsArray.name} ${currentProductsArray.currency} ${currentProductsArray.cost} </h4>
                        <small class="text-muted">${currentProductsArray.soldCount} vendidos</small>
                    </div>
                    <p class="mb-1">${currentProductsArray.description}</p>
                </div>
            </div>
            <div class="btn-group">
         <button type="button" class="btn btn-xl btn-outline-secondary">Agregar al carrito</button>
         </div>
        </div> `

        document.getElementById("data").innerHTML = body
      } 
    }
    

    let arrayaux = []
    let currentSortCriteria = undefined;
    let minimo = undefined;
    let maximo = undefined;
    let currentProductsArray = [];   //INICIALIZO TODAS LAS VARIABLES
    const  preciobajo = "01";
    const preciomayor = "10";
    const cantidad = "Cant.";
    
function sortCategories(criteria, currentProductsArray){
    let result = [];
    if (criteria === preciobajo)
    {
        result = currentProductsArray.sort(function(a, b) {    // ORDENA DE MENOR A MAYOR PRECIO
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === preciomayor){
        result = currentProductsArray.sort(function(a, b) {   // ORDENA DE MAYOR A MENOR PRECIO
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === cantidad){
        result = currentProductsArray.sort(function(a, b) {  // ORDENA DE MAYOR  A MENOR POR CANTIDAD DE VENDIDOS
          

            if ( a.soldCount > b.soldCount ){ return -1; }
            if ( a.soldCount < b.soldCount ){ return 1; }
            return 0;
        });
    }

    return result;
}




function sortAndShowCategories(sortCriteria, categoriesArray){
    currentSortCriteria = sortCriteria;                              // SEGUN EL CRITERIO DE ORDENAMIENTO SELECCIONADO, SE ORDENA EL ARRAY
 
    if(categoriesArray != undefined){
        data = categoriesArray;
    }

   data.products = sortCategories(currentSortCriteria, data.products);

    //Muestro las categorías ordenadas
    mostrarData();
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let idproducto = localStorage.getItem("catID") // paso el id del producto a la variable idproducto
const url = "https://japceibal.github.io/emercado-api/cats_products/" +idproducto+".json";
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(url).then(function(resultObj){
        if (resultObj.status === "ok"){
            data = resultObj.data
            arrayaux = data.products
            mostrarData()
            //sortAndShowCategories(ORDER_ASC_BY_NAME, resultObj.data);
        }
    });

    document.getElementById("sortAsc").addEventListener("click", function(){ // CUANDO HAGO CLICK EN EL BOTON DE ORDENAR DE MENOR A MAYOR PRECIO, SE EJECUTA LA FUNCION
        sortAndShowCategories(preciobajo); 
    });

    document.getElementById("sortDesc").addEventListener("click", function(){ // CUANDO HAGO CLICK EN EL BOTON DE ORDENAR DE MAYOR A MENOR PRECIO, SE EJECUTA LA FUNCION
        sortAndShowCategories(preciomayor);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){  // CUANDO HAGO CLICK EN EL BOTON DE RELEVANCIA, SE EJECUTA LA FUNCION
        sortAndShowCategories(cantidad);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function(){ // CUANDO HAGO CLICK EN EL BOTON DE LIMPIAR FILTRO, SE EJECUTA LA FUNCION
        document.getElementById("filtromin").value = "";
        document.getElementById("filtromax").value = "";

        minimo = undefined;
        maximo = undefined;
        location.reload(); // refresco la pagina para que setee todos los valores predeterminados.
    });

    document.getElementById("rangofiltrado").addEventListener("click", function(){  // CUANDO HAGO CLICK EN EL BOTON DE FILTRAR, SE EJECUTA LA FUNCION
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minimo = document.getElementById("filtromin").value;
        maximo = document.getElementById("filtromax").value;
    //    console.log(minimo, maximo);
     //   console.log(data.products)
        let  arrayfiltrado = data.products.filter((value) => (!(value.cost  <= minimo) && value.cost <= maximo));
     //   console.log(arrayfiltrado);
        arrayaux = arrayfiltrado;
        mostrarData();
    });
   });  
        