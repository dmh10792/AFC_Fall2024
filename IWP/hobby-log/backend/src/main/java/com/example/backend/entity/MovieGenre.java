package com.example.backend.entity;

import jakarta.persistence.*;

@Table
@Entity
public class MovieGenre {

    @Column
    @Id
    private Long id;
    @Column
    private String name;

    public MovieGenre() {
    }

    public MovieGenre(Long id, String name) {
        this.id = id;
        this.name = name;
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
}
