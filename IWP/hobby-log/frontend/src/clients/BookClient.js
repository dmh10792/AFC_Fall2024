import axios from "axios";

export const saveBook = (book) => {
    return axios.post('/api/book', book);
}

export const deleteBook = (id) => {
    return axios.delete(`/api/book/${id}`);
}

export const getAllBooks = () => {
    return axios.get('/api/book')
            .then(response => response.data);
}