
const CardContainer = (props) => {

    let {children} = props;

    return (
        <div style={{border: "solid green 2px", padding: "20px"}}>
            {children}
        </div>
    );
};

export default CardContainer;