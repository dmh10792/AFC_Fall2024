package com.example.backend.service;

import com.example.backend.entity.MovieGenre;
import com.example.backend.repositories.MovieGenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieGenreService {

   @Autowired
    private MovieGenreRepository movieGenreRepository;

   public MovieGenre saveGenre(MovieGenre movieGenre) {
       return movieGenreRepository.save(movieGenre);
   }


    public List<MovieGenre> getAll() {
       return movieGenreRepository.findAll();
    }
}
