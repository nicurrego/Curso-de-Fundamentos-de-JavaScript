// let canasta = ["manzana", "pera", "naranja", "uva"];

// for (fruta of canasta){
//   console.log(fruta); 
// }

const listaDeCompras = {
  manzana: 5,
  pera: 3,
  naranja: 2,
  uva: 1,
};

for (fruta in listaDeCompras){
  console.log(fruta);
}
for (fruta in listaDeCompras) {
      console.log(`${fruta}: ${listaDeCompras[fruta]}`);
      
}
for (fruta of listaDeCompras){
  console.log(fruta);//el for in no funciona con elementos INNUMERABLES
  
}