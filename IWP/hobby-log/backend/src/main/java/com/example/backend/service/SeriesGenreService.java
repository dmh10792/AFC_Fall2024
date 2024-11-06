package com.example.backend.service;

import com.example.backend.entity.SeriesGenre;
import com.example.backend.repositories.SeriesGenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SeriesGenreService {

   @Autowired
    private SeriesGenreRepository seriesGenreRepository;

   public SeriesGenre saveGenre(SeriesGenre seriesGenre) {
       return seriesGenreRepository.save(seriesGenre);
   }


    public List<SeriesGenre> getAll() {
       return seriesGenreRepository.findAll();
    }
}
