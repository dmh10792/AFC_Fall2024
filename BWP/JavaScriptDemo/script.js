//console.log("I made it!")
let animal1 = "dog";
let animal2 = "cat";
let animal3 = `${animal1} ${animal2}`;//String autoformatting

//console.log(animal3);

function myFunc(one, two, condition) {
    if(condition) {
        console.log(`${one} ${two}`);
    } else {
        console.log(`${two} ${one}`);
    }
}

//myFunc("one", "two", true);
//myFunc("one", "two", false);

for(let count = 1; count <= 5; count++) {
    console.log(count);
}