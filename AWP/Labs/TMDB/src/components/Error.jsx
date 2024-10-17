import "./Error.css"

const Error = ({message}) => {

    return (
        <>
            <div id="errorContainer">
                <img src="/src/assets/error.webp" alt="Error image" />
                <h1>{message}</h1>
            </div>
        </>
    )
}

export default Error;