package com.example.backend.entity;

import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Table
@Entity
public class Movie {

    @Column
    @Id
    private Long id;
    @Column
    private String title;
    @Column
    private String posterURL;
    @Column
    private String overview;
    @Column
    private Double rating;
    @Column
    private Integer rating_count;
    @Column
    private String release_date;
    @Column
    private String status;
    @OneToMany
    private List<MovieGenre> genres;
    @Column
    private Date last_date;

    public Movie() {
    }

    public Movie(Long id, String title, String posterURL, String overview, Double rating, Integer rating_count, String release_date, String status, List<MovieGenre> genres, Date last_date) {
        this.id = id;
        this.title = title;
        this.posterURL = posterURL;
        this.overview = overview;
        this.rating = rating;
        this.rating_count = rating_count;
        this.release_date = release_date;
        this.status = status;
        this.genres = genres;
        this.last_date = last_date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPosterURL() {
        return posterURL;
    }

    public void setPosterURL(String posterURL) {
        this.posterURL = posterURL;
    }

    public String getOverview() {
        return overview;
    }

    public void setOverview(String overview) {
        this.overview = overview;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public Integer getRating_count() {
        return rating_count;
    }

    public void setRating_count(Integer rating_count) {
        this.rating_count = rating_count;
    }

    public String getRelease_date() {
        return release_date;
    }

    public void setRelease_date(String release_date) {
        this.release_date = release_date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<MovieGenre> getGenres() {
        return genres;
    }

    public void setGenres(List<MovieGenre> genres) {
        this.genres = genres;
    }

    public Date getLast_date() {
        return last_date;
    }

    public void setLast_date(Date last_date) {
        this.last_date = last_date;
    }
}
