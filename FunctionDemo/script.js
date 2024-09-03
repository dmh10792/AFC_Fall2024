
// function greeting() {
//     console.log("Hello Nerd");
// }
// greeting();

function rectangleArea(length = 5, width = 5) {
    return length * width;
}

let result = rectangleArea();
// console.log(rectangleArea());//uses the default values
// console.log(rectangleArea(4));// gives the argument to the first parameter
// console.log(rectangleArea(undefined, 6));//gives the argument to the second parameter

//Anonymous function
// (function () {
//     console.log("Anonymous");
    
// })()//create an anonymous function and call immediately

//named function
function pluralize(element){
    console.log(element + "'s");
}

//let animals = ["dog", "cat", "guinea pig"];

//animals.forEach(pluralize);//it already knows its going to be a function so you dont have to invoke it with ()

//fat arrow functions
let fatGreeting = () => {
    console.log("HELLO");
    
}

//fatGreeting();

// let area = (length = 4, width = 4) => {
//     return length * width;
// }

// let area = (length, width) => length * width

let area = (length = 2, width = 2) => (
    length *= 2,
    length * width
)

console.log(area());

// let greeting = (arg) => {
//     return `Hello, ${arg}`;
// }

let greeting = arg => `Hello, ${arg}`;//for a single argument () are not needed

console.log(greeting("Nerd"));
