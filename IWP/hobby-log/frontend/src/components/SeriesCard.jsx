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
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';

//CSS

const SeriesCard = () => {

    const handleAdd = () => {
        console.log("Add");
    }

    const handleDelete = () => {
        console.log("Delete");
    }

    return (
        <Card sx={{ display: 'inline-flex', width: '480px', height: '220px', margin:'10px' }}>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="/src/assets/moonknightplaceholder.jpg_large"
                alt="Live from space album cover"
            />

          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

              <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5" sx={{fontSize: 'medium'}}>
                    A Series of Unfortunate Events
                      <LiveTvIcon sx={{marginLeft: '20px'}}/>
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ color: 'text.secondary' }}
                  >
                    Marvel Studios
                  </Typography>

                <Rating name="size-small" defaultValue={4.3} precision={0.1} size='small' sx={{paddingTop: '15px'}} readOnly/>
                <Typography sx={{fontSize: 'small', paddingTop: '10px'}}>Release Date: 2023-10-14</Typography>
            </CardContent>

              <Box sx={{ display: 'block', alignItems: 'center', pl: 1, pb: 1 }}>
                  <IconButton aria-label="remove" onClick={handleDelete} sx={{marginRight: '20px'}}>
                    <RemoveCircleOutlinedIcon aria-label='delete-icon' className='deleteButton' />
                  </IconButton>

                    <Chip label="Season 1" variant="outlined" color='primary' sx={{width: '80px', marginRight: '10px'}}/>
                  <Chip label="Episode 8" variant="outlined" color='primary' sx={{width: '90px'}}/>

                  <IconButton aria-label="add" onClick={handleAdd} sx={{marginLeft: '20px'}}>
                    <AddCircleOutlinedIcon aria-label='add-icon' className='addbutton' />
                  </IconButton>
            </Box>
          </Box>

        </Card>
    )
}

export default SeriesCard;