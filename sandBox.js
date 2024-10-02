// How to create an Array?


const fruits = Array('apple', 'banana', 'orange')
console.log(fruits);

const justOneNumber = Array(12)
console.log(justOneNumber);

const number = Array(1, 2, 3, 4, 5)
console.log(number);

// 2. Array literal syntax

const oneNumber = [4]
console.log(oneNumber);

const emptyArray = []
console.log(emptyArray);

const sports = ['soccer', 'tennis', 'rugby']
console.log(sports);

const recipeIngredients = [
  'Flour',
  true,
  2,
  {
    ingredient: 'Milk', quantity: '1 cup'
  },
  false
]
console.log(recipeIngredients);

// Accessing array element

const firtsFruit = fruits[0]
console.log(firtsFruit);

// length property

const numerOfFruits = fruits.length
console.log(numerOfFruits);

