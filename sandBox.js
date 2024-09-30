// Lexical Binding

const fictionalCharacter = {
  name: 'Uncle Ben',
  messageWithTraditionalFuncion: function (message){
    console.log(`${this.name} says: ${message}`)
  },
  messageWithArrowFuncion: (message) => {
    console.log(`${this.name} says: ${message}`);
  }
}

fictionalCharacter.messageWithTraditionalFuncion('with great power comes great responsibility')
fictionalCharacter.messageWithArrowFuncion('beware of green goblin')

// Para que el Arrowfunction pueda ejecutar correctamente el nombre toca crear un enlace directo:

const fictionalCharacter1 = {
  name: 'Uncle Ben',
  messageWithTraditionalFuncion: function (message) {
    console.log(`${this.name} says: ${message}`);
  },
  messageWithArrowFuncion: function (message) {
    const self = this; // Guardamos una referencia a this
    const arrowFunc = (msg) => {
      console.log(`${self.name} says: ${msg}`);
    };
    arrowFunc(message);
  }
};

fictionalCharacter1.messageWithTraditionalFuncion('with great power comes great responsibility');
fictionalCharacter1.messageWithArrowFuncion('beware of green goblin');
