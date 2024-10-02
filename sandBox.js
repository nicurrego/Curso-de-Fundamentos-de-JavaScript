/*

estructura de datos

key / value

objeto {
propiedad: valor,
propiedad: valor,
propiedad: valor

metodos()
}

*/

const persona = {
  nombre: "Jhon",
  edad: 30,
  direccion: {
    calle: "Av Insurgentre 187",
    ciudad: "CDMX"
  },
  saludar(){
    console.log(`hola, mi nombre es ${persona.nombre}`);
  },
}
console.log(persona);
persona.saludar()


persona.teleforno = "555-555-5555";

console.log(persona.teleforno);

persona.despedir = () => {
  console.log("Adios");
}

persona.despedir();

delete persona.telefono;
delete persona.despedir;

console.log(persona.telefono);
