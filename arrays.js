
//////////////////////////////////
/////// 2-Adding Element ////////
////////////////////////////////
console.log('==> Adding Element');

const numbers = [3, 4, 5];

// here numbers declare as constant, that mean we cann't reassign number to somthing else

// we can modify an array by adding or removing element of an array

// here we learn three modthed to modify element

// ==> end (push method)

// push method add element in the end of the array
numbers.push(9, 10); 
console.log(numbers);

// ==> begninning
// we use unshift method to add an element at the begninning of an array
numbers.unshift(1,2);
console.log(numbers);

// ==> middle
// splice method is use to add an element in the middle of the array
numbers.splice(3, 0, 'a', 'b');
// splice method has three parameters, first is 'start: number', 2nd is 'deleteCount?: numbers'
// third is 'items: number' ==> 
console.log(numbers);

//////////////////////////////////
// 3-Finding Element(permitive) /
////////////////////////////////
console.log('==> Finding Element Permitive');

// Finding Element in an array
// Finding elememt depend on which type we are storing permitive or refernce type

// Finding Element Permitive type 
const numbers1 = [1, 2, 3, 4, 5, 3];
// we pass an element we are looking for, if the element exist in array then indexOf method return indexx of the element
// if doesn't exist then return -1

console.log(numbers1.indexOf('b')); // output: -1
console.log(numbers1.indexOf(5)); // output: 4

// last index method will return the last index of the given element or -1 if it doesn't exist
console.log(numbers1.lastIndexOf(1));
console.log(numbers1.lastIndexOf(3));
console.log(numbers1.lastIndexOf(4));

// check given element exist in the array or not?
console.log(numbers1.indexOf(7) !== -1); // if this expression return true that mean element exist otherwise doesn't exist
// also we can check element using include method in js
console.log(numbers1.includes(4));

// all the method in an array hava a second paramter that is the starting index
// second argument is fromIndex mean that the index from which the search will begin
console.log(numbers1.indexOf(3, 3));


//////////////////////////////////
// 4-Finding Element(Reference) /
////////////////////////////////
console.log('==> 3-Finding Element(Reference)')


const courses = [
    // array has different course object
    {id: 1, name:'Web Engineering'},
    {id: 2, name:'Advance Web'},
    {id: 3, name:'Multi Media'},

]

// includes method which is used to check element in array exist or doesn't so in reference type object the inlcude method doesn't work

console.log(courses.includes({id: 1, name: 'Web Engineering'})); // putput ==> false

const course = courses.find(function(course){
// const course = courses.findIndex(function(course){
    return course.name === 'Multi Media';
});
// });

console.log(course)


//////////////////////////////////
//////// 5-Arrow Function ///////
////////////////////////////////
console.log('==> Arrow Function');

// we use arrow function when we pass a function, as a call back function or as an argument for a different method.

const courses1 = [
    {id: 1, name: 'CC'},
    {id: 2, name: 'HRM'},
];

const course1 = courses1.find(course => course.name === 'CC');
console.log(course1)


//////////////////////////////////
/////// 6-Removing Elements /////
////////////////////////////////
console.log('==> Removing Elements');

const number2 = [1,2,3,4];
// numbers.push() // something add at the end of the array
// Delete at the end
const last = number2.pop();
console.log(number2);
console.log(last);

// numbers.unshift // something add the beginning of the array
// delete at the beginning
const first = number2.shift();
console.log(number2);
console.log(first);

// numbers.splice // adding an element somewhere in the middle
// delete at the  middle
const middle = number2.splice(2, 1);
console.log(number2);
console.log(middle);


//////////////////////////////////
///// 7-Emptying an Array ///////
////////////////////////////////
console.log('==> Emptying an Array');
// Revision for Detail Description


let numbers3 = [11, 12, 13, 14, 15];
// How can we remove all the elements in an array?

// Solution 1 
// simply reassign this  to a new array

 numbers3 = []; 
 console.log(numbers3); 
// this solution work if you don't have any other references to the original array, 
// if you do have multiple references to the original array, then you need to use other solution.

// ==> Answer(watch and read an articld)
 // here note that this old array 'numbers3 = [11, 12, 13, 14, 15];' is  still in the memory


 // Solution 2

numbers3.length = 0;
console.log(numbers3);

// Solution 3

numbers3.splice(0, numbers3.length);
console.log(numbers3);

// Solution 4

while (numbers3.length > 0){
    numbers3.pop();
}
console.log(numbers3); 



//////////////////////////////////
// 8-Combining & Slicing Arrays /
////////////////////////////////
console.log('==> Combining & Slicing Arrays');

const one = [1, 2, 3];
const second = [4, 5, 6];

// combine two arrays
const combine = one.concat(second);
console.log(combine);

// SLice method is used to divide an array in two parts

const slice = combine.slice(2, 4);
// const slice = combine.slice(2); // output ==> get all the element starting from 2 
// const slice = combine.slice(); // output ==> get a copy of original array
console.log(slice);

// how to combine an array which has reference type element?
// watch again and google it


//////////////////////////////////
///// 9-The Spread Operator /////
////////////////////////////////
console.log('==> The Spread Operator');


// spread operator is use to combine two array, its modern JS ES6 operator


const three = [11, 12, 13];
const four = [14, 15, 16];

// when we spread an array, all its element returned by individually
// so here we are declaring a new array 'combined' and in that array we're adding 
// individual element of the first 'three' and second 'four' array  
const combined = [...three, ...four];

// spread operator has more flexibility, using spread operator we can add an element
// in between both two array, also we can add something at the end and start
 const combined1 = ['a', ...three, 'b', ...four, 'c'];

 // if we can slice method without an argument, this will return a copy of the original array
//  const copy = combine.slice(); 
 // this will achieve  same using spread operator
 const copy = [...combined1]; 

console.log(combined);
console.log(combined1);
console.log(copy)


//////////////////////////////////
///// 10-Iterating an Array /////
////////////////////////////////
console.log('==> Iterating an Array');

const even = [2, 4, 6, 8, 10]

// to iterate an array we uese For...of loop

for (let number of even)
    console.log(number);

// alternate way (for each method)
// all the arrays have forEach method that's take a call back function

// when we call this forEach method, this function will be executed for each element of the array
// each element will be passed as an argument to this function.

console.log('Using forEach method');
even.forEach(function(number){
    console.log(number);
});

console.log('Using Arrow function');
even.forEach(number => console.log(number));
// we can also pass second parameter in the parathesis 
even.forEach((number,index) => console.log(index, number));

  
//////////////////////////////////
/////// 11-Joining Arrays ///////
////////////////////////////////
console.log('==> Joining Arrays');

const subject = [1, 2, 3, 4]
// join method has a parameter  called separater which has type string, its optional
// this join method return the string value
const subject1 = subject.join(',')

console.log(subject);
console.log(subject1);

// splite method
// this method is not a part of array, its part of string
// split message split a string into an array

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);

// Each element in array is a word, now we combine these element using join method,
// to combine these elements using a separator

const combineParts =  parts.join('-');
// we use hyphen to join these word, this teachnique particular useful when building a URL slugs.
console.log(combineParts);


//////////////////////////////////
/////// 12-Sorting Array ////////
////////////////////////////////
console.log('==> Sorting Array');

const arr = [1,32, 111, 25, 19, 15, 22, 17, 2, 11, 18,,17, 8];
console.log(arr.sort());

// this lesson learn from javascript.info


//////////////////////////////////
// 13-Tesing Element of an Array/
////////////////////////////////
console.log('==> Testing the element of an array');

// Modern js has two new method called every and some

const arr1 = [1, -2, 3, 4];

// check all the numbers in array are positive
// this method will run callback function on every element in this array, as soon as it find an element
// that doesn't match the ceriteria of the expression 'return value >= 0;', its going to stop searching
const allPositive = arr1.every(function(value){
    return value >= 0;
})

console.log(allPositive);


// to resolve above problem  we use sum method and that checks to see if we have at least one element in this array
// that matches ceriteris of the expression 'return value >= 0;'
const atLeastOnePositive = arr1.some(function(value){
    return value >= 0;
})

console.log(atLeastOnePositive);

// every ==> checks to see if every element in a given array matches the certeria 'console.log()'
// some ==> checks to see if we have at least one element that matches the given certeria 'console.log()'


//////////////////////////////////
///// 14-Filtering an Array /////
////////////////////////////////
console.log('==> Filtering an Array');

// Fitering array
// return only positive number

const arr2 = [1, 2, 3, 4, 5, -6, -7];
const filtered = arr2.filter(function(value){
    return value >= 0; 
})

console.log(filtered);

// arrow function

// const filtered1 = arr2.filter(value => value >=0);
// by using abbreviation like v for value, or n for numbers, our code more shorter and clearne
const filtered1 = arr2.filter(v => v >=0)
console.log(filtered1);


//////////////////////////////////
////// 15-Mapping an Array //////
////////////////////////////////
console.log('==> Mapping an Array');

// Map is the very useful and power method in modern JS.
// Map method is is use to map each element in an array, into something else.

// with this method we can map each item in the array to something else.
// let's take an example: we want to construct html markup, using the element in this array.
// so we use filter function. 
const arr3 = [1, 2, 3, 4, 5, -6, -7];

const filtered2 = arr3.filter(v => v >=0)
const item = filtered2.map(n => '<li>' +  n + '</li>')

console.log(item);

// Now we have an array of strings, we can use join method to join the element of the array and create a string

const html = item.join();
// add <ul>
const html1 = '<ul>' + item.join('') + '</ul>'; // get s
console.log(html);
console.log(html1);

// map with objects

// const mapObject = arr3.map(n => {
//     const obj = {value: n};
//     return obj;
// })
// console.log(mapObject);

// const mapObject = arr3.map(n => {value: n}); // ==> here the result is three undefined elements
// The reason for this result is by default these {} in an arrow function, represent a code block.
// So when JS engine tries to parse this arrow function it thinks here we are defining a code block as opposed an object to return.
// so if we return an object in arrow function, we need to put that object in parathesis ().
const mapObject = arr3.map(n => ({value: n}));

console.log(mapObject);

// chaining concept ==> learn later






