package com.example.backend.service;

import com.example.backend.entity.Series;
import com.example.backend.repositories.SeriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public List<Series> getAll() {
        return seriesRepository.findAll();
    }

    public Series updateSeries(Series newSeries, Long seriesId) {
        Series series = seriesRepository.findById(seriesId).orElse(newSeries);
        series.setStatus(newSeries.getStatus());
        series.setSeason(newSeries.getSeason());
        series.setEpisode(newSeries.getEpisode());
        series.setLast_date(newSeries.getLast_date());
        return seriesRepository.save(series);
    }
}
