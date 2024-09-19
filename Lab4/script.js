
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


//to load the values and functions into the menu card
let loadMenu = () => {
    //get menu card
    let card =  document.getElementById("menu-card");

    //set initial values
    card.querySelector(".card-title").innerText = currentMenuItem.name//set the name
    card.querySelector(".card-text").innerText = currentMenuItem.description//set the description
    card.getElementsByClassName("text-body-secondary")[0].innerText 
        = new Intl.NumberFormat('en-US', {style: "currency", currency: "USD"}).format(currentMenuItem.price); //set the price 
    card.getElementsByClassName("img-fluid")[0].src = `../${currentMenuItem.imgUrl}`

    card.getElementsByClassName("img-fluid")[0].style.width="400px";
    card.getElementsByClassName("img-fluid")[0].style.height="300px";
    card.getElementsByClassName("img-fluid")[0].alt=`Image of a ${currentMenuItem.name}`;

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

let prevImage = (card) => {
    itemCounter--;
    if(itemCounter < 0) {
        itemCounter = menuItems.length - 1;
    }
    currentMenuItem = menuItems[itemCounter];
    //set values
    card.querySelector(".card-title").innerText = currentMenuItem.name//set the name
    card.querySelector(".card-text").innerText = currentMenuItem.description//set the description
    card.getElementsByClassName("text-body-secondary")[0].innerText 
        = new Intl.NumberFormat('en-US', {style: "currency", currency: "USD"}).format(currentMenuItem.price); //set the price 
    card.getElementsByClassName("img-fluid")[0].src = `../${currentMenuItem.imgUrl}`;    
    card.getElementsByClassName("img-fluid")[0].alt=`Image of a ${currentMenuItem.name}`;
}

let nextImage = (card) => {
    itemCounter++;
    if(itemCounter > menuItems.length - 1) {
        itemCounter = 0;
    }
    currentMenuItem = menuItems[itemCounter];
    //set values
    card.querySelector(".card-title").innerText = currentMenuItem.name//set the name
    card.querySelector(".card-text").innerText = currentMenuItem.description//set the description
    card.getElementsByClassName("text-body-secondary")[0].innerText 
        = new Intl.NumberFormat('en-US', {style: "currency", currency: "USD"}).format(currentMenuItem.price); //set the price 
    card.getElementsByClassName("img-fluid")[0].src = `../${currentMenuItem.imgUrl}`;
    card.getElementsByClassName("img-fluid")[0].alt=`Image of a ${currentMenuItem.name}`;
}

let buttons = document.querySelectorAll("button");
let submitButton = buttons[1];
let resetButton = buttons[2];
let input = document.querySelectorAll("input");


submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    //validation here
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
        isMarried: input[8].value,
        isSingle: input[9].value,
        isComplicated: input[10].value,
        blue: input[13].value,
        red: input[14].value,
        yellow: input[15].value,
        purple: input[16].value,
        orange: input[17].value
    };

    console.log(application);
});

resetButton.addEventListener("click", (event) => {
    
});



