package com.example.backend.service;

import com.example.backend.entity.Movie;
import com.example.backend.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;


    public Movie save(Movie movie) {
        return movieRepository.save(movie);
    }

    public HttpStatus delete(Long movieId) {
        Movie movie = movieRepository.findById(movieId).get();
        movieRepository.delete(movie);
        return HttpStatus.OK;
    }

    public List<Movie> getAll() {
        return movieRepository.findAll();
    }
}
