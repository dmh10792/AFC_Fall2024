export function Game(id, name, coverImageURL, summary, rating, rating_count, release_date, status, genres) {
    this.id =id;
    this.name = name;
    this.coverImageURL = coverImageURL,
    this.summary = summary;
    this.rating = rating;
    this.rating_count = rating_count;
    this.release_date = release_date;
    this.status = status;
    this.genres = genres;
    //last_date: string?date
    //platforms: array
}