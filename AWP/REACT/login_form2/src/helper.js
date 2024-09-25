const personObj = {
    fname: "Desmond",
    age: 31,
    pw: ""
};

const greeting = (personObj) => {
    return `Hello ${personObj.fname}`;
};

export {personObj, greeting};