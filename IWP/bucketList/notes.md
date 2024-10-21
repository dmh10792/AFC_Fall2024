Rules for Building API
1) We decide the endpoints
2) We decide How the data is sent - JSON or XML
3) We decide how much data is sent
4) We decide what the data looks like

Restrictions
Routes must be:
    /api/items
    /api/items/<unique id>

Data
{
    id: Number,
    description: String,
    is_complete: Boolean
}

Must be CRUD functional

Read
1) Route - /api/items, GET method
    1.1) Get data from db
2) JSON
3) Everything
4) Array of objects

Create
1) Route - /api/items, POST method
    1.1) Get data from db
    1.2) DB sends something back
2) JSON -> Client
3) Send back one thing
4) one object of data -  recipt from database.

Delete
1) Route - /api/items/<unique id>, DELETE method
2) JSON
3) Send back one thing - what was "deleted"
4) One object - same as above

Update
1) Route - /api/items/<unique id>, PUT method
    1.1) 
2) JSON
3) Send back one thing - what was updated
4) Send back an object or just is_complete