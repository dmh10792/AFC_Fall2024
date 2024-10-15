//FOUNDATION
const express = require("express")//imports express under this variable, for node projects
const app = express()
// console.log(process)
const port = process.env.PORT || 3000

//ROUTE HANDLERS
app.get("/",(req,  res) => {
    // console.log(req)
    // res.end("I am fron the backend!!!")
    res.redirect("/home")
})

app.get("/home", (req,  res) => {
    res.send("I am from the redirect.")
})

//LISTENERS
app.listen(port, console.log(`Basic Server app running on port ${port}`))