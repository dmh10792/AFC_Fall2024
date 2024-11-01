//UTILITY
import {Game} from "../types.js";
import {useEffect, useState} from "react";
import axios from "axios";

//COMPONENTS
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import Carousel from 'react-material-ui-carousel'
import {Gamepad} from "@mui/icons-material";
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';


//CSS


const GameCard = ({game}) => {

    const [summary, setSummary] = useState("");

    const rating = game.rating;
    const baseURL = "https://api.rawg.io/api";
    const { RAWG_API_KEY } = process.env;
    game.summary = summary;

    useEffect(() => {
        getGameSummary(game.id);
    }, []);

    const handleAdd = () => {
        console.log("Add");
        //console.log(game);
    }

    const handleDelete = () => {
        console.log("Delete");
    }

    const getGameSummary = (id) => {

        if (game.summary != null) return;

        let route = "games";
        let endpoint = `${baseURL}/${route}/${id}?key=${RAWG_API_KEY}`;
        axios
            .get(endpoint)
            .then(response => {
                 setSummary(response.data.description_raw);
            })
            .catch(error => console.log(error.messgae));
    }

    return (
        <Card sx={{ display: 'inline-flex', width: '490px', height: '220px', margin:'10px' }}>

            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={game.coverImageURL}
                alt={game.name}
            />

          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

            <CardContent sx={{ flex: '1 0 auto', paddingLeft: '30px'}}>

              <Typography component="div" variant="h5" sx={{fontSize: '15px', paddingLeft: '20px'}}>
                {game.name}
                  <Gamepad sx={{float: 'right'}}/>
              </Typography>

                <Rating name="size-small" defaultValue={rating} precision={0.1} size='small' sx={{paddingTop: '5px', paddingLeft: '30px'}} readOnly/>

                <Typography sx={{fontSize: 'small', paddingTop: '10px'}}>Release Date: {game.release_date}</Typography>

                <Carousel interval='2000' sx={{marginTop: '10px'}}>
                    {game.genres.map( (genre, i) => {
                        return (<Chip label={genre} key={i} variant="outlined" color='primary'/>)
                    })}
                </Carousel>

            </CardContent>

            <Box sx={{ display: 'block', alignItems: 'center', pl: 1, pb: 1 }}>

              <IconButton aria-label="remove" onClick={handleDelete} sx={{marginRight: '50px'}}>
                <RemoveCircleOutlinedIcon aria-label='delete-icon' className='deleteButton' />
              </IconButton>

                {game.status && <Chip label={game.status} variant="outlined" color='primary' sx={{width: '100px'}}/>}

              <IconButton aria-label="add" onClick={handleAdd} sx={{marginLeft: '50px'}}>
                <AddCircleOutlinedIcon aria-label='add-icon' className='addbutton' />
              </IconButton>

            </Box>

          </Box>

        </Card>
    )
}

export default GameCard;