//////////////////////////////////
////////// Operators ////////////
//// 1-JavaScript Operators ////
///////////////////////////////
console.log('1-JavaScript Operators')

// operators use along with variables and constant to create expression
// And with these expression we can implement logic and algorithm.
// operators variables => Expression => Algorithm/login

// In JS we have 

// 1-Arithmetic    
//2-Assignment    
//3-Comparison    
//4-Logical   
//5-Bitwise


//////////////////////////////////
///// 2-Arithmetic Operators/////
////////////////////////////////
console.log('2-Arithmetic Operators')

let x = 20;
let y = 40;

console.log(x + y); // here is the edition operator, x+y refer to an experssion in JS. So experssion is something that produces a value
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y); // exponentiation 

// tricky operator 

// Increment (++)
console.log(++x) // if ++ operator add before x, value incremented 1 first then will be see on the console.
console.log(x++) // if we put ++ after x will see x on the console first and then the value of x will incremented by 1
console.log(x) // outout=>21

// Decrement (--)
// same work as incremen operator
console.log(--x)
console.log(x--)
console.log(x)


//////////////////////////////////
///// 3-Assignment Operators ////
////////////////////////////////
console.log('3-Assignment Operators')

// assignment operator is to use assign value 

let a = 13; 

// a++; this increment operator increase the value of by 1
// a++; is exactly equivlant a = a + 1;
// if we want to increment by 5 then this ++ operator will not work
// we will use += operator

a = a + 5;
a += 5;
// both above experssion are same
a = a * 4;
a *= 4;

 
//////////////////////////////////
///// 4-Comparison Operators ////
////////////////////////////////
console.log('4-Comparison Operators')

// to use comparsion of variable with something else.

let c = 40;

// Relational operators
console.log(c > 20);
console.log(c >=40);
console.log(c < 22);
console.log(c <= 45);

// Equality operators
console.log(c === 40);
console.log(c !== 40);


//////////////////////////////////
////// 5-Equality Operators /////
////////////////////////////////
console.log('5-Equality Operators')

// Strict Equality (check type and value both)
console.log( 31 === 31);
console.log('1' === 1); // get False

// Lose Equality (check value), does care about the type matching 
console.log( 31 == 31);
console.log('1' == 1); // get True
console.log(true == 1); // get True

// if the type don't match, it will convert the type 
// what we have on the right side to match what we have on the left side


//////////////////////////////////
////// 6-Ternary Operators //////
////////////////////////////////
console.log('6-Ternary Operators')

// if a customer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

let points = 120;
let type = points > 100 ? 'gold' : 'silver'; // ternary or conditional operators
// if the codition is ture, return first value gold , otherwise, return silver

console.log(type);


//////////////////////////////////
////// 7-Logical Operator ///////
//////////////////////////////
console.log('7-Logical Operators')

// we use these operator to make decision based on multiple condition.
// type of logical operators
// Logical And 
// Logical Or
// Logical Not  

// Logical AND (&&)
// Return TRUE if both operands are TRUE

console.log(true && true);

// approval of loan application
// if applicants has high income and a good credit score, then they will be eligible

let high_income = true;
let good_credit = true;
let eligibleForLoan = high_income &&  good_credit;
console.log('Eligible', eligibleForLoan);

// Logical OR (||)
// Return TRUE if one of the operands is TRUE


// Logical NOT (!)

let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);


//////////////////////////////////
/// 8-Logical Operators with NB//
////////////////////////////////
console.log('8-Logical Operators with NB')
console.log('Logical Operators with NB is pending ');

//////////////////////////////////
/////// 9-Bitwise Operator///////
////////////////////////////////
console.log('9-Bitwise OperatorB')
console.log('Bitwise Operator watch for later');


///////////////////////////////
/// 10-Operator Precedence ///
/////////////////////////////
console.log('10-Operator Precedence');

// let cal = 2 + 3 * 4; => 14, 3 x 4 expression is evaluated first bcz multiplication
// has higher precedant.
// JS has many operators, its really hard to memorize precedants of all these operator
// so we use parenthesis while working on a complex experssion

console.log('Operator Precedance')
let cal = (2 + 3) * 4;

console.log(cal);


///////////////////////////////
///////// 12-Exercise ////////
/////////////////////////////
console.log('12-Exercise');

// swaping two variable

let v1 = 'blue';
let v2 = 'red';

let v3 = v1;

v1 = v2;
v2 = v3;


console.log('v1 =>', v1);
console.log('v2 =>', v2);


let p1 = 5;
let p2 = 10;

let p3 = p1;

p1 = p2;
p2 = p3;

console.log('p1 =',p1);
console.log('p2 =',p2);
