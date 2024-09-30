//Funciones puras e impuras

//Funciones puras son aquellas que no modifican nada y su resultado siempre sera igual

//ejemplo de Funcion pura

function square(x){
  return x * x
}

//Funciones impuras son aquellas que pueden modificar o mostrar algo en el DOM

//ejemplo de Funcion impura

let total = 0

function sumWithSideEffect (a){//aqui se modifica el valor de una variable lo que hace que la funcion sea impura
  total += a
  return total
}
