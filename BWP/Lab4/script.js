
let menuItems = [
    {
        name: "CheeseBurger",
        description: "Your basic cheeseBurger with options for toppings and extra patties.",
        price: 7.99,
        imgUrl: "assets/menuImages/cheeseburger.webp"
    },
    {
        name: "Fries",
        description: "Our homemade seasoned fries.",
        price: 2.99,
        imgUrl: "assets/menuImages/fries.webp"
    },
    {
        name: "Milk Shake",
        description: "Our handcrafted milkshakes wit multiple flavor options.",
        price: 4.99,
        imgUrl: "assets/menuImages/milkShake.webp"
    },
    {
        name: "HotDog",
        description: "An all beef hotdog with a bun.",
        price: 3.99,
        imgUrl: "assets/menuImages/hotDog.jpg"
    },
    {
        name: "Fried Oreos",
        description: "Deep fried oreos coated with powdered sugar.",
        price: 3.99,
        imgUrl: "assets/menuImages/oreos.avif"
    }
];

let itemCounter = 0;
let currentMenuItem = menuItems[itemCounter]; //create a variable for the current menu item and set it to the first one

let prevImage = (card) => {
    itemCounter--;
    if(itemCounter < 0) {
        itemCounter = menuItems.length - 1;
    }
    currentMenuItem = menuItems[itemCounter];
    //set values
    card.querySelector(".card-title").textContent = currentMenuItem.name//set the name
    card.querySelector(".card-text").textContent = currentMenuItem.description//set the description
    card.getElementsByClassName("text-body-secondary")[0].innerText 
        = new Intl.NumberFormat('en-US', {style: "currency", currency: "USD"}).format(currentMenuItem.price); //set the price 
    card.getElementsByClassName("img-fluid")[0].src = `../${currentMenuItem.imgUrl}`;    
    card.getElementsByClassName("img-fluid")[0].alt=`${currentMenuItem.name}`;
}

let nextImage = (card) => {
    itemCounter++;
    if(itemCounter > menuItems.length - 1) {
        itemCounter = 0;
    }
    currentMenuItem = menuItems[itemCounter];
    //set values
    card.querySelector(".card-title").textContent = currentMenuItem.name//set the name
    card.querySelector(".card-text").textContent = currentMenuItem.description//set the description
    card.getElementsByClassName("text-body-secondary")[0].innerText 
        = new Intl.NumberFormat('en-US', {style: "currency", currency: "USD"}).format(currentMenuItem.price); //set the price 
    card.getElementsByClassName("img-fluid")[0].src = `../${currentMenuItem.imgUrl}`;
    card.getElementsByClassName("img-fluid")[0].alt=`${currentMenuItem.name}`;
}

//to load the values and functions into the menu card
let loadMenu = () => {
    //get menu card
    let card =  document.getElementById("menu-card");

    //set initial values
    card.querySelector(".card-title").textContent = currentMenuItem.name//set the name
    card.querySelector(".card-text").textContent = currentMenuItem.description//set the description
    card.getElementsByClassName("text-body-secondary")[0].innerText 
        = new Intl.NumberFormat('en-US', {style: "currency", currency: "USD"}).format(currentMenuItem.price); //set the price 
    card.getElementsByClassName("img-fluid")[0].src = `../${currentMenuItem.imgUrl}`

    card.getElementsByClassName("img-fluid")[0].style.width="400px";
    card.getElementsByClassName("img-fluid")[0].style.height="300px";
    card.getElementsByClassName("img-fluid")[0].alt=`${currentMenuItem.name}`;

    //set buttons
    let prevButton = card.getElementsByTagName("button")[0];
    let nextButton = card.getElementsByTagName("button")[1];

    prevButton.addEventListener("click", (event) => {
        prevImage(card);
    });

    nextButton.addEventListener("click", (event) => {
        nextImage(card);
    });
}

let buttons = document.querySelectorAll("button");
let submitButton = buttons[1];
let input = document.querySelectorAll("input");
let mInfo = document.querySelector("textarea");
let counter = document.getElementById("character-counter");

//set form attributes
mInfo.rows = 4;
mInfo.placeholder="Enter more information about yourself (30 character max).";
mInfo.maxLength=30;
input[2].placeholder="111-222-3333";

mInfo.onkeyup = () => { //dynamically change the value of the text counter
    counter.innerHTML = `${30 - mInfo.value.length} characters left`;
}

let validateForm = () => {
    let age = input[7].value;
    let phone = input[2].value;
    let formValid = true;
    
    /*
    Age
    */
    if(isNaN(age)){
        alert("Please enter a valid number for the age.");
        formValid = false;
    } else if(age<21 || age>99) {
        alert("Employees must be at least 21 and cannot be older than 99.");
        formValid = false;
    }

    /*
    Phone Number
    */
   if(!phone.match("[0-9]{3}-[0-9]{3}-[0-9]{4}")) {
        alert("The phone number must match the required format.")
        formValid = false;
   }
    
   return formValid;
}


submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    //validation here
    if(validateForm()) {//so it doesnt accept the values if those values arent valid

        let application = {
            fName: input[0].value,
            lName: input[1].value,
            phone_Number: input[2].value,
            address1: input[3].value,
            address2: input[4].value,
            city: input[5].value,
            zip: input[6].value,
            age: input[7].value,
            email_Address: input[11],
            password: input[12].value,
            isMarried: input[8].checked,
            isSingle: input[9].checked,
            isComplicated: input[10].checked,
            blue: input[13].checked,
            red: input[14].checked,
            yellow: input[15].checked,
            purple: input[16].checked,
            orange: input[17].checked
        };
        console.log(application);
    }

});







