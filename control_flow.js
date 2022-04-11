
// in js two type of conditional statement
// if...else
// switch...case

//////////////////////////////////
///////// Control Flow //////////
///////  1-if......else ////////
///////////////////////////////
console.log('===1-if......else===');

// display message according to hourn we need to use condition
// if hour is between 6am and 12 pm : good morning
// if it is between 12pm nd 6pm: good after noon
// otherwise: good evening

// structure

// if (condition){
// }
// else if (AnotherCondition){
// }
// else if (yetAnotherCondition){
// }
// else{
// }

let hour = 10;

if (hour >= 6 && hour < 12){
    console.log('Good Morning');
}
else if (hour >= 12 && hour < 18){
    console.log('Good Aftrernoon');
}
else{
    console.log('Good Evening');
}


//////////////////////////////////
/////// 2-Switch.....case ///////
////////////////////////////////
console.log('===2-Switch.....case===');

let role = 'guest';

// in switch case instead of adding codition in parenthesis we add a variable

switch (role) {
    case 'guest':
        console.log('Guest User');
        break; // break is use to jump out this switch block, if we don't add break, other statement will be executed 

    case 'moderator':
        console .log('Moderator');
        break;
    default:
        console.log('Unkown User');
}

if (role === 'guest') console.log('Guest User');
else if( role === 'moderator') console.log('Moderator');
else console.log('Unkown User');

let personRole = 'admin';

switch (personRole){
    case 'guest':
        console.log('User is Guest');
        break;
    case 'moderator':
        console.log('User is Moderator');
        break;
    case 'admin':
        console.log('User is Admin');
        break;
    default:
        console.log('Unknown User');
}


//////////////////////////////////
/////// 3-For......loop /////////
////////////////////////////////
console.log('===3-For......loop===');

// loop use to repeat an action number of times.
// we have 5 loop is JS
// 1-For   2-While     3-Do..While    4-for..in    5-for..of 

// Structure of for loop
// for (initialExpression; condition; incrementExpression){
//     statement 
// }

for (let i = 1; i <= 5; i++) {
    // console.log('Hello World', i);
    // print odd number
    if (i%2 !== 0) console.log('Hello World', i);
}
// print reverve number from 10 to 0
for (let i = 10; i >0; i--){
    if (i%2 !== 0)console.log(i)
}

//////////////////////////////////
/////// 4-While.....loop ////////
////////////////////////////////
console.log('===4-While.....loop===');

// One key difference bteween a while loop and for loop is that
// in for loops the loop variable is part of the loop variable itself
// but in while loop, we have to declare this variable externally.

let i = 0;
while (i <= 5){
    if (i%2 !== 0)console.log(i);
    i++
}


//////////////////////////////////
///// 5-Do-While.....Loop ///////
////////////////////////////////
console.log('===5-Do-While.....Loop===');

// let x = 9;
let x = 0;
do{
    if (x%2 !== 0)console.log(x);
    x++
} while(x <= 3);

// What is the difference between while and do-while loop?
// Do-while loop are always executed at least one. Even if this
// condition evaluated to false


//////////////////////////////////
////// 6-Infinite.....Loop //////
////////////////////////////////
console.log('===6-Infinite.....Loop===');

// Infinite loop repeat forever time, you should be aware of all time.
// if accidentally create one of these loop, you're going to crash 
// your browser or your computer

// let i1 = 0;
// while(i < 5){
//     console.log(i1);
//     // i++
// }

// another examples
 
// while (true){
// }

// do{
//     // i1++
// } while(i1 < 5);

// for (let i = 0; i>0; i++)
// for (let i = 0; i < 10; )


//////////////////////////////////
////// 7-For..In...Loop /////////
////////////////////////////////
console.log('===7-For In...Loop===');

// we learn three kind of loop in JS
// 1-for
// 2-while
// 3-do-while

// we have two more kind of loop JS
// 4-for in
// 5-for of

// we use them to iterate over the properties of an object 
//or element in an array

const person = {
    name: 'Zeeshan',
    age: 22
};

for (let key in person)
    console.log(key, person[key]);

// two wasy two access the properties of an object

// Dot notation

// Bracket Notation 
// => we use bracket notation when we don't know at the time of writing code, 
// what property we're going to access

const subject = ['EC','CC','SDA'];
    
for (let key in subject)
    console.log(key, subject[key])


const colors = ['red', 'blue', 'green'];

for (let index in colors)
    console.log(index, colors[index]);


//////////////////////////////////
//////// 8-For of...Loop ////////
////////////////////////////////
console.log('===8-For of.....loop===');

const colors1 = ['red', 'green', 'blue'];
 
for (let color of colors1)
    console.log(color);

// using  new for of loop we don't have to deal with index. we deal with element of the array.
// loop variable will hold one of the items in this array.

// for in loop vs for of loop
// we use for in loop to iterate over the properties of an object 
// and for of loop to iterate the elements or items of an array 


//////////////////////////////////
///// 9-Break and Continue //////
////////////////////////////////
console.log('====9-Break and Continue===')

let b = 0;
while(b <= 10){
    // when we need to jump out of a loop for some reason we use break keyword to jump
    if (b === 5) break; // loop break  after 5 iteration
    if ( b % 2 === 0 ){
        b++;
        continue;
    }
    console.log(b);
    b++
}
// break vs continue keyword
// with break keyword we jump out of a loop, and with continue keyword, we jump to the next iteration.

let y = 0;
while (y <= 10){
    // if (y === 5) break;
    if (y%2 ===0){
        y++;
        continue;
    }
    console.log(y);
    y++;
}

console.log('=====================')

for  (i = 0; i <= 50; i++){
    if (i%4 !== 0){
        i++;
        continue;
    }
    console.log(i);
    i++;
}