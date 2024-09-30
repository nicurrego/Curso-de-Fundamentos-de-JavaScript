// switch (expresion) {
//   case value1:
//     //codigo a ejecutar 
//     break;
//   case value2:
//     //codigo a ejecutar 
//     break;
//   case value3:
//     //codigo a ejecutar 
//     break;
//   case value4:
//     //codigo a ejecutar 
//     break;
//   case value5:
//     //codigo a ejecutar 
//     break;
//   default:
//     break;
//     //codigo en caso de -FALSE-
// }
let exp = "uvas"
switch (exp) {
  case "Naranjas":
    console.log("Las naranjas cuestan $20 por Kg.");
    break
  case "Manzanas":
    console.log("Las manzanas cuestan $43 por Kg.");
    break
  case "Plátanos":
    console.log("el plátano cuesta $30 por Kg.");
    break;
  case "Mangos":
  case "Papayas":
    console.log("Los mangos y las papayas cuestan $25 por Kg.");
    break;
  default:
    console.log(`Lo siento, no contamos con ${exp}`);
    break
}
console.log("¿Deseas algo más?");
