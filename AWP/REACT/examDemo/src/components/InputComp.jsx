import { useState } from 'react'

const InputComp = () => {
    const [backgroundColor, setUserInput] = useState();

    const handleClick = (event) => {
        setUserInput(event.target.value)
        console.log(userInput);
    }

    return (
        <>
            <p onClick={handleClick}>Red</p>
            <p>Yellow</p>
            <p>Green</p>
        </>
    )
}

export default InputComp