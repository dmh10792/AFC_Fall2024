//UTILITY
import {useState, useEffect} from "react";
import {saveMovie, updateMovie} from '../../clients/MovieClient.js'

//COMPONENTS
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {styled} from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from '@mui/icons-material/Close';
import MovieIcon from '@mui/icons-material/Movie';
import Carousel from 'react-material-ui-carousel'
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

//CSS

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const MoviePage = ({movie, isOpen, handleClose}) => {

    const [buttonText, setButtonText] = useState();
    const [status, setStatus] = useState(movie.status || "Backlog");

    useEffect(() => {
        if(movie.status === null) {
            setButtonText("Add");
        } else {
            setButtonText("Save");
        }
    },[]);

    const handleClick = () => {
        if (movie.status === null) {
            movie.status = status;
            movie.last_date = new Date().toJSON().slice(0, 10);
            saveMovie(movie)
                .then(() => {
                    handleClose();
                    alert("Movie added to your backlog.")
                });
        } else {
            movie.status = status;
            movie.last_date = new Date().toJSON().slice(0, 10);
            updateMovie(movie).then(() => {
                handleClose();

                alert("Movie Updated.")
            });
        }
    }

    const handleChange = (event) => {
        setStatus(event.target.value);
    }

    return (
        <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
        maxWidth="lg"
        >
            <DialogTitle sx={{m: 0, p: 2, textAlign: 'center'}} id="customized-dialog-title">
                <img
                    src={movie.posterURL}
                    style={
                        {
                            display: 'block',
                            margin: 'auto',
                            marginBottom: '10px'
                        }
                    }
                />
                {movie.title}
                <MovieIcon sx={{margin: "0px 10px"}}/>
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={(theme) => ({
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                })}
            >
                <CloseIcon/>
            </IconButton>
            <DialogContent dividers>
                <Carousel
                    sx={{ margin: '2px' }}
                    autoPlay
                    autoPlaySpeed={3000}
                    infinite
                    swipeable
                    arrows
                    pauseOnHover
                    navButtonsAlwaysInvisible={true}
                    indicators={false}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '10px',
                        }}
                    >
                        {movie.genres.map((genre) => (
                            <Chip
                                label={genre.name}
                                key={genre.id}
                                variant="outlined"
                                color="primary"
                            />
                        ))}
                    </Box>
                </Carousel>
            <Typography gutterBottom>
                {movie.overview}
              </Typography>
                <Typography
                    sx={{fontSize: 'small', paddingTop: '10px', display: 'inline'}}
                >
                    Release Date: {movie.release_date}
                </Typography>
                <Rating name="size-small" defaultValue={movie.rating} precision={0.1} size='small'
                        sx={{paddingTop: '5px', paddingLeft: '30px', float: 'right'}} readOnly
                />
            </DialogContent>
            <DialogActions>
                <InputLabel id="status">Status:</InputLabel>
                <Select id="status" value={status} onChange={handleChange} defaultValue={status}>
                    <MenuItem value={"Backlog"}>Backlog</MenuItem>
                    <MenuItem value={"Watching"}>Watching</MenuItem>
                    <MenuItem value={"Next Up"}>Next Up</MenuItem>
                    <MenuItem value={"Completed"}>Completed</MenuItem>
                </Select>

              <Button autoFocus onClick={handleClick}>
                  {buttonText}
              </Button>
            </DialogActions>
        </Dialog>
    )
}

export default MoviePage;
