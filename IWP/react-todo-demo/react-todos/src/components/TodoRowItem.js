
function TodoRowItem(props) {

    function handleClick() {
        alert(`Row: ${props.rowNumber}\nDescription: ${props.rowDesc}\nWho: ${props.rowAssigned}`)
    }

    return (
        <tr onClick={handleClick}>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDesc}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )
}

export default TodoRowItem;