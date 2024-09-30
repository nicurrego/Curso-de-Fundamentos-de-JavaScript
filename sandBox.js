/*
function -> Palabra clave
suma -> nombre de la funcion
(a, b) -> parametro(s) //no todas las funciones requieren de parametros
{ } -> llaves // espacion en el que ubicamos el cuerpo de la funcion
return a+b -> cuerpo de la funcion
suma(3,5) -> llamado // se ejecuta la funcion
(3,5) -> argumento // en esta parte se ubica el argumento que la funcion pide.

*/

function suma(a, b) {
  return a + b
}
console.log(suma(3,5))

// ejemplo de clase

function calculateDiscountPrice(price, discountPercentage) {
  const discount = (price * discountPercentage) / 100
  const priceWithDiscount = price - discount

  return priceWithDiscount
}

const originalPrice = 2200
const discountPercentage = 15
const finalPrice = calculateDiscountPrice(originalPrice, discountPercentage)

console.log('Original Price: $' + originalPrice);
console.log('Discount $' + discountPercentage + '%');
console.log('Price with discount: $' + finalPrice);


