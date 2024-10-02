import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./MovieCard.css" 

export default function MovieCard({movie}) {

    const imageURL = `https://image.tmdb.org/t/p/w200${movie.poster_path}`

    return (
        <Card sx={{ maxWidth: 345, height: "450px"}} className='card'>
            <CardActionArea>
                <CardMedia
                component="img"
                height="200"
                image={imageURL}
                alt={movie.title}
                sx={{width: "100%", margin: "0 auto"}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {movie.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary'}}>
                        {movie.overview}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}