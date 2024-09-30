const numeroSecreto = Math.floor(Math.random()*10 + 1);

const numeroJugador = parseInt(
  prompt("Adivina el número con el que juegas ${numerjoJugador}")
)
if (numeroJugador === numeroSecreto){
  console.log("Felicitaciones!");
} else if (numeroJugador < numeroSecreto){
  console.log("intenta un numero mas alto");
  prompt("Adivina el número con el que juegas ${numerjoJugador}")
} else {
  console.log("El número es más bajo");

}