import axios from "axios";

export const saveGame = (data)=> {

    try {
        return axios.post('/api/game', data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const deleteGame = (id) => {
    return axios.delete(`api/game/${id}`);
}

export const getAllGames = () => {
    return axios.get('/api/game')
            .then(response => response.data);
}

export const updateGame = (game) => {
  return axios.put(`/api/game/${game.id}`, game);
}
