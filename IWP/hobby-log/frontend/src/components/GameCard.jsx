//UTILITY

//COMPONENTS
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import {Gamepad} from "@mui/icons-material";

//CSS

const GameCard = () => {
    return (
        <Card sx={{ display: 'inline-flex', width: '480px', margin:'10px' }}>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="/src/assets/mgs2placeholder.jpg"
                alt="Live from space album cover"
            />

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5" sx={{fontSize: 'medium'}}>
                Metal Gear Solid 2: Sons of Liberty
                  <Gamepad sx={{marginLeft: '20px'}}/>
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ color: 'text.secondary' }}
              >
                Kojima Productions
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              <IconButton aria-label="previous">
                <SkipNextIcon />
              </IconButton>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              </IconButton>
              <IconButton aria-label="next">
                <SkipNextIcon />
              </IconButton>
            </Box>
          </Box>

        </Card>
    )
}

export default GameCard;