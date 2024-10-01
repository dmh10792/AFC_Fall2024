
const randomNumGenerator = () => {
    let num = Math.floor(1 + Math.random() * (6));
    return num;
}

const numArray = ["one", "two", "three", "four", "five", "six"];

export {randomNumGenerator, numArray};
