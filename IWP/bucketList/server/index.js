//FOUNDATION
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const data = require("./fakeData.json");

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


//LISTENERS
app.listen(port, console.log(`Bucketlist server on port ${port}`));



