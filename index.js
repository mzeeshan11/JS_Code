console.log("Hello World..!")


/////////////////////////////
///////// Basics ///////////
////// 1-Variables ////////
//////////////////////////

// we declare variable by using var or let keyword
// we use var keyword to declare the variable before ES6 
// after ES6 we use let keyword to declare a variable and its best practice

let name;
console.log(name);

// by default value of variable in JS is undefined 
// now we intialize variable with name zeeshan

let  myName = 'Zeeshan';
console.log(myName);

// a few rule for variable name

// cannot be reserved keyword 
// should be meaningful
// cannot start with a number 
// cannot contain a space or hyphen (-)
// are case-sensative 

// if we have multiple word in variable name we use camel notation to write variable name

// let firstName;

// we also write multiple variable in single line but the best
//practice is to declare each variable on a signle line  as give below

let firstName = 'Muhammad', lastName = 'Zeeshan';
console.log(firstName + ' '+ lastName);


/////////////////////////////
//// 2-constant variable////
///////////////////////////

// lets take an example

let interestRate = 0.5;
interestRate = 2;
console.log(interestRate);

// the above console we see latest value which is 2. 
// In real world application, there are situation that we don't want the value of a variable to change.
// Bcz otherwise its going to create all kind of bug in our application.

// in this case use a constant instead of variable

const InterestRate = 2.5;
console.log(InterestRate);


/////////////////////////////
/// 3-Primitive data type///
///////////////////////////

// what kind of value we can assign to a variable?

// we have two catergories of types.

// Primitive/Value types & Reference Type
// in the category of primitive we have

// string 
// number
// boolean
// undefind
// null

let namePerson = 'Zeeshan';   //string literal
let age = 22;   // Number Literal
let isApproved = false; // Boolean Literal
let firstNameIs;  // Undefined Literal (if you don't initialize a variable, by default it's value is undefined
let selectSubject = null; //we use null in situation where we want to explicitly clear the value of a variable.

// Note: By default the value of a variable is undefined and it's type is also undefined 


///////////////////////
////Dynamic Typing////
/////////////////////


// JS is dynamic language. What do mean by dynamic?
// there are two types of language, static(statically-typed) and dynamic(dynamically-typed). 
// In static language, when we declare a variable, the type of the
// variable is set and it cannot be changes in the future

// string name = 'JavaScript';

// In dynamic language like JS, the type of a variable can change at
// run time 

let languageName = 'JavaScript';

// let's take an example to understand clearly 

let universityName = 'Education';
let buildSince = 1998;
let isAccepted = true;
let subjectName;
let selectColor = null;

// // Console Practice of the above example

// typeof universityName
// "string"
// // note that the type of the variable is string, if we reassign different value to the variable, like number or boolean, the type of variable will change.
// undefined
// universityName = 2021;
// 2021
// typeof buildSince
// "number"
// // In javascript we don't have two kind of numbers, we don't have floating point number and integer, all number are of type number.
// undefined
// buildSince = 2000.6;
// 2000.6
// typeof buildSince
// "number"
// typeof isAccepted
// "boolean"
// typeof subjectName
// "undefined"
// typeof selectColor
// "object"



////////////////////////
////// 4-Objects //////
//////////////////////



// Reference type

// 1-object
// 2-arrays
// 3-function

// object

// an object in JavaScript and other programming language is like an object in real life.
// Think of a person. A person has name, age, address and so on.
// These are the properties of a person.

// we have the same concept in JavaScript. So when we are dealing with multilpe related variables,
// we can put these variable inside of an object. For example

// have two variable name and age, related the part of representation of a person
// instead of declaring two variables, we can declare the person object.

// let personName = 'Fiaz';
// let personAge = 23;

let personObject = {
    personName: 'Fiaz',
    personAge: 23

} // object litetral
// between curly braces we add key value pair, key are the properties of object

console.log(personObject);

// lets we want to change the properties of person object we have to ways

// dot notation

personObject.personName = 'Fiaz Ahmad';
console.log(personObject.personName);

// bracket notation

personObject['personName'] = 'Zeeshan';
console.log(personObject.personName);

// which approach is better from the above two approaches?
// dot notation is more better. its shorter and cleaner, so should be you default choice


//////////////////////
////// 5-Arrays /////
////////////////////

// Sometime you might be dealing with list of objects.
// For example: 
// list of product in shopping card
// the list of color the user has selected

// so in this case we use array to store that list.

let selectedSubject = ['Cloud Computing', 'Ecommerce']; // array literals
console.log(selectedSubject);

// output
// (2) ["Cloud Computing", "Ecommerce"]
// 0: "Cloud Computing"
// 1: "Ecommerce"
// length: 2
// __proto__: Array(0)

// note that each element has an index, which represent the position of element in that array.
// we can access element by index number

console.log(selectedSubject[1]);

// add element in array
selectedSubject[2] = 'SDA';

// JS is a dynamic language, So the type of objects in the array is dynamic
// also the length of array is dynamic.
// the we can add different type of element in array

selectedSubject[3] = 3;

console.log(selectedSubject);
console.log(selectedSubject.length);


////////////////////////////
//////// 6-Functions //////
//////////////////////////

// function is one of the fundamental building block of JS.
// A function is basically a set of statement that perform a task or calculates a value.

// declaring a function by function keyword

function greet(){
    // body of this function...define logic here
    console.log('Hello Function');
     
}

greet();

// lets do something interesting with function by taking input

function greet1(name, lastName){
    // body of this function...define logic here
    console.log('Hello Function ' + name + ' ' + lastName);
     
}

greet1('Code', 'funk');


// name is the paremeter and code is argument which we are passing
// difference b/w parameters and arguments
// So a parameter is what we have here at the time of declaration but the argument is the actual value of supply
// for that parameter. 

