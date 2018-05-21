var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// datatypes
var myName = 'zachary';
var myAge = 41;
var canVote = true;
var anything = 'a dynamic type';
var PI = 3.14149;
formattingFunction(1);
// example 1 - getting used to datatypes
document.getElementById('tsStuff')
    .innerHTML = "My Name is " + myName;
document.write('myName is a ' + typeof (myName) + '<br />');
document.write('canVote is a ' + typeof (canVote) + '<br />');
document.write('anyting is a ' + typeof (anything) + '<br />');
document.write('myAge is a ' + typeof (myAge) + '<br />');
formattingFunction(2);
// example 2 - converting datatypes
var strToNum = parseInt('5');
var numToStr = 5;
document.write('numToStr is a ' + typeof (numToStr.toString())
    + '<br />');
formattingFunction(3);
var Zachary = {
    realName: "Zachary Ruffner",
    nickName: "Dad"
};
document.write(Zachary.realName + " is " + Zachary.nickName
    + '<br>');
formattingFunction(4);
// example 4 - arrays
// Arrays are stricly typed as well
var listOfHumans = ["Atticus",
    " Oliver",
    " Daniel",
    " Traci",
    " Rebecca"
];
document.write(listOfHumans.toString() + "<br>");
var people = [];
people.push({
    realName: "Traci Ruffner",
    nickName: "Mom"
}, {
    realName: "Atticus Ruffner",
    nickName: "buttercup"
});
for (var i = 0; i <= people.length - 1; i++) {
    document.write(people[i].realName + ' ' + people[i].nickName);
    if (i != people.length - 1) {
        document.write(', ');
    }
}
formattingFunction(5);
// example 5 - math with typeScript
document.write('5 + 6 =' + (5 + 4) + '<br>');
document.write('5 + String 2 = ' + (5 + '2 ') + ' <br>');
formattingFunction(6);
// example 6 - if, switch, and ternary operator
// var vs. let with if statments
var myVar = 123;
if (true) {
    var myVar_1 = 456;
}
document.write('myVar : ' + myVar + "<br>");
// myVar does NOT change
// my question is why use let/var in the if statment at all?
// isn't this why let was created; block lvl scoping?
// maybe I need a better tutorial?
var myVar = 123;
if (true) {
    var myVar = 456;
}
document.write('myVar : ' + myVar + "<br>");
// myVar does change
formattingFunction(7);
// example 7 - loops
var myArray = [6, 7, 8, 9, 10, 11];
for (var cell in myArray) {
    document.write(cell + "<br>");
}
document.write("<br>");
// var strArray = myArray.map(String);  ????????!!!!!!! line 88?
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var cell = myArray_1[_i];
    document.write(cell + "<br>");
}
formattingFunction(8);
// functions
// functions return with a datatype
var addingUp = function (num1, num2) {
    return num1 + num2;
};
var mySum = addingUp(7, 4);
document.write(mySum + '<br>');
var getDiff = function (num1, num2, num3) {
    if (num2 === void 0) { num2 = 2; }
    if (typeof num3 !== 'undefined') {
        return num1 - num2 - num3;
    }
    return num1 - num2;
};
document.write(getDiff(5, 3, 7) + '<br>');
formattingFunction(9);
// example 9 -  rest param
var sumAll = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = nums.reduce(function (a, b) { return a + b; }, 0);
    document.write(sum + '<br>');
};
sumAll(myArray);
formattingFunction(10);
// example 10 - classes
var Animal = /** @class */ (function () {
    function Animal(name, owner) {
        this.name = name;
        this.owner = owner;
        Animal.numOfAnimals++;
    }
    Animal.prototype.ownerInfo = function () {
        document.write(this.name + " is " + this.owner + "\'s pet. <br>");
    };
    Animal.howManyAnimals = function () {
        return Animal.numOfAnimals;
    };
    Object.defineProperty(Animal.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (weight) {
            this._weight = weight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (species) {
            this._species = species;
        },
        enumerable: true,
        configurable: true
    });
    Animal.numOfAnimals = 0;
    return Animal;
}());
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
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, owner) {
        var _this = _super.call(this, name, owner) || this;
        Dog.numOfAnimals++;
        return _this;
    }
    return Dog;
}(Animal));
var dog1 = new Dog('Otis', 'the folks nextdoor');
document.write("Is a Dag an Animal : " + (dog1 instanceof Animal) + "<br>");
document.write('does dog1 have a name ' + ('name' in dog1) + '<br>');
formattingFunction(11);
var Car = /** @class */ (function () {
    function Car(wheels) {
        this.wheels = wheels;
    }
    Car.prototype.drive = function () {
        document.write("the car has " + this.wheels
            + " numnber of wheels<br>");
    };
    return Car;
}());
var Bicycle = /** @class */ (function () {
    function Bicycle(wheels) {
        this.wheels = wheels;
    }
    Bicycle.prototype.drive = function () {
        document.write("the bicycle has " + this.wheels
            + " numnber of wheels<br>");
    };
    return Bicycle;
}());
var car = new Car(4);
var bike = new Bicycle(2);
car.drive();
bike.drive();
formattingFunction(12);
// example 12 - generic functions
function GetType(val) {
    return typeof (val);
}
var aStr = "A String";
var aNum = 10;
document.write(GetType(aStr) + '<br>');
document.write(GetType(aNum) + '<br>');
function GetWheels(veh) {
    return veh.drive();
}
GetWheels(car);
GetWheels(bike);
formattingFunction(13);
// example 13 - generic classes
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var aNumber = new GenericNumber();
aNumber.add = function (x, y) { return x + y; };
document.write(aNumber.add(5, 4) + '<br>');
formattingFunction(14);
// example 14 - destructuring
var randVals = { x: 1, y: 2, z: 3 };
var x = randVals.x, y = randVals.y, z = randVals.z;
document.write(x + y + z + "<br>");
_a = [z, y, x], x = _a[0], y = _a[1], z = _a[2];
document.write('Switch : ' + x + y + z + '<br>');
formattingFunction(15);
// example 15 - template literals
var multStr = "I know this because\nit's part of es6 --- timplet literals\n<br>";
document.write(multStr);
document.write("" + multStr);
formattingFunction(16);
// example 16 - the spread operator
function theSum(x, y, z) {
    document.write("Sum : " + (x + y + z) + "<br>");
}
var args = [4, 5, 6];
theSum.apply(void 0, args);
var Emotion;
(function (Emotion) {
    Emotion[Emotion["Happy"] = 1] = "Happy";
    Emotion[Emotion["Sad"] = 2] = "Sad";
    Emotion[Emotion["Angry"] = 3] = "Angry";
})(Emotion || (Emotion = {}));
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
function formattingFunction(example) {
    document.write("<br><br>Example " + example + "<hr><br>");
}
var _a;
