//defining an object class
type Person = {
    fname: string;
    lname: string;
    isMarried?: boolean;
    children: Person[];
}

let getFullName = (person: Person): string => {
    return `${person.fname} ${person.lname}`;
}

export {Person, getFullName}