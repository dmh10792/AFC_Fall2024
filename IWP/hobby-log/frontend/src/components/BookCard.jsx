//UTILITY

//COMPONENTS
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';

//CSS

const BookCard = () => {

    const handleAdd = () => {
        console.log("Add");
    }

    const handleDelete = () => {
        console.log("Delete");
    }

    return (
        <Card sx={{ display: 'inline-flex', width: '490px', height: '220px', margin:'10px' }}>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="/src/assets/sleepyhollowplaceholder.jpg"
                alt="Live from space album cover"
            />

          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

              <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5" sx={{fontSize: 'medium'}}>
                    The Legend of Sleepy Hollow
                      <MenuBookIcon sx={{float: 'right'}}/>
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ color: 'text.secondary' }}
                  >
                    Washington Irving
                  </Typography>

                <Rating name="size-small" defaultValue={4.7} precision={0.1} size='small' sx={{paddingTop: '15px'}} readOnly/>
                <Typography sx={{fontSize: 'small', paddingTop: '10px'}}>Release Date: 1932-10-31</Typography>
            </CardContent>

              <Box sx={{ display: 'block', alignItems: 'center', pl: 1, pb: 1 }}>
                  <IconButton aria-label="remove" onClick={handleDelete} sx={{marginRight: '50px'}}>
                    <RemoveCircleOutlinedIcon aria-label='delete-icon' className='deleteButton' />
                  </IconButton>

                    <Chip label="Page: 231" variant="outlined" color='primary' sx={{width: '100px'}}/>

                  <IconButton aria-label="add" onClick={handleAdd} sx={{marginLeft: '50px'}}>
                    <AddCircleOutlinedIcon aria-label='add-icon' className='addbutton' />
                  </IconButton>
            </Box>
          </Box>

        </Card>
    )
}

export default BookCard;