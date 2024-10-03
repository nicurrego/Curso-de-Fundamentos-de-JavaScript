// GET & POST -> trae y envia informacion

// PATCH & PUT -> corrige o agrega informacion
 
//DELETE -> delete

fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())
.then((data) => console.log(data))