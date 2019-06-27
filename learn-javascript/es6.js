// let and const
var isHuman = true;
let score = 10;
const fullName = "Messi";

// if not block scope
if (isHuman) {
  var isHuman = false;
}

// object - Destructuring assignment
const accout = {
  job: "programmer"
};

const { job } = accout;

const name = "cristiano ronaldo";
const number = 7;

const player = {
  name,
  number,
  position: "Left Winger Forward"
};

// template string
const sayAwesome = `This is ${"Awesome"}`;

function sayHello(name = "ledi") {
  return `Hello ${name}`;
}

sayHello();

// Symbol
const sym1 = Symbol("ledi");
const sym2 = Symbol("ledi");

sym1 === sym2

// Arrow function
const newFun = (num = 5) => num**2;

// Advanced Functions
const first = () => {
  const greet = "Hi";
  const second = () => {
    alert(greet);
  }
  return second;
}

const newFunc = first();
newFunc();

// Closures - a function ran. The function executed. It's never going to executed again.
// BUT it's going to remember that there are references to those variables
// so the child scope always has access to the parent scope.

// Currying
const multiply = (a, b) => a + b;
const curriedMultiply = a => b => a * b;
curriedMultiply(3)(5);

// compose
const compose = (f, g) => a => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);

// Whats are the two elements of a pure function?
// 1. Deterministic -> Always produces the some results given the same inputs
// 2. No side effects -> It does not depend on any state, or data, change during a program's execution. It must only depend on it's input element

// Advanced Arrays
const array = [1, 2, 10, 16, 5];
const double = [];
const newArray = array.forEach(num => double.push(num * 2));

// map, filter, reduce * ther are create new Array not modified the orignial array

const dobuleMap = array.map(num => num * 2);
const numAboveFive = array.filter(num => num > 5);
const total = array.reduce((acc, curr) => acc + curr, 0);

// Array just an object in the end of the day.

// context vs scope
this === window // true
// this mean what is the object enveronment that where in right now
// this just refers to object inside of

// this/window.alert()

// this
const obejct4 = {
  a: function() {
    console.log(this);
  }
};

// this is userful when we want to instatiaton object
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Football extends Player {
  constructor(name, type) {
    super(name, type);
  }

  goal() {
    console.log(`What a beutiful GOAL form ${this.name}`);
  }
}

const messi = new Player("Messi", "Second Striker");
const goalComm = new Football("Roanldo", "Winger Forward");