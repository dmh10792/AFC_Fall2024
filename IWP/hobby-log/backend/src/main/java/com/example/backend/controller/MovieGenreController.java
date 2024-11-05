package com.example.backend.controller;

import com.example.backend.entity.MovieGenre;
import com.example.backend.service.MovieGenreService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movie_genre")
public class MovieGenreController {

    private final MovieGenreService movieGenreService;

    public MovieGenreController(MovieGenreService movieGenreService) {
        this.movieGenreService = movieGenreService;
    }

    @PostMapping()
    public ResponseEntity<MovieGenre> createGenre(@RequestBody MovieGenre movieGenre) {
        return ResponseEntity.ok(movieGenreService.saveGenre(movieGenre));
    }

    @GetMapping()
    public List<MovieGenre> getAllGenres() {
        return movieGenreService.getAll();
    }
}
