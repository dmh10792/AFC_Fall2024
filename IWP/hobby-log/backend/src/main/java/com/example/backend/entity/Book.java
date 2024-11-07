package com.example.backend.entity;

import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Table
@Entity
public class Book {

    @Column
    @Id
    private Long id;
    @Column
    private String title;
    @Column
    private String imageURL;
    @Column
    private String author;
    @Column
    private Integer length;
    @Column
    private String description;
    @Column
    private String link;
    @Column
    private String status;
    @Column
    private Integer page;
    @Column
    private Date publish_date;
    @Column
    private Date last_date;

    public Book() {
    }

    public Book(Long id, String title, String imageURL, String author, Integer length, String description, String link, String status, Integer page, Date publish_date, Date last_date) {
        this.id = id;
        this.title = title;
        this.imageURL = imageURL;
        this.author = author;
        this.length = length;
        this.description = description;
        this.link = link;
        this.status = status;
        this.page = page;
        this.publish_date = publish_date;
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

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Integer getLength() {
        return length;
    }

    public void setLength(Integer length) {
        this.length = length;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Integer getPage() {
        return page;
    }

    public void setPage(Integer page) {
        this.page = page;
    }

    public Date getPublish_date() {
        return publish_date;
    }

    public void setPublish_date(Date publish_date) {
        this.publish_date = publish_date;
    }

    public Date getLast_date() {
        return last_date;
    }

    public void setLast_date(Date last_date) {
        this.last_date = last_date;
    }
}
