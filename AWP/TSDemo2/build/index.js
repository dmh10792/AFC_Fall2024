"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("./helper");
let people = [
    {
        fname: "George",
        lname: "of the Jungle",
        isMarried: true,
        children: []
    }
];
console.log((0, helper_1.getFullName)(people[0]));
