// Una clase es una nueva forma de crear objetos.
// la funcion constructora es util para entender el codigo viajo.
class Persona {
  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar(){
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} years old`);
  }
}

const persona1 = new Persona("Nicolas", 10002);

console.log(persona1);
persona1.saludar()
