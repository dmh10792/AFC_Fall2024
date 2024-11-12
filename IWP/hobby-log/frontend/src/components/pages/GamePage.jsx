//UTILITY
import {useState, useEffect} from "react";
import {saveGame} from '../../clients/GameClient.js'

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
import {Gamepad} from "@mui/icons-material";
import Carousel from 'react-material-ui-carousel'
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

//CSS

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const GamePage = ({game, isOpen, handleClose}) => {

    const [buttonText, setButtonText] = useState();

    useEffect(() => {
        if(game.status === null) {
            setButtonText("Add");
        } else {
            setButtonText("Save");
        }
    },[]);

    const handleClick = () => {
        if (game.status === null) {
            game.status = "Backlog"
            game.last_date = new Date().toJSON().slice(0, 10);
            saveGame(game)
                .then(() => {
                    handleClose();
                    alert("Game added to your backlog.")
                });
        } else {
            //call the update method
        }
    }

    return (
        <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
        maxWidth="lg"
        >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                {game.name}
                <Gamepad sx={{margin: "0px 10px"}}/>
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
              <CloseIcon />
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
                        {game.genres.map((genre) => (
                            <Chip
                                label={genre.name}
                                key={genre.id}
                                variant="outlined"
                                color="primary"
                            />
                        ))}
                    </Box>
                </Carousel>
              <Typography gutterBottom sx={{margin: '10px'}}>
                  {game.summary}
              </Typography>
                <Typography
                    sx={{fontSize: 'small', paddingTop: '10px', display: 'inline'}}
                >
                    Release Date: {game.release_date}
                </Typography>
                <Rating name="size-small" defaultValue={game.rating} precision={0.1} size='small'
                        sx={{paddingTop: '5px', paddingLeft: '30px', float: 'right'}} readOnly
                />
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClick}>
                  {buttonText}
              </Button>
            </DialogActions>
        </Dialog>
    )
}

export default GamePage;
