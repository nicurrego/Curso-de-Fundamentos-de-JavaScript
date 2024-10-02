// Methods that modify the original array (Mutability).

//push()

const countries = ['USA', 'Canada', 'UK']
const newCountries = countries.push('Germany', 'Australia')

console.log(countries);
console.log(newCountries);

// pop()

const removedCountry = countries.pop()//quita el ultimo elemento

  console.log(countries);
  console.log(removedCountry);

// Methods that iterate over an array.
//Methods that DO NOT modify the original array (Imnutability)

// map()

const numbers = [1, 2, 3, 4, 5]
const squareNumbers = numbers.map(num => num * num)

console.log(numbers);
console.log(squareNumbers);

// forEach()

const colors = ['red', 'pink', 'blue']
const iteratedColors = colors.forEach(color => console.log(color))
console.log(colors);
console.log(iteratedColors);


// Create a program that takes an array of temperatures in Fahrenheit as input and converts them to Celsius using the formula: C = 5/9 * (F-32)
//ejemplo de la clase
const temperaturesInFahrenheit = [32, 68, 95, 104, 212]

const temperaturesinCelsius = temperaturesInFahrenheit.map(fahrenheit => (5/9) * (fahrenheit - 32))

console.log('Temperatures in fahrenheit:',temperaturesInFahrenheit);
console.log('Temperatures in celsius:',temperaturesinCelsius);


// mi experimento
const temperatures = ['32', '212', '95']
const inCelsius = temperatures.forEach(num => console.log((5/9) * (num-32)))

// filter()

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numerosPares = numeros.filter(numeros => numeros % 2 === 0)

console.log(numeros);
console.log(numerosPares);

// reduce() //la cosa con esto es que no trabaja como un array normal. Mas bien toca mirarlo como un objeto con sus metodos independientes

const numebrsReduce = [1, 2, 3, 4, 5]
const sum = numebrsReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)// Vendria siendo como un metodo para simplificar un array. El acumulador seria como una variable que almacena el array resumido. el '0' al final es el formato inicial del resumen.
console.log(numebrsReduce);
console.log(sum);


// reduce () case 2

const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye',]

const wordFrecuency = words.reduce((accumulator, currentValue) =>{
  if (accumulator[currentValue]){
    accumulator[currentValue]++
  } else{
    accumulator[currentValue] = 1
  }
  return accumulator
},{})

console.log(wordFrecuency);
const mulipleOf5 = [5, 10, 15, 20]
const firstNumberGreaterThan10 = mulipleOf5.find(number => number > 10)
console.log(mulipleOf5);
console.log(firstNumberGreaterThan10);



// findIndex ()

const randomNumber = [6, 14, 27, 56, 40]
const indexNumber = randomNumber.findIndex(number => number > 39) // solamente me devuelbe el primer numero que cumple con la condicion

console.log(randomNumber);
console.log(indexNumber);

// slice() // imagina que tienes una pared en el numero que le indicas para que no tome los elementos entre las paredes

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(animals.slice(2));
console.log(animals.slice(2,4));
console.log(animals.slice(1,6));
console.log(animals.slice(-2));
console.log(animals.slice(2, -1));
console.log(animals.slice());
