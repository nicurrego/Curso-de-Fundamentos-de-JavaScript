function fetchData() {
  fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
}

async function fetchData(){
  try{
    let response = await fetch("https://rickandmortyapi.com/api/character");
    let data = await response.json();
    console.log(data);
  } catch (error){
    console.log(error);
    
  }
}

// el async (funcion asincronica) es mas moderna y facil de entender
//el await es lo que permite que se ejecuten los pasos una vez se culmine el anterior.