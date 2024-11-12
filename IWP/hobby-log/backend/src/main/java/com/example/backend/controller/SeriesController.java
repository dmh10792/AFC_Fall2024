package com.example.backend.controller;

import com.example.backend.entity.Series;
import com.example.backend.service.SeriesService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/series")
public class SeriesController {

    private final SeriesService seriesService;

    public SeriesController(SeriesService seriesService) {
        this.seriesService = seriesService;
    }

    @PostMapping
    public ResponseEntity<Series> createSeries(@RequestBody Series series) {
        return ResponseEntity.ok(seriesService.save(series));
    }

    @DeleteMapping("/{seriesId}")
    public ResponseEntity<HttpStatus> deleteSeries(@PathVariable Long seriesId) {
        return ResponseEntity.ok(seriesService.delete(seriesId));
    }

    @GetMapping
    public ResponseEntity<List<Series>> getAllSeries() {
        return ResponseEntity.ok(seriesService.getAll());
    }

    @PutMapping("/{seriesId}")
    public ResponseEntity<Series> updateSeries(@RequestBody Series series, @PathVariable Long seriesId) {
        return ResponseEntity.ok(seriesService.updateSeries(series, seriesId));
    }

}
