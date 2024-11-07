package com.example.backend.controller;

import com.example.backend.entity.Game;
import com.example.backend.service.GameService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/game")
public class GameController {

    private final GameService gameService;

    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @PostMapping
    public ResponseEntity<Game> createGame(@RequestBody Game game) {
        return ResponseEntity.ok(gameService.save(game));
    }

    @DeleteMapping("/{gameId}")
    public ResponseEntity<Game> deleteGame(@PathVariable Long gameId) {
        return ResponseEntity.ok(gameService.delete(gameId));
    }

    @GetMapping("/list")
    public List<Game> getAllGames() {
        return gameService.findAllGames();
    }

    @PutMapping("/{gameId}")
    public ResponseEntity<Game> updateGame(@RequestBody Game game, @PathVariable Long gameId) {
        return ResponseEntity.ok(gameService.updateGame(game, gameId));
    }
}
