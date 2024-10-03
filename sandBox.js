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
    username: "caro",
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
      return true;
    }
  }
  return false;
}

function singIng(username, password) {
  if (usuarioExistente(username, password)) {
    alert(`bienvenido a tu cuenta ${username}`)
    console.log(usersTimeline);
  } else {
    alert("Uuuuuuuuuuuups, usuario o contraseña incorrectos!")
  }
}

const usuario = prompt("ingresa tu nombre de usuario")
const password = prompt("ingresa tu contraseña")


singIng(usuario, password)
