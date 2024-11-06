import axios from "axios";

export const saveGameGenre = (data) => {
    try {
        axios.post('/api/game_genre', data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const saveMovieGenre = (data) => {
    try {
        axios.post('/api/movie_genre', data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const saveSeriesGenre = (data) => {
    try {
        axios.post('/api/series_genre', data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const getAllMovieGenres = () => {
    return axios.get("/api/movie_genre");
}

export const getAllGameGenres = () => {
    return axios.get("/api/game_genre");
}

export const getAllSeriesGenres = () => {
    return axios.get("/api/series_genre");
}

