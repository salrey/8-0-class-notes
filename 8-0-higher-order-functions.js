//Higher Order Functions codeAlong
//September 1, 2021


//Regular functions
function go(goLeft = true) {
    return goLeft ? "left" : "right";
};

// console.log(go(false)); //> 'right'

function left() {
    return "Left";
}

function right() { 
    return "Right";
};

//Higher order function 
function go(goLeft = true) {
    return goLeft ? left : right;
};

console.log(go(false)) //> right function
console.log(typeof go(false)) //> function

//Functions as values 
const arrayOfNum = [1,2,3]
const stringVal = "I am string"
const arrayOfObj = [{},{},{}]

function sayHello() {
    console.log("Hello!");
}

const helloArr = []

helloArr.push(sayHello);
helloArr.push(sayHello);
helloArr.push(sayHello);

console.log(helloArr) //> function: sayHello x3 //> Hello!, Hello!, Hello!

//traverse array using loop and then invoke it

for (let i = 0; i < helloArr.length; i++) {
    let element = helloArr[i]
    element(); 
    //element here is a sayHello function so we invoke it when we store it as a variable
    //You can technically invoke a function without putting it in a variable, 
    //but it’s not very common to need to do so.
}

console.log(helloArr); //> function: sayHello x3

//declarative function
function happyFunc() {
    console.log('I am happy')
}
console.log(happyFunc()) //> I am happy //> return undefined

//expression - storing the function to a variable makes it an expression
const happyFunction = function () {
    console.log("I'm still happy")
}

console.log(happyFunction()) //> I'm still happy //> It'll show up as undefined as well because that's the return value

//How to invoke the inner function 
function outer() {
    //Because of scope we can't access this inner function, it'll return undefined
    function inner() {
      return "I'm the inner function!";
    }
  
    return inner; // unless this is inner(), you will not invoke the inner function
    //because we just want to use the inner function as a return value 
    //in order to invoke inner function we need to set outer() in a variable and then invoke that variable
  }

// console.log(inner()) //> inner is not defined because of scope

console.log(typeof outer());  //> function // this doesn't invoke the inner function

console.log(outer()) //> function outer()

//To invoke inner function: 
console.log(outer()()) //> I'm the inner function!
//OR
let first = outer()
console.log(first) //> function inner
let second = first()
console.log(second) //> I'm the inner function

// Function as parameter
function go(goLeft = true, leftFunc, rightFunc) {
    return goLeft ? leftFunc : rightFunc;
};

// console.log(go(false, left, right())()); //> go(...) is not a function because you can't invoke a string "Right"
console.log(go(false, left, right)()); //> Right //> Here's it'll return the function and then invoke it ()

//Higher Order Function as a wrapper function- function taking in an argument as a function 
function whatHappened(fn) {
    const result = "Four nations lived..." 
    //taking the function value parameter and then invoke in the result 
    fn(result);
}
//Not a higher order function, 
function logger(text) {
    console.log("LOGGING: ", text)
}

//here we will invoke logger function in the whatHappened function via parameter => fn(result)
console.log(whatHappened(logger)); //> LOGGING: Four nations lived... //>returning undefined 

//Callback function 
function saysHi(name) {
    console.log('Hi', name);
}

function saysBye(name) {
    console.log('Bye', name);
}

function callsWithName(name, sayHiOrBye) {
    //Callback function (it'll take in a function as an argument)
    sayHiOrBye(name)
}

callsWithName("Felicia", saysHi); //> Hi Felicia
callsWithName("Felicia", saysBye); //> Bye Felicia 