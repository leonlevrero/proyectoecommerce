let url = `https://japceibal.github.io/emercado-api/cats_products/101.json`
fetch(url)
 .then(response => response.json())
 .then(data => mostrarData(data))
 .catch(error => console.log(error))

 const mostrarData = (data) => {
    console.log(data)
    let body = ''
    for (let i = 0; i<data.length; i++){
        body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td></tr>`
    }
    document.getElementById('data').innerHTML = body
 }