package com.example.backend.controller;

import com.example.backend.entity.GameGenre;
import com.example.backend.service.GameGenreService;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/game_genre")
public class GameGenreController {

    private final GameGenreService gameGenreService;

    public GameGenreController(GameGenreService gameGenreService) {
        this.gameGenreService = gameGenreService;
    }

    @PostMapping()
    public ResponseEntity<GameGenre> createGenre(@RequestBody GameGenre gameGenre) {
        return ResponseEntity.ok(gameGenreService.saveGenre(gameGenre));
    }

    @GetMapping()
    public List<GameGenre> getAllGenres() {
        return gameGenreService.findAll();
    }
}
