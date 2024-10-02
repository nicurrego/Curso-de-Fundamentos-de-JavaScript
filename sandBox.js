// lo que se genera en la clase padre se puede heredar y trabajar con ellos mas adelante

// metodos 

// propiedades


// prototype
//   metodos
//   propiedades

class Animal {
  constructor(nombre, tipo){
    this.nombre = nombre;
    this.tipo = tipo;
  }
  emitirSonido(){ // creando un metodo
    console.log("El animal emite un sonido");
  }
}

class Perro extends Animal{  // Palabra clave "extends (classe padre)"
  constructor(nombre, tipo, raza){
    super(nombre, tipo); // Palabra clave "super => permite utilizar las propiedades de la clase padre"
    this.raza = raza;
  }
  emitirSonido(){
    console.log("El perro ladra");
  }
  correr(){
    console.log(`${this.nombre} corre alegremente`);
  }
}

const perro1 = new Perro("Bobby", "Perro", "Pug");

console.log(perro1);

perro1.correr();
perro1.emitirSonido();


