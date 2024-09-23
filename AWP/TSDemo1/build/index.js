//an array of strings
let dogs = ["Husky", "Pug", "Shiba-Inu"];
let numbers = [22, 14, 34];
let objArray = []; //an array of objects
let movieArr = []; //initializes it as array of any object
/*
Functions
1 - data types for params and args
2 - data types for returned values
*/
const getAge = (num, fname = "Nerd") => {
    return num * 4;
};
let result = getAge(2);
console.log(result);
