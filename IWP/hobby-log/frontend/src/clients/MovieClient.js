import axios from "axios";

export const saveMovie = (movie) => {
    return axios.post('/api/movie', movie);
}

export const deleteMovie = (id) => {
    return axios.delete(`/api/movie/${id}`);
}