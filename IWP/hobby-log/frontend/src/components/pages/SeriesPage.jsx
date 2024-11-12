//UTILITY
import {saveSeries, updateSeries} from '../../clients/SeriesClient.js';
import {useEffect, useState} from "react";

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
import TvIcon from '@mui/icons-material/Tv';
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

const SeriesPage = ({show, isOpen, handleClose}) => {

    const [buttonText, setButtonText] = useState();
    const [status, setStatus] = useState(show.status || "Backlog");
    const [season, setSeason] = useState(show.season);
    const [episode, setEpisode] = useState(show.episode);

    useEffect(() => {
        if(show.status === null) {
            setButtonText("Add");
        } else {
            setButtonText("Save");
        }
    },[]);

    const handleClick = () => {
        if (show.status === null) {
            show.status = status;
            show.season = season;
            show.episode = episode;
            show.last_date = new Date().toJSON().slice(0, 10);
            saveSeries(show)
                .then(() => {
                    handleClose();
                    alert("Series added to your backlog.")
                });
        } else {
            show.status = status;
            show.season = season;
            show.episode = episode;
            show.last_date = new Date().toJSON().slice(0, 10);
            updateSeries(show).then(() => {
                handleClose();

                alert("Series Updated.")
            });
        }
    }

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    }

    const handleSeasonChange = (event) => {
        setSeason(event.target.value);
    }

    const handleEpisodeChange = (event) => {
        setEpisode(event.target.value);
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
                    src={show.posterURL}
                    style={
                        {
                            display: 'block',
                            margin: 'auto',
                            marginBottom: '10px'
                        }
                    }
                />
                {show.title}
                <TvIcon sx={{margin: "0px 10px"}}/>
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
                        {show.genres.map((genre) => (
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
                    {show.overview}
                </Typography>
                <Typography
                    sx={{fontSize: 'small', paddingTop: '10px', display: 'inline'}}
                >
                    Release Date: {show.first_air_date}
                </Typography>
                <Rating name="size-small" defaultValue={show.rating} precision={0.1} size='small'
                        sx={{paddingTop: '5px', paddingLeft: '30px', float: 'right'}} readOnly
                />
            </DialogContent>
            <DialogActions>
                <InputLabel id="season">Season:</InputLabel>
                <input
                    type="number"
                    className="season"
                    onChange={handleSeasonChange}
                    value={season}
                    min={0}
                    style={{
                        width: '50px',
                        margin: '10px'
                    }}
                />

                <InputLabel id="episode">Episode:</InputLabel>
                <input
                    type="number"
                    className="episode"
                    onChange={handleEpisodeChange}
                    value={episode}
                    min={0}
                    style={{
                        width: '50px',
                        margin: '10px'
                    }}
                />

                <InputLabel id="status">Status:</InputLabel>
                <Select id="status" value={status} onChange={handleStatusChange} defaultValue={status}>
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

export default SeriesPage;
