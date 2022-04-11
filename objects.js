

//////////////////////////////////
/////// 2-Switch.....case ///////
////////////////////////////////

// Object are collection of key value pair, so if you have properties that are highly related,
// we want to encapsulate them inside of an object.

// let's take an example of different kind of shape
// Shape have different variable like circle has different radius, x, y etc,
// all these variable are highly related, they represent circle.

// so instead declaring all these variable one by one we have better approach is to 
// put these variable inside of an object.


const circle ={
    radius : 1,
    // the value of property of an object can be any type in JS, it can be a number, a string, a boolean,
    // null, undefined, it can even be another object. or an array, or a function. let's show

    // now i'm defining a key 'location' and set its value to another object.
    location : {
        x: 1,
        y : 1
    }, 
    isVisible : true,

    // why we declare an object?
    // the purpose of an object is to group related variable
   
    // also we can add function in an object
    draw : function() {
        console.log('draw');

    }
};

// as I learned early we can access the properties of an object using dot notation

circle.draw(); // method

// the above all of the code is refer to as object oriented programmig (oop)
// oop is basically is a style of programming where we see a program as a collection of objects
// that talk to each other to perform some functionality.

// note: if oop programming if a function is a part of an object, we call the function a method.
// So the difference b/w a function and a method, if a function is part of an object, in oop term,
// we refer to that function as a method.



//////////////////////////////////
/////// 2-Factory Function //////
////////////////////////////////

// problem: if we have two object those have the same or duplicate method method which have multiple
// line of code. and we don;t want to repeat all these lines of code, bcz if you have a bug in this 
// method, then we will have to fix it in multiple places.

// to resolve this problem we use factory or constructor method

// factory function

// Just like a factory producing products, these factory function produce objects.

function creatCircle(radius) {
    // const circle = 
    return {
        // we can pass the value of radius by passing radius as a parameter in the function.

        // radius : radius,
        // ==> by using modern JS we can make over code shorter
        // ==> so in modern JS if our key and value are the same we can make our shorter by removing a value
        // ==> and simply adding the key
        radius,
        // ==> now the draw method also have a shorter syntax to define draw mehod
        draw(){
            console.log('draw');
        },
        // draw : function() {
        //     console.log('draw');
        // }
    };
    // ==> Now return the circle object
    // ==> Note: here we don't need circle constant defined bcz we are not going to referencing it anywhere.
    // ==> we only want to return it... 

    // return circle; // we can make our code shorter by removing circle constant and simply returning obect.

}

const circle1 = creatCircle(1);
console.log(circle1);

const circle2 = creatCircle(5);
console.log(circle2);


//////////////////////////////////
///// 3-Constructor Function ////
////////////////////////////////

// Constructor Function
// The purpose of constructor function is to construct or create an object.
// Naming convention: In constructor function we use Pascal notation 

// Camel Notation: oneTwoThree (In camel notation the first letter of the first word is lower case, 
// after first word every letter of every word is in uppercase)
// Pascal Notation: OneTwoThree (The first letter of every word should be uppercase)

function Circle(radius) {
    // Factory function we return an object while in constructor function we use different approach to initialize an object.
    // we use this keyword
    // 
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

// creating circle object
const mycircle =  new Circle(4);
// What happening here.....
// when we use new operator, 3 things happen. This new operator creates an empty object
// then this keyword we access radius and draw method in this new object
// finally, this new operator will return new object from function Circle



// factory function
function person(firstName, lastName) {
    const person = {
        firstName : firstName,
        lastName : lastName,
    };
    return person;
}

const person1 = person('Muhammam', 'Zeeshan');
console.log(person1); 


//////////////////////////////////
/// 4-Dynamic Narue of Objects //
////////////////////////////////

// object in js is dynamic which mean once you create them you can always add new property or method,
// or removing existing ones


const mycircle1 = {
    radius : 1
};

// add new property in an object

mycircle1.color = 'green';

// also can add new method
mycircle1.draw = function() {

}

// delete existing propert or method

delete mycircle1.radius;
delete mycircle1.draw;
console.log(mycircle1)


//////////////////////////////////
///// 5-Consructor Property /////
////////////////////////////////

