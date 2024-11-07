import axios from "axios";

export const saveSeries = (series) => {
    return axios.post('/api/series', series);
}

export const deleteSeries = (id) => {
    return axios.delete(`/api/series/${id}`);
}