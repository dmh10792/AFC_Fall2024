import './MyTable'

const MyTable = ({rows}) => {

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Height</th>
                        <th>Hair Color</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </>
    )
}

export default MyTable; 