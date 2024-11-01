export function Game(id, name, coverImageURL, summary, rating, rating_count, release_date, status, genres, last_date) {
    this.id =id;
    this.name = name;
    this.coverImageURL = coverImageURL;
    this.summary = summary;
    this.rating = rating;
    this.rating_count = rating_count;
    this.release_date = release_date;
    this.status = status;
    this.genres = genres;
    this.last_date = last_date;
    //platforms: array
}

export function Movie(id, title, posterURL, overview, rating, rating_count, release_date, genres, status) {
    this.id = id;
    this.title = title;
    this.posterURL = posterURL;
    this.overvview = overview;
    this.rating = rating;
    this.rating_count = rating_count;
    this.release_date = release_date;
    this.genres = genres;
    this.status = status;
    //last_date: string?date
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
    //last_date: string?date
}