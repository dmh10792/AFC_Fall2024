//an array of strings
let dogs: string[] = ["Husky", "Pug", "Shiba-Inu"];
let numbers: number[] = [22,14,34];
let objArray: object[] = [];//an array of objects
let movieArr: any[] = [];//initializes it as array of any object

/*
Functions
1 - data types for params and args
2 - data types for returned values
*/
const getAge = (num: number, fname: string = "Nerd"): number => {//function with typed parameters and the return type declared
    return num * 4;
}

let result = getAge(2);
console.log(result);

