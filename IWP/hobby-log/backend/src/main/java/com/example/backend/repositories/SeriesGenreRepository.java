package com.example.backend.repositories;

import com.example.backend.entity.SeriesGenre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SeriesGenreRepository extends JpaRepository<SeriesGenre, Long> {
}
