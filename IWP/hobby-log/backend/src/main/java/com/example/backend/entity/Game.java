package com.example.backend.entity;

import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.security.PrivateKey;
import java.util.Date;
import java.util.List;

@Table
@Entity
public class Game {

    @Column
    @Id
    private Long id;
    @Column
    private String name;
    @Column
    private String coverImageURL;
    @Column
    private String summary;
    @Column
    private Double rating;
    @Column
    private Integer rating_count;
    @Column
    private String release_date;
    @Column
    private String status;
    @OneToMany
    private List<GameGenre> genres;
    @Column
    private Date last_date;

    public Game() {}

    public Game(Long id, String name, String coverImageURL, String summary, Double rating, Integer rating_count, String release_date, String status, List<GameGenre> genres, Date last_date) {
        this.id = id;
        this.name = name;
        this.coverImageURL = coverImageURL;
        this.summary = summary;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCoverImageURL() {
        return coverImageURL;
    }

    public void setCoverImageURL(String coverImageURL) {
        this.coverImageURL = coverImageURL;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
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

    public List<GameGenre> getGenres() {
        return genres;
    }

    public void setGenres(List<GameGenre> genres) {
        this.genres = genres;
    }

    public Date getLast_date() {
        return last_date;
    }

    public void setLast_date(Date last_date) {
        this.last_date = last_date;
    }
}