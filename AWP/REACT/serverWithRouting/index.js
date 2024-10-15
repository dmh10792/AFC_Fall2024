/**
 * SETUP
 */
const express = require("express");
const app = express();

//PORT
const port = process.env.PORT || 3000;

/**
 * ROUTE HANDLERS
 */

app.get("/", (req, res) => {
    res.redirect("/home");
});

app.get("/home", (req, res) => {
    res.send("Im from the home page!");
});

app.get("/about", (req, res) => {
    res.send("This is more about me!!");
});

app.get("/contact", (req, res) => {
    res.send("Contact me here!!!");
});

app.get("/name/:name/bank/:money", (req, res) => {
    const {name, money} = req.params;

    // if(isNaN(money))  res.send(`Value entered for money is not a number `);
    // res.send(`My name is ${name} and I have $${money} `);

    res.send(
        isNaN(money)
          ? `Value entered for money is not a number `
          : `My name is ${name} and I have $${money} `
    );
    
});

app.get("/fruit/:aFruit", (req, res) => {
    console.log(req);
    res.end(`I am the ${req.params.aFruit} route`);
});

app.get("*", (req, res) => {//catches everything that doesnt fall into the rest, must be last
    res.send("No matching route");
});


/**
 * LISTENERS
 */
app.listen(port, console.log(`Basic Server app running on port ${port}`));