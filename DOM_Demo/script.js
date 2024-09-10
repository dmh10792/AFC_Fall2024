//alert("Connected")

/*
Methods to select elements from an HTML document and dosomething with them.
*/
let food = document.getElementById("fruit");
console.log(food);

food.style.color="red";//changing the style of an element 
food.style.border="blue ridge 5px";
//food.style.display="inline";

let food2 = document.getElementsByClassName("breakfast");
console.log(food2[0]);

let food3 = document.getElementsByTagName("li");
//console.log(food3[1]);

console.log(food3[1].textContent);
food3[1].textContent = "Sold Out";//changing values

let food4 = document.querySelector(".breakfast");
console.log(food4);

let food5 = document.querySelectorAll("h1");
console.log(food5[1]);

let ul = document.querySelector("ul");
console.log(ul);

let li = document.querySelector("li");
li.innerHTML = "Chocolate <b>Cake</b>";

let href = document.querySelector("a").getAttribute("href");
console.log(href);

document.querySelector("a").setAttribute("href", "https://amazon.com");

let input = document.querySelectorAll("input");
//console.log(lInput);

// input.setAttribute("type", "password");
// input.setAttribute("placeholder", "password");

let submitButton = document.querySelector("button[type='submit']");
submitButton.addEventListener("click", (event) => {//adding an event listener with an anonymous fat arrow function
    event.preventDefault();//prevents the default behavior for the event object that is passed in
    // let fname = input[0].value;
    // let lname = input[1].value;
    // let age = input[2].value;
    //console.log(`${fname} ${lname} is ${age} years old.`);
    let person = {
        fname: input[0].value,//if the variable and the key name have the same name you can do this
        lname: input[1].value,
        age: Number(input[2].value)
    }
    console.log(person);
    let strPerson = JSON.stringify(person);
    console.log(strPerson);
    
    input[0].value = "";
    input[1].value = "";
    input[2].value = "";
});

let resetButton =  document.querySelector("button[type='reset']");
resetButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("You done goofed");
    input[0].value = "";
    input[1].value = "";
    input[2].value = "";
})



