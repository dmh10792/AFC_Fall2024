import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./MovieCard.css"


const MovieCard = ({movie}) => {

    const theme = useTheme();

    const altImage = "../assets/noImage.jpg";

    // const determineImage = () => {
      
    //   const imageURL =  movie.poster_path ==null ? altImage : `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
      
    // }


    return ( 
      <Card sx={{ display: 'inline-flex', width: "500px", height: "280px", margin: "10px"}}>

        <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={movie.poster_path ==null ? altImage : `https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5" className='title'>
            {movie.title}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              fontSize={12}
              sx={{ color: 'text.secondary' }}
              className='description'
            >
              {movie.overview}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1,}}>
            <Typography sx={{marginRight: '50px'}}>Rating: {movie.vote_average}</Typography>
            <Typography sx={{marginLeft: '30px'}}>Popularity: {movie.popularity}</Typography>
          </Box>
        </Box>
      
    </Card>
  )
}

export default MovieCard;