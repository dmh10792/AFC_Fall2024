package com.example.backend.service;

import com.example.backend.entity.Game;
import com.example.backend.repositories.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameService {

    @Autowired
    private GameRepository gameRepository;

    public Game save(Game game) {
        return gameRepository.save(game);
    }

    public Game delete(Long gameId) {
        Game game = gameRepository.findById(gameId).get();
        gameRepository.delete(game);
        return game;
    }

    public List<Game> findAllGames() {
        return gameRepository.findAll();
    }

    public Game updateGame(Game newGame, Long gameId) {
        Game game = gameRepository.findById(gameId).orElse(newGame);
        game.setStatus(newGame.getStatus());
        return gameRepository.save(game);
    }
}