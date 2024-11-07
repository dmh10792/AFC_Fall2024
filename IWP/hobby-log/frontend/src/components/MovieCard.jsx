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
import MovieIcon from '@mui/icons-material/Movie';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';
import Carousel from "react-material-ui-carousel";
import {deleteMovie, saveMovie} from "../clients/MovieClient.js";

//CSS

const MovieCard = ({movie}) => {

    const rating = movie.rating;

    const handleAdd = () => {
        movie.status = "Backlog"
        movie.last_date = new Date().toJSON().slice(0, 10);
        console.log(movie);
        saveMovie(movie)
            .then(() => alert("Movie added to backlog."));
    }

    const handleDelete = () => {
        if (movie.status === null) {
            alert("Movie is not in your backlog.");
            return;
        }

        deleteMovie(movie.id)
            .then(() => alert("Movie removed from your backlog."));
    }

    return (
        <Card sx={{ display: 'inline-flex', width: '490px', height: '220px', margin:'10px' }}>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={movie.posterURL}
                alt={movie.title}
            />

          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

              <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5" sx={{fontSize: '15px'}}>
                    {movie.title}
                      <MovieIcon sx={{float: 'right'}}/>
                  </Typography>

                <Rating name="size-small" defaultValue={rating} precision={0.1} size='small' sx={{paddingTop: '5px'}} readOnly/>
                <Typography sx={{fontSize: 'small', paddingTop: '10px'}}>Release Date: {movie.release_date}</Typography>

                <Carousel interval='2000' sx={{marginTop: '10px'}}>
                    {movie.genres.map( (genre) => {
                        //console.log(genre.name);
                        return (<Chip label={genre.name} key={genre.id} variant="outlined" color='primary'/>)
                    })}
                </Carousel>
            </CardContent>

              <Box sx={{ display: 'block', alignItems: 'center', pl: 1, pb: 1 }}>
                  <IconButton aria-label="remove" onClick={handleDelete} sx={{marginRight: '50px'}}>
                    <RemoveCircleOutlinedIcon aria-label='delete-icon' className='deleteButton' />
                  </IconButton>

                  {movie.status && <Chip label="Watched" variant="outlined" color='primary' sx={{width: '100px'}}/>}

                  <IconButton aria-label="add" onClick={handleAdd} sx={{marginLeft: '50px'}}>
                    <AddCircleOutlinedIcon aria-label='add-icon' className='addbutton' />
                  </IconButton>
            </Box>
          </Box>

        </Card>
    )
}

export default MovieCard;