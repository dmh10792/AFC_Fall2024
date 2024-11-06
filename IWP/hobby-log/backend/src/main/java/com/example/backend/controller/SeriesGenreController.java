package com.example.backend.controller;

import com.example.backend.entity.SeriesGenre;
import com.example.backend.service.SeriesGenreService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/series_genre")
public class SeriesGenreController {

    private final SeriesGenreService seriesGenreService;

    public SeriesGenreController(SeriesGenreService seriesGenreService) {
        this.seriesGenreService = seriesGenreService;
    }

    @PostMapping()
    public ResponseEntity<SeriesGenre> createGenre(@RequestBody SeriesGenre seriesGenre) {
        return ResponseEntity.ok(seriesGenreService.saveGenre(seriesGenre));
    }

    @GetMapping()
    public List<SeriesGenre> getAllGenres() {
        return seriesGenreService.getAll();
    }
}
