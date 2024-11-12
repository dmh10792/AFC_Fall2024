package com.example.backend.controller;

import com.example.backend.entity.Game;
import com.example.backend.entity.Movie;
import com.example.backend.service.MovieService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movie")
public class MovieController {

    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @PostMapping
    public ResponseEntity<Movie> createMovie(@RequestBody Movie movie) {
        return ResponseEntity.ok(movieService.save(movie));
    }

    @DeleteMapping("/{movieId}")
    public ResponseEntity<HttpStatus> deleteMovie(@PathVariable Long movieId) {
        return ResponseEntity.ok(movieService.delete(movieId));
    }

    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies() {
        return ResponseEntity.ok(movieService.getAll());
    }

    @PutMapping("/{movieId}")
    public ResponseEntity<Movie> updateMovie(@RequestBody Movie movie, @PathVariable Long movieId) {
        return ResponseEntity.ok(movieService.updateMovie(movie, movieId));
    }

}
