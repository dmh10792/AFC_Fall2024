

const UserCard = (props) => {
    let {name, age} = props;

    return (
        <div style={{border: "solid black 3px", padding: "10px", marginBottom: "10px" }}>
            <h2>{name}</h2>
            <p>{age}</p>
        </div>
    );
};

export default UserCard;