// Con esta funcion podemos construir objetos de manera mucho mas eficaz y eficiente.


function Persona(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
}

const persona1 = new Persona("Juan", "Perez", 30)

console.log(persona1);

const persona2 = new Persona("Diego", "De Granada", 35)

console.log(persona2);

Persona.prototype.telefono = "555-555-5555";

persona1.nacionalidad = "Mexicano";

Persona.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

persona1.saludar()
persona2.saludar()