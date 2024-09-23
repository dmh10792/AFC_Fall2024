import {Person} from "./helper"
import { getFullName } from "./helper";
let people: Person[] = [
    {
        fname: "George",
        lname: "of the Jungle",
        isMarried: true,
        children: []
    }
]

console.log(getFullName(people[0]));
