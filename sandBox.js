// Explica que las variables tienen un scope chain o alcanze segun el bloque al que pertenencen.

const userPoints = 150 //bloque1

function checkAccess(){//bloque2
  if (userPoints < 100){//bloque3
    const message = 'Acces denied: Insufficient points!'
    return message
  }//bloque3 
  else {//bloque4
    const message = 'Acces granted: Enjoy the premim features!'
    return message
  }//bloque4
}//bloque2

console.log(checkAccess());
//bloque1