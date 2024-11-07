CREATE TABLE movie
(
    id           BIGINT NOT NULL,
    title        VARCHAR(255),
    posterurl    VARCHAR(255),
    overview     TEXT,
    rating       DOUBLE PRECISION,
    rating_count INTEGER,
    release_date VARCHAR(255),
    status       VARCHAR(255),
    last_date    TIMESTAMP WITHOUT TIME ZONE,
    CONSTRAINT pk_movie PRIMARY KEY (id)
);

CREATE TABLE movie_genres
(
    movie_id  BIGINT NOT NULL,
    genres_id BIGINT NOT NULL
);

ALTER TABLE movie_genres
    ADD CONSTRAINT fk_movgen_on_movie FOREIGN KEY (movie_id) REFERENCES movie (id);

ALTER TABLE movie_genres
    ADD CONSTRAINT fk_movgen_on_movie_genre FOREIGN KEY (genres_id) REFERENCES movie_genre (id);