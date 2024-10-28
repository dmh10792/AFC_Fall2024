//FOUNDATION
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const data = require("./fakeData.json");
let newId = 3;
//built in body parser
app.use(express.json());//if we recieve json it will automatically be parsed to be usable
//if url-encoded
app.use(express.urlencoded({extended: true}));//same as above but with url encoding

//ROUTE HANDLERS
app.get("/", (req, res) => {
    res.redirect('/api/items');
});

// Read
// 1) Route - /api/items, GET method
app.get("/api/items", (req, res) => {
    //     1.1) Get data from db
    // 2) JSON
    // 3) Everything
    // 4) Array of objects
    res.send(data);
});

// Create
// 1) Route - /api/items, POST method
app.post("/api/items", (req, res) => {


//     1.1) Get data from db
//     1.2) DB sends something back
// 2) JSON -> Client
    let newItem = {
        id: ++newId,
        description: req.body.description,
        is_completed: false
    };
    let items = [...data, newItem];
// 3) Send back one thing
// 4) one object of data -  recipt from database.
    res.json(items);
});

//LISTENERS
app.listen(port, console.log(`Bucketlist server on port ${port}`));



