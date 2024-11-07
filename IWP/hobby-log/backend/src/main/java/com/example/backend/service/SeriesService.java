package com.example.backend.service;

import com.example.backend.entity.Series;
import com.example.backend.repositories.SeriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class SeriesService {

    @Autowired
    private SeriesRepository seriesRepository;

    public Series save(Series series) {
        return seriesRepository.save(series);
    }

    public HttpStatus delete(Long seriesId) {
        Series series = seriesRepository.findById(seriesId).get();
        seriesRepository.delete(series);
        return HttpStatus.OK;
    }

}
