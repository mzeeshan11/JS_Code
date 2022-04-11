console.log('Function in JavaSCript');

////////////////////////////////////////////
// 1-Function Declaration vs. Expression //
//////////////////////////////////////////
console.log('==> Function Declaration vs. Expression');

// There are two ways to define a function in js
// 1-Function Declaration
// 2-Function Expression

// Function Declaration 
function walk() {
    console.log('Walk');
}

// Another way to define function
// Function Expression

// In JS we can declare a variable to be function just like a number, a string, an object etc. 
// In JS function are object so setting the variable to a function is similar to setting an object 

// Anonymous Function Expression
// Anonymous Function doesn't have a name, and set run(variable) to reference that function 
let run = function() {
    console.log('Run Anonymous Function');
};

// and we can call this anonymous function using the reference variable run.
 run();

 // let we declare a new variable move and set it to run. So both move and run are referencing the same anonymous function.
 let move = run;
 // we can also call this anonymous function using other reference that is move
move();

// Named Function Expression
let run1 = function() {
    console.log('Run');
};


////////////////////////////////////////////
////////////// 2- Hoisting ////////////////
//////////////////////////////////////////
console.log('==> What is Hoisting');

// What is the key difference b/w Function Declaration and Function Expression?

// ==> Function Declaraton: we can call this function that is defined using the function declaration syntax, before it is defined.
// ==> Function Expression: we cann't call this function before its define
funDeclaration();
function funDeclaration() {
    console.log('This is Function Declaration');
}

// why we call a function before its definition that is defined using function declaration syntax..?
// ==> Answer: Bcz when a JS engine executes this code, it moves all the function declaration to the top. This is called hoisting.

// What is hoising?
// ==> Answer: Hoisting is the process of moving function declarations to the top of the files. And this is done automatically by JS Engine
// that is executing this code.


////////////////////////////////////////////
/////////////// 3-Arguments ///////////////
//////////////////////////////////////////
console.log('==> Arguements');

// Revision: we learn that is JS once we declare a variable like 'let x =1;' we can change its type to string 'x='change type';' bcz js is dynamic
// This is the charachteristic of a dynamic lanaguage. 
// we have the same concept in the arguments of a function.

function sum(a, b) {
    return a + b; 
}

console.log(sum(4, 5));
// In JS it doesn't matter how many paramter that the function have.
// so if a function has 2 parameter and we pass only 1 argument, so we get output NaN not a number.
// bcz when we pas only 1 argument, the second parameter take argument undefined by default
// ==>  4 + undefined = NaN , its not a valid arthematic ooperation.
// The same thing happens if we don't pass any argument and we don't get a error we get result NaN
console.log(sum(1));
console.log(sum());

// What happend if we pass additional arguments to the function?
console.log(sum(2, 4, 5, 6, 7, 8));
// we get the result the sum of first two argument bcz only first two argument are used 


// If we have no.of parameter in a function? what is the flexibility to pass as many arguments as we want, and get their sum?
// Every function in JS has special object called arguments.

function manyArguments() {
    let total = 0;
    // mostly we can use for..of loop for an array to iterate its element but technically we used for..of loop on any object
    // that has an iterator.
    // Note: The plain object that we create with object literal syntax, they don't have an interator.
    // But that arguments object have an iterator so we can use for..of loop. To iterate this object
    for (let value of arguments)
        total += value;
    return total;
    
    
    // console.log(arguments);
    // let's see the console

    // Here this is the argument Object that if kind of look like an array bur it's not an array, it's an object. Which has key value pair 
    // and the keys we have in this object are indexes of the arguments passed to this function

    // Arguments(5) [1, 2, 3, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    // 0: 1
    // 1: 2
    // 2: 3
    // 3: 4
    // 4: 5
    // callee: ƒ manyArguments()
    // length: 5
    // Symbol(Symbol.iterator): ƒ values()
    // __proto__: Object
}

console.log(manyArguments(1, 2, 3, 4, 5));


////////////////////////////////////////////
/////////// 4-The Rest Operator ///////////
//////////////////////////////////////////
console.log('==> The Rest Operator');


// The Rest Operator(...args) is used if you have a function a varying numbers of parameters.
// when we apply the Rest Operator to a parameter of a function, we can pass a varying number of arguments
// and the rest operator will take all of them and put them in an array
function sumRestOperator(...args) {
    // if we get sum of the numbers in an array, we can use the reduce method
    
    return args.reduce((a, b) => a + b);

    // console.log(args);
    // Here output of the consol is an array of 6 elements. This is the real array
}

console.log(sumRestOperator(1, 2, 3, 4, 5, 6));

// lets take another example: Calculate the total cost of items in a shopping cart, also have discount factor

// we cann't add any paramter after the rest parameter
function sumCost(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(sumCost(0.1, 40, 150));


////////////////////////////////////////////
/////////// 5-Default Parameter ///////////
//////////////////////////////////////////
console.log('==> Default Parameters');


// we can apply default value to parameter of a function.
// Example: write a function for calculating total interest

// if we have default value for rate and year we use following operator techique
// rate = rate || 3.5; ==> if rate has a value, its truthy we're going to use that, otherwise we're going to use 3.5
//  year = year || 5;  ==> we use logical OR || operator to give a default value

// Once you can pass a parameter default value, you should also give all the other parameters after that a default value
// otherwise you get result is NaN
function interest(principle, rate = 3.5, year = 5) {
// function interest(principle, rate = 3.5, year) {
    // with ES6 we can use default value in parameter
    // rate = rate || 3.5; 
    // year = year || 5;
    return principle * rate / 100  * year;
}


// console.log(interest(10000, undefined, 5)); 
console.log(interest(10000)); 
 

////////////////////////////////////////////
/////////// 6-Getter and Setter ///////////
//////////////////////////////////////////
console.log('==> Getter and Setter Method');


// Getter and Setter are special kind of method in JS

// person object with two properties 
const person = {
    firstName : 'Muhammad',
    lastName : 'Zeeshan',
    fullName(){
        return `${person.firstName} ${person.lastName}`;
    }
};


// console.log(person.firstName + ' ' + person.lastName);
// we can achieve above line result by using template literal
console.log(person.fullName());
// console.log(`${person.firstName} ${person.lastName}`);

// Problem: When we are working on an appplication, there are multiple places where we want to display Someone's full name.
// With template lilteral implementation, we'll have to repeat this template literal in multple places..

// Solution: we define a method in the object, call it fullName, and write template literal expression in function body.
// so whenever we want to display a person's full name we simply call that person's method.

// Another Problem: With declaring a person method in the object, the first problem, is that this is read only.
// In other word, we cann't set a person full name from the outside of the object.
// The Other issue is that I cann't call fullName as a property, we only call this like a method

// Solution: we use getter and setter method to solve this problem 
// getter ==> to access properties of an object
// setter ==> to chanhge (mutate) them 

// same above example 
const person1 = {
    firstName : 'Muhammad',
    lastName : 'Zeeshan',
    // to define a getter method we prefix a method with the 'get' keyword, so method is called getter.
    get fullName(){
        return `${person1.firstName} ${person1.lastName}`;
    },
    // define setter method
    set fullName(value){
        // we use split method to split the string in two parts (firstName, lastName) rwhich we assign outside
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

// the value of parameter of setter function is equal to the value of getter which we assign outside 
person1.fullName = 'Zeeshan Adil';


// now we can get fullName as a property
console.log(person1);


////////////////////////////////////////////
///////////// 7-Try and Catch /////////////
//////////////////////////////////////////
console.log('==> Try and Catch');
 
const person2 = {
    firstName : 'Fiaz',
    lastName : 'Ahmad',
    set fullName(value) {
        // if (typeof value !=='string') return;
        // after writing this logic we get result object with the original first name and last name.
        // Sometime we to report an error in our application. That's where we need to throw an exception
        if (typeof value !== 'string')
            // create new error object
            throw new Error('Value is not a string');
        // so in this way we throwing an exception

        const parts = value.split(' ');
        if (parts.length !== 2);
            throw new Error('Please Enter First Name and Last Name');

        // when we throw an expception, the lines after throw statement are not executed. we jumped out the method
        
        this.firstName = parts [0];
        this.lastName = parts [1];
    }
}

// person2.fullName = 'Muhammad Zeeshan';
// In this we define a setter method to access the full name of person out side the object
// So here we use split method to split the value which is a valid string.
// what would be happen if we pass boolean or other type here...? Then we get an TypeError
// onlye string has split method, boolean don't have split method

// if someone want to catch that exception, then we need to catch that, and ofter when we catch an error, we display an error to user.
// we use try and catch for that purpose
try {
    // person2.fullName = true; // ==> TypeError
    // if we passing an empty string
    person2.fullName = ''; // we don't get error but first name is empty and last name undefine
    // so write login again and throw an exception 
}
catch(e){
    console.log(e);
    alert(e);
}

// so we need to add error handling in this case, so in this situation, we should do error handling at beginning
// of a function or a method, this is call defensice programming. 
// So we want to make sure that the values coming in are valid, they're in the right shape, we check this using our logic.
// so we define a login of the first line of method..


console.log(person2);



////////////////////////////////////////////
////////// 8-Local vs Globe Scope /////////
//////////////////////////////////////////
console.log('==> Local vs Globe Scope');


// const msg = 'Hi';

// what when happen if we move msg variable into the code block, we get Uncaught ReferenceError
// msg is not defined. This all about scoping.
{
    const msg = 'Hi';
}
 
// Scope ==> A scope of a variable or a constant, detemines where that variable or constant is accessible.
// So in above, msg is accessible in code block, not outt side of the code block
// console.log(msg);


function start() {
    const message = 'Hello';
    // the scope of this constant is limited to the block in which its defined, we cann't access this constant 
    //outside of the start function.

    // same for if block
    if(true) {
        const another = 'bye';
        // its only accessible in this code block
        console.log(another);
    }
    // same for loop
    for (let i = 0; i <= 5; i++){
        // i is only accessible in this for loop block
        console.log(i);
    }
    // console.log(i); // ==> Uncaught ReferenceError: i is not defined at start 

}

start();

// let we a const outside the code block, so what is the scioe of this?
const color = 'red';
// this const has global scope. Global mean this constant is accessible everywhere, globally

// another function

function stop() {
    const message = 'bye';
    const color = 'Blue';
    // color const is accessiable in all function we have in our programming
    console.log(color);
    
    console.log(color); //==> Blue
    // so local variable or local constant in a function, take precedence over global variabl or const.


}

// the scope of constant 'message' is liemited, to the block in which its defined, 
// so here two variable or const with the same name but different function

stop();



////////////////////////////////////////////
/////////////// 9-Let vs VAr //////////////
//////////////////////////////////////////
console.log('==> Let vs Var');


//

function started() {
    for(let i = 0; i <= 5; i++){
        console.log(i);
    }
    // we know that the scope of i is only accessible inside the block, if we try log i outside this block,
    // we get an error, i is not defined.
    
    // if we remove curly braces, bcz we have single statement, so the scope of i still inside the block.
    for(let i = 20; i <= 25; i++)
        console.log(i);

    // console.log(i); // ==> Uncaught ReferenceError: i is not define at started

    // if we declare variable using var keyword, then the scope of is also accessible outside of the for loop block
    for(var i = 0; i < 5; i++)
        console.log(i);

    // when the codition of for loop is false, and loop terminate, we display i on consol, which is current value of i.
    // This is the issue with var keyword  
    console.log(i)
    // so when we declare a variable with var. It's scope, is not limited to the block in which it's defined. 
    // it's limited to the function in which it's defined

    // var => function scope variable
    // ES6 (ES2015): let, const => block-scoped
} 

started();



// aonther Example:
 function scoping() {
     for(var i = 0; i < 5; i++){
         if (true){
             var color = 'Red';
             // here we define color variable using var, so color is accessible enywhare in the function

         }
     }
     console.log(color);
 }

 scoping();

// Another issue of var keyword with global variable

var col = 'green';
// when we use var outside of the function, this create a global variable and attaches that variable to the window object in browser.
// when we work with front end application we work with window object.

// consol output
// window.col
// "green"


let age = 20;

// when we use let keyword to defined a global variable, to define a variable, 
// that global variable is not attached to the window object.

// consol output
// Window.age
// undefined

// Question: Why is it bad to attach a window to a variable object?
// ==> Answer: bcz window object is something central, there is only one instance of the window object,
// and let's say you're using a third party library. If that third party library also has a variable with the same name, 
// that variable can override your variable. So we should avoid adding stuff to the window object. 

function sayHi(){
    console.log('Hi');
}

// this function is technically a global function and is added to the window object.. so it's also bad pract bcz global function attach to the window object.
// we avoid from global function by using module...which we learn later.




