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
import TvIcon from '@mui/icons-material/Tv';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';
import Carousel from "react-material-ui-carousel";

//CSS

const SeriesCard = ({show}) => {

    const rating = show.rating;
    const season = show.season || 2;
    const episode = show.episode || 6;

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
                image={show.posterURL}
                alt="Live from space album cover"
            />

          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

              <CardContent sx={{ flex: '1 0 auto', alignItems: 'center' }}>
                  <Typography component="div" variant="h5" sx={{fontSize: '15px'}}>
                      {show.title}
                      <TvIcon sx={{float: 'right'}}/>
                  </Typography>

                <Rating name="size-small" defaultValue={rating} precision={0.1} size='small' sx={{paddingTop: '5px'}} readOnly/>
                <Typography sx={{fontSize: 'small', paddingTop: '10px'}}>Air Date: {show.first_air_date}</Typography>

                <Carousel interval='2000' sx={{marginTop: '10px'}}>
                    {show.genres.map( (genre) => {
                        return (<Chip label={genre.name} key={genre.id} variant="outlined" color='primary'/>)
                    })}
                </Carousel>
            </CardContent>

              <Box sx={{ display: 'block', alignItems: 'center', pl: 1, pb: 1 }}>
                  <IconButton aria-label="remove" onClick={handleDelete} sx={{marginRight: '20px'}}>
                    <RemoveCircleOutlinedIcon aria-label='delete-icon' className='deleteButton' />
                  </IconButton>

                    <Chip label={`Season: ${season}`} variant="outlined" color='primary' sx={{width: '90px', marginRight: '10px'}}/>
                  <Chip label={`Episode: ${episode}`} variant="outlined" color='primary' sx={{width: '90px'}}/>

                  <IconButton aria-label="add" onClick={handleAdd} sx={{marginLeft: '20px'}}>
                    <AddCircleOutlinedIcon aria-label='add-icon' className='addbutton' />
                  </IconButton>
            </Box>
          </Box>

        </Card>
    )
}

export default SeriesCard;