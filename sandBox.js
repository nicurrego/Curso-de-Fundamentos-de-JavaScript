const userDatabase = [
  {
    username: "Gabriela",
    password: "g4a4"
  },
  {
    username: "Andres",
    password: "123",
  },
  {
    username: "caro",
    password: "456",
  },
  {
    username: "mariana",
    password: "789",
  }
];
const usersTimeline = [
   {
    username: "Gabriela",
    timeline: "Te amo"
   },
  {
    username: "Estefany",
    timeline: "Me encanta Javascript!",
  },
  {
    username: "Oscar",
    timeline: "Bebeloper es lo mejor!",
  },
  {
    username: "Mariana",
    timeline: "A mi me gusta más el café que la leche",
  },
  {
    username: "Andres",
    timeline: "Yo hoy no quiero trabajar",
  },
];

function validarUsuario(username, password) {
  const validUser = userDatabase.find(e => e.username === username)
  if(validUser){
    console.log("Usuario válido");
    if(validUser.password === password){
      console.log("Contraseña correcta.");
      console.log("Acceso concedido!");
      showTimeline(username)
    } else {
      console.log("Contraseña incorrecta!");
      console.log("Acceso denegado");
    }
  } else {
    console.log("Usuario no encontrado.");
    console.log("Acceso denegado");
  }
}

function showTimeline(user) {
 const conTimeline = usersTimeline.find(e => e.username === user)  
 if (conTimeline) {
  console.log("timeline: " + conTimeline.timeline);
  alert("timeline: " + conTimeline.timeline);
 } else {
  console.log("Usuario no tiene timeline actualmente.");
 }
}

const usuario = prompt("ingresa tu nombre de usuario")
const password = prompt("ingresa tu contraseña")


usuarioExistente(usuario, password)
