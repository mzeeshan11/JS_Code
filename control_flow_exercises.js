////////////////////////////
///10-Max of Two Numbers///
//////////////////////////

// Write a function that takes two numbers and returns the maximum of the two

function maxNumber(x, y){
    // 1
    // if (x > y){
    //     console.log('Max Number is ' + x);
    // }
    // else{
    //     console.log('Max Number is ' + y);
    // }
    
    // 2
    
    // if (x > y ) return x;
    // return y;

    // 3
    return (x > y) ? x:y;

}

// maxNumber(5, 8);
// let number = maxNumber(5, 8);
console.log(maxNumber(12, 45));


////////////////////////////////////////
//11-Exercise - LandScape or Portrait//
//////////////////////////////////////


function imageType(width, height){
    if (width > height)  console.log('Image is LandScape');
    else console.log('Image is Portrait')
}

imageType(1080, 580);

// another
function isLandscape(width, height){
    return (width > height)
}
console.log(isLandscape(300, 600 ))


/////////////////////////////
///11-Exercise - FizzBuzz///
///////////////////////////

// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 & 5 => FizzBuzz 
// Not divisibe by 3 or 5 => input
// Not a number => 'Not a number'

console.log('1-First Method');

function FizzBuzz(input){
    if (typeof input !== 'number'){
        console.log('Not a Number');
    }
    else if (input % 15 === 0){
        console.log('FizzBuzz');
    }
    else if (input % 3 === 0 ){
        console.log('Fizz');
    }
    else if  (input % 5 === 0){
        console.log('Buzz');
    }
    else if (input % 15 !== 0 && input % 3 !== 0 && input % 5 !== 0){
        console.log(input);
    }
}

FizzBuzz('jf');

// Another 
console.log('2-Second Method');

function FizzBuzz1(input){
    if (typeof input !== 'number') console.log('Not a Number');
    else if (input % 15 === 0) console.log('FizzBuzz');
    else if (input % 3 === 0 ) console.log('Fizz');
    else if  (input % 5 === 0) console.log('Buzz');
    else if (input % 15 !== 0 && input % 3 !== 0 && input % 5 !== 0) console.log(input);
}


FizzBuzz1(30)

// Another

console.log('3-Third Method');

function FizzBuzz2(input){
    console.log(((input % 3)? '':'Fizz')+((input % 5)? '':'Buzz') || input);
}

FizzBuzz2('skjb');

// Solution by Mosh

console.log('4-Fourth Method');

let output = FizzBuzz3("9")
console.log(output)

function FizzBuzz3(input){
    if (typeof input !== 'number') 
        return 'Not a Number';
    
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';
    
    if (input % 3 === 0 ) 
        return 'Fizz';
    
    if  (input % 5 === 0) 
        return 'Buzz';
    
    return input;
}

/////////////////////////////////
//13 -Exercise - Demerit Points//
///////////////////////////////

// Speed Limit = 70 => normal speed
// 5 -> 1 point 
// 12 points -> Suspended

// tip => Math.floor(1.3)

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint)
        console.log('OK')
    else{
        const point = Math.floor((speed - speedLimit) / 5);
        if (point < 15 )
            console.log('Points: ' + point);
        else
            console.log('License Suspended');
    }
}

checkSpeed(77)


//////////////////////////////////////
//14-Exercise - Even and Odd Number//
////////////////////////////////////

function showFunction(limit){
    for (let i = 0; i <= limit; i++){
        // if (i % 2 === 0) console.log(i, 'Even');
        // else console.log(i, 'Odd');
        const message = (i % 2 === 0 )? "EVEN":"ODD";
        console.log(i, message)
    }
}

showFunction(10);

/////////////////////////////////
///15-Exercise - Count Truthy///
///////////////////////////////

// Pending ....