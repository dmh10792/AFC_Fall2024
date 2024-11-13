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
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Chip from '@mui/material/Chip';
import {Button} from "@mui/material";
import {deleteBook, saveBook} from "../clients/BookClient.js";
import {useState} from "react";
import BookPage from "./pages/BookPage.jsx";

//CSS

const BookCard = ({book}) => {

    const [pageOpen, setPageOpen] = useState(false);

    const pageString = (book.status) ? `Page: ${book.page}` : `Pages: ${book.length}`;

    const handleAdd = () => {
        book.status = "Backlog";
        book.last_date = new Date().toJSON().slice(0, 10);
        book.page = 1;
        saveBook(book)
            .then(() => alert("Book added to backlog."))
    }

    const handleDelete = () => {
        if (book.status === null) {
            alert("Book is not in your backlog.");
            return;
        }

        deleteBook(book.id)
            .then(() => alert("Book removed from your backlog."))
    }

    const handleClickOpen = () => {
        setPageOpen(true);
    };

    const handleClose = () => {
        setPageOpen(false);
    };

    return (
        <>
            <Card sx={{ display: 'inline-flex', width: '490px', height: '220px', margin:'10px' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={book.imageURL}
                    alt="Live from space album cover"
                    onClick={handleClickOpen}
                />

              <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

                  <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="h5" sx={{fontSize: '12px'}}>
                          {book.title}
                          <MenuBookIcon sx={{float: 'right'}}/>
                      </Typography>

                      <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary', fontSize: '10px' }}
                      >
                          {book.author}
                      </Typography>

                    <Typography sx={{fontSize: 'small', paddingTop: '10px'}}>Published: {book.publish_date}</Typography>
                      <a href={book.link} target="_blank">
                          <Button variant="contained" size='small' sx={{marginTop: '22px'}}>View</Button>
                      </a>
                </CardContent>

                  <Box sx={{ display: 'block', alignItems: 'center', pl: 1, pb: 1 }}>
                      <IconButton aria-label="remove" onClick={handleDelete} sx={{marginRight: '20px'}}>
                        <RemoveCircleOutlinedIcon aria-label='delete-icon' className='deleteButton' />
                      </IconButton>

                        <Chip
                            label={pageString} variant="outlined" color='primary' sx={{width: '100px', marginRight: '10px'}}/>

                        {book.status && <Chip label={`${book.status}`} variant="outlined" color='primary' sx={{width: '90px'}}/>}

                      <IconButton aria-label="add" onClick={handleAdd} sx={{marginLeft: '20px'}}>
                        <AddCircleOutlinedIcon aria-label='add-icon' className='addbutton' />
                      </IconButton>
                </Box>
              </Box>

            </Card>

            <BookPage book={book} isOpen={pageOpen} handleClose={handleClose}/>
        </>

    )
}

export default BookCard;