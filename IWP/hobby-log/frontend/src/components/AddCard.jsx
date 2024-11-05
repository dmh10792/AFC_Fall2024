//UTILITY
//COMPONENTS
import Card from '@mui/material/Card';
import AddIcon from '@mui/icons-material/Add';
import {Link} from "react-router-dom";

//CSS


const AddCard = () => {

    return (
        <Link to="/addPage" aria-label='add button' >
            <Card variant="outlined"  className='card-back' sx={{ display: 'inline-block', backgroundColor: '#655f5f8f', width: '490px', height: '220px', margin:'10px'}}>
                <AddIcon className='plus-icon' fontSize='large' sx={{margin: '100px auto'}}/>
            </Card>
        </Link>
    )
}

export default AddCard;