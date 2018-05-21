const fs =require('fs')
// 6

/* higer order functions */

// .reduce() - the 'multitool of list transformation' - MPJ fun fun function.
// can express any array transformation

// data example
var output = fs.readFileSync('data.txt', 'utf8')
  .trim()
  .split('\n')
  .map(line => line.split('*'))
  .reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || []
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    })
    return customers
  }, {})

console.log('output :', JSON.stringify(output, null, 2));

const order = [
  {amount: 250},
  {amount: 400},
  {amount: 100},
  {amount: 325}
]
const isAmount = (sum, order) => {
  return sum + order.amount
}

const totalAmount = order.reduce(isAmount, 0);

// the old way
/*
var totalAmount = 0
for(var i=0; i < order.length; i++){
  totalAmount += order[i].amount;
}
*/
// console.log(totalAmount);


// array transformation methods

const animals = [
  {name :"Fluffykins", species: "rabbit"},
  {name :"Caro", species: "dog"},
  {name :"Hamilton", species: "dog"},
  {name :"Harold", species: "fish"},
  {name :"Ursula", species: "cat"},
  {name :"Jimmy", species: "fish"},
]

// .find() like filter but, only returns the first match
// .reject() like filter but it returns what was rejected
// .map() returns transformed form what it acts apon.

const isAnimal = (animal)=>{
  return animal.name + "is a" + animal.species
}

const names = animals.map(isAnimal);

// console.log(names);

// .filter
const isDog = (animal)=>{
  return animal.species === 'dog'
};

const dogs = animals.filter(isDog);

// console.log(dogs);
