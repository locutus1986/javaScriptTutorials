// datatypes
var myName: string = 'zachary';
var myAge: number = 41;
var canVote: boolean = true;
var anything: any = 'a dynamic type';
const PI = 3.14149;

formattingFunction(1);
// example 1 - getting used to datatypes
document.getElementById('tsStuff')
  .innerHTML = "My Name is " + myName;

document.write('myName is a ' + typeof(myName) + '<br />');
document.write('canVote is a ' + typeof(canVote) + '<br />');
document.write('anyting is a ' + typeof(anything) + '<br />');
document.write('myAge is a ' + typeof(myAge) + '<br />');

formattingFunction(2);
// example 2 - converting datatypes
var strToNum: number = parseInt('5');
var numToStr: number = 5;
document.write('numToStr is a ' + typeof(numToStr.toString())
                + '<br />');

formattingFunction(3);
// example 3 - interfaces
interface person {
  realName: String;
  nickName: String;
}

var Zachary: person = {
  realName: "Zachary Ruffner",
  nickName: "Dad"
}

document.write(Zachary.realName + " is " + Zachary.nickName
                + '<br>');

formattingFunction(4);
// example 4 - arrays
// Arrays are stricly typed as well
var listOfHumans: string[] = ["Atticus",
                              " Oliver",
                              " Daniel",
                              " Traci",
                              " Rebecca"
                            ];

document.write(listOfHumans.toString()+ "<br>")

var people : person[] = [];

people.push({
  realName: "Traci Ruffner",
  nickName: "Mom"
},
{
  realName: "Atticus Ruffner",
  nickName: "buttercup"
}
);

for(var i: number = 0; i <= people.length-1; i++){
  document.write(people[i].realName + ' ' + people[i].nickName);
  if(i != people.length-1){
    document.write(', ');
  }
}

formattingFunction(5)
// example 5 - math with typeScript
document.write('5 + 6 =' + (5+4) + '<br>');
document.write('5 + String 2 = ' + (5+'2 ') + ' <br>');

formattingFunction(6)
// example 6 - if, switch, and ternary operator
 // var vs. let with if statments
 let myVar = 123;

 if(true){
   let myVar = 456;
 }
 document.write('myVar : ' + myVar + "<br>")
 // myVar does NOT change
 // my question is why use let/var in the if statment at all?
 // isn't this why let was created; block lvl scoping?
 // maybe I need a better tutorial?

 var myVar = 123;

 if(true){
   var myVar = 456;
 }
 document.write('myVar : ' + myVar + "<br>")
 // myVar does change

formattingFunction(7);
// example 7 - loops
var myArray = [6,7,8,9,10, 11];
for(var cell in myArray){
  document.write(cell + "<br>");
}
document.write("<br>");
// var strArray = myArray.map(String);  ????????!!!!!!! line 88?
for(var cell of myArray){
  document.write(cell + "<br>");
}

formattingFunction(8);
// functions
// functions return with a datatype

var addingUp = function(num1: number, num2: number): number{
  return num1 + num2;
}

var mySum: number = addingUp(7,4);
document.write(mySum + '<br>');

var getDiff = function(num1: number, num2 = 2, num3?: number): number{
  if(typeof num3 !== 'undefined'){
    return num1 - num2 - num3;
  }
  return num1 - num2
}

document.write(getDiff(5,3,7) + '<br>')

formattingFunction(9);
// example 9 -  rest param
var sumAll = function(...nums: number[]): void {
  var sum = nums.reduce((a,b) => a + b, 0);
  document.write(sum + '<br>');
}

sumAll(myArray);

formattingFunction(10);
// example 10 - classes
class Animal{
  public food: string

  static numOfAnimals: number = 0;

  constructor(private name: string, private owner: string){
    Animal.numOfAnimals++;
  }

    ownerInfo(){
      document.write(this.name + " is " + this.owner + "\'s pet. <br>");
    }

    static howManyAnimals(): number{
      return Animal.numOfAnimals;
    }

    private _weight: number;

    get weight(): number{
        return this._weight;
    }

    set weight(weight: number){
      this._weight = weight;
    }

    private _species: string;

    get species(): string{
      return this._species;
    }

    set species(species: string){
      this._species = species;
    }
}

var cat1 = new Animal('Buddy', "Zachary D. Ruffner");
cat1.ownerInfo();
cat1.weight = 10;
cat1.species = 'cat';

var cat2 = new Animal('Sailor Scout', "Kaitlyn Watson");
cat2.weight = 5;
cat2.species = 'cat';

document.write("Buddy is a " + cat1.species + " and  weighs "
 + cat1.weight + " lbs. <br>");

 document.write("# of Animals: " + Animal.howManyAnimals() + "<br>");

 class Dog extends Animal{
   constructor(name: string, owner: string){
     super(name, owner);
     Dog.numOfAnimals++
   }
 }

 var dog1 = new Dog('Otis', 'the folks nextdoor');

  document.write("Is a Dag an Animal : " + (dog1 instanceof Animal) + "<br>");
  document.write('does dog1 have a name ' + ('name' in dog1) +'<br>')


formattingFunction(11);
// interface part 2
interface Vehicle{
  drive(): any;
}

class Car implements Vehicle{
  constructor(private wheels: number){}
    drive(): void {
      document.write("the car has " + this.wheels
                      + " numnber of wheels<br>");
    }
  }
}

class Bicycle implements Vehicle{
  constructor(private wheels: number){}
    drive(): void {
      document.write("the bicycle has " + this.wheels
                      + " numnber of wheels<br>");
    }
  }
}

var car = new Car(4);
var bike = new Bicycle(2);

car.drive();
bike.drive();

formattingFunction(12);
// example 12 - generic functions
function GetType<T>(val: T): string{
  return typeof(val);
}

var aStr = "A String";
var aNum = 10;

document.write(GetType(aStr) + '<br>');
document.write(GetType(aNum) + '<br>');

function GetWheels<w extends Vehicle>(veh: w): number{
  return veh.drive();
}

GetWheels(car);
GetWheels(bike);

formattingFunction(13);
// example 13 - generic classes
class GenericNumber<T>{
  add: (val1: T, val2: T) => T;
}

var aNumber = new GenericNumber<number>();
aNumber.add = function(x, y){return x + y}

document.write(aNumber.add(5, 4) + '<br>');

formattingFunction(14);
// example 14 - destructuring
var randVals = {x: 1, y: 2, z: 3};
var{x, y, z} = randVals;

document.write(x + y + z + "<br>");
[x, y, z] =  [z, y, x];

document.write('Switch : ' + x + y + z + '<br>');

formattingFunction(15);
// example 15 - template literals
var multStr = `I know this because
it's part of es6 --- timplet literals
<br>`;

document.write(multStr);
document.write(`${multStr}`);

formattingFunction(16);
// example 16 - the spread operator
function theSum(x,y,z): void{
  document.write("Sum : " + (x+y+z) + "<br>");
}
var args = [4,5,6];
theSum(...args);

enum Emotion {
  Happy = 1,
  Sad,
  Angry
}

var myFeeling = Emotion.Happy;
myFeeling = 1;

/***********************************
              notes
-- notes on classes --
static - same for all instances of the class
public - can be access easliy
private - can not be seen from subclasses
----------------------------------------------------

-- useful termnial commands --
*to compile
tsc filename.ts --target ES/[56]/

*auto compile
tsc *.ts --watch --target ES/[56]/
-------------------------------------

-- useful methods --
* typeof(var) - returns the type of var that is passed to it
* parseInt(var) -
* var.toString() -
-------------------------------------------

-- question --
would I ever need to compile to es6?

****************************************/

// function for formatting sections
function formattingFunction(example){
  document.write("<br><br>Example " + example + "<hr><br>");
}
