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

function usuarioExistente(username, password){
  for (let i = 0; i < userDatabase.length; i++) {
    if (
      userDatabase[i].username === username &&
      userDatabase[i].password === password
    ) {
      console.log("Es correcto");
      break;
    } else{
      console.log("No es correcto");
    }
  }
}

const usuario = prompt("ingresa tu nombre de usuario")
const password = prompt("ingresa tu contraseña")


usuarioExistente(usuario, password)
