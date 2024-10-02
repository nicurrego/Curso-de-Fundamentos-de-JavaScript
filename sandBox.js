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

