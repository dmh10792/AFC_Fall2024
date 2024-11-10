
export function Game(id, name, coverImageURL, summary, rating, rating_count, release_date, status, genres) {
    this.id =id;
    this.name = name;
    this.coverImageURL = coverImageURL;
    this.summary = summary;
    this.rating = rating;
    this.rating_count = rating_count;
    this.release_date = release_date;
    this.status = status;
    this.genres = genres;
    this.last_date = null;
}

export function Movie(id, title, posterURL, overview, rating, rating_count, release_date, genres, status) {
    this.id = id;
    this.title = title;
    this.posterURL = posterURL;
    this.overview = overview;
    this.rating = rating;
    this.rating_count = rating_count;
    this.release_date = release_date;
    // this.genre_ids = genre_ids;
    this.status = status;
    this.genres = genres;
    this.last_date = null;
}

export function Series(id, title, posterURL, overview, rating, rating_count, first_air_date, genre_ids, status, season, episode) {
    this.id = id;
    this.title = title;
    this.posterURL = posterURL;
    this.overview = overview;
    this.rating = rating;
    this.rating_count = rating_count;
    this.first_air_date = first_air_date;
    this.genre_ids = genre_ids;
    this.status = status;
    this.season = season;
    this.episode = episode;
    this.genres = [];
    this.last_date = null;
}

export function Book(id, title, imageURL, author, length, description, publish_date, link, status, page) {
    this.id = id;
    this.title = title;
    this.imageURL = imageURL;
    this.author = author;
    this.length = length;
    this.description = description;
    this.publish_date = publish_date;
    this.link = link;
    this.status = status;
    this.page = page;
    this.last_date = null;
}

export function Task2DB(name, description, notes, startDate, dueDate, status, last_date) {
    this.name = name;
    this.description = description;
    this.notes = notes;
    this.startDate = startDate;
    this.dueDate = dueDate;
    this.status = status;
    this.last_date = last_date;
}

export function Task(id, name, description, notes, startDate, dueDate, status, last_date) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.notes = notes;
    this.startDate = startDate;
    this.dueDate = dueDate;
    this.status = status;
    this.last_date = last_date;
}

export function Genre(id, name) {
    this.id = id;
    this.name = name;
}