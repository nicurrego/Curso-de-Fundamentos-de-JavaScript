// Capacidades que tienen las funciones al igual que otros objetos

//1. Pasar funciones como argumentos -> callback

function a () {}
function b (a) {}
b(a)

// Retornar funciones

function a () {
  function b() {}
  return b
}

// Asignar funciones a variables -> Expresion de funcion

const a = function () {}

// Tener propiedades y métodos 

function a() {}
  const obj = {}
  a.call(obj)

//Anidar funciones -> Nested functions

function a (){
  function b () {
    function c (){
    }
    c()
  }
  b()
}
a()

//¿Es posible almacenar funciones en objetos?

const rocket = {
  name: 'Falcon-10',
  launchMessage: function launchMessage(){
    console.log('🔥');
  }
}
launchMessage()

//Justo estoy intentando mandar el repositorio local al repositorio de GitHub por ser la clase 20. Pero estoy teniendo problemas porque cree un par de commits en en README.md del reopsitorio en GitHub y como no esta relacionado con mi repositorio local me veo forzado a ejecutar el comando:

// git pull origin main --allow-unrelated-histories
