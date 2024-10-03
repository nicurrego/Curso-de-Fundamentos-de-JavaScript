const promise = new Promise((resolve,reject) => {
  setTimeout(() => {
    let operationSuccesful = true;
    if (operationSuccesful){
      resolve("La operacion fue exitosa!");
    } else {
      reject("Fallo la operacion");
    }
  }, 1000)
});

promise
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
})

//simulacion de una promesa en donde la operacion es exitosa