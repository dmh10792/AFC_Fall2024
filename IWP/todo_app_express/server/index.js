//FOUNDATION
//Where is all my stuff coming from?
//What do I need to run my server?
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

if(!process.env.NODE_ENV || process.env.NODE_ENV !== "production") {
    const logger = require("morgan");
    app.use(logger("dev"));
}
//body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/*
DB stuff
 */

//DB CONNECTION
const conn = require("./connections/pgconnection");

//BLUEPRINTS
//DONE BY THE DBA
/*
{
    id: Number,
    note: String,
    is_completed: Boolean
}
 */

//QUERIES

/*
    ROUTE HANDLING
 */
//ROUTE HANDLERS
//where we go to a certain route, what happens?
app.get("/", (req, res)=> {
    res.send("Server Running");
})

//READ
app.get("/api/todos", (req, res) => {
    let query = `SELECT * FROM todo;`

    conn.query(query)
        .then(data => res.status(200).json(data.rows))
        .catch(err => {
            console.log("Error reading data from db: ", err.message);
            res.status(400).json({message: "It aint got no gas in it."});
        })


})

app.post("/api/todos", (req, res) => {
    let query = `
        INSERT INTO todo (note, is_completed)
        VALUES ( '${req.body.note}', false)
        RETURNING *;`;

    conn.query(query)
        .then(data => res.status(200).json(data.rows[0]))
        .catch(err => {
            console.log("Error updating data: ", err.message);
            res.status(400).json({message: "Cant put no gas in it."});
        })
})


//LISTENER
app.listen(port, console.log(`Todo App with Express on port ${port}`));



/*
When working with a database you need to know 3 things
1 - The connection
2 - Blueprints/data structure
3 - Queries
 */