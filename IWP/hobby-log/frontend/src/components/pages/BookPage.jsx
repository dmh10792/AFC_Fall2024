//UTILITY

//COMPONENTS
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {styled} from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from '@mui/icons-material/Close';
import {useEffect, useState} from "react";
import {saveBook, updateBook} from "../../clients/BookClient.js";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import MenuBookIcon from "@mui/icons-material/MenuBook";

//CSS

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BookPage = ({book, isOpen, handleClose}) => {

    const [buttonText, setButtonText] = useState();
    const [status, setStatus] = useState(book.status || "Backlog");
    const [page, setPage] = useState(book.page || 1);

    useEffect(() => {
        if(book.status === null) {
            setButtonText("Add");
        } else {
            setButtonText("Save");
        }
    },[]);

    const handleClick = () => {
        if (book.status === null) {
            book.status = status;
            book.page = page;
            book.last_date = new Date().toJSON().slice(0, 10);
            saveBook(book)
                .then(() => {
                    handleClose();
                    alert("Book added to your backlog.")
                });
        } else {
            book.status = status;
            book.page = page;
            book.last_date = new Date().toJSON().slice(0, 10);
            updateBook(book).then(() => {
                handleClose();

                alert("Book Updated.")
            });
        }
    }

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    }

    const handlePageChange = (event) => {
        setPage(event.target.value);
    }

    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={isOpen}
            maxWidth="xl"
        >
            <DialogTitle sx={{m: 0, p: 2, textAlign: 'center'}} id="customized-dialog-title">
                <img
                    src={book.imageURL}
                    style={
                        {
                            display: 'block',
                            margin: 'auto',
                            marginBottom: '10px',
                            width: '100px'
                        }
                    }
                />
                {book.title}
                <MenuBookIcon sx={{margin: "0px 10px"}}/>
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
                <Typography gutterBottom>
                    {book.description}
                </Typography>
                <Typography
                    sx={{fontSize: 'small', paddingTop: '10px', display: 'inline'}}
                >
                    Published: {book.publish_date}
                </Typography>
                <a href={book.link} target="_blank">
                    <Button variant="contained" size='small' sx={{display: 'inline', marginTop: '22px', float: 'right'}}>View</Button>
                </a>
            </DialogContent>
            <DialogActions>

                <InputLabel id="page">Page:</InputLabel>
                <input
                    type="number"
                    className="page"
                    onChange={handlePageChange}
                    value={page}
                    min={0}
                    max={book.length}
                    style={{
                        width: '50px',
                        margin: '10px'
                    }}
                />

                <InputLabel id="status">Status:</InputLabel>
                <Select id="status" value={status} onChange={handleStatusChange} defaultValue={status}>
                    <MenuItem value={"Backlog"}>Backlog</MenuItem>
                    <MenuItem value={"Reading"}>Reading</MenuItem>
                    <MenuItem value={"Up Next"}>Up Next</MenuItem>
                    <MenuItem value={"Finished"}>Finished</MenuItem>
                </Select>

                <Button autoFocus onClick={handleClick}>
                    {buttonText}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default BookPage;