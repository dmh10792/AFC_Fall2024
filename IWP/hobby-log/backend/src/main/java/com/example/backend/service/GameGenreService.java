package com.example.backend.service;

import com.example.backend.entity.GameGenre;
import com.example.backend.repositories.GameGenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameGenreService {

   @Autowired
    private GameGenreRepository gameGenreRepository;

   public GameGenre saveGenre(GameGenre gameGenre) {
       return gameGenreRepository.save(gameGenre);
   }

    public List<GameGenre> findAll() {
       return gameGenreRepository.findAll();
    }
}
