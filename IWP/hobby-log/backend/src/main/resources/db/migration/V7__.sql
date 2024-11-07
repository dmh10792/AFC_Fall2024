CREATE TABLE series
(
    id             BIGINT NOT NULL,
    title          VARCHAR(255),
    posterurl      VARCHAR(255),
    overview       TEXT,
    rating         DOUBLE PRECISION,
    rating_count   INTEGER,
    first_air_date VARCHAR(255),
    status         VARCHAR(255),
    season         INTEGER,
    episode        INTEGER,
    last_date      TIMESTAMP WITHOUT TIME ZONE,
    CONSTRAINT pk_series PRIMARY KEY (id)
);

CREATE TABLE series_genres
(
    series_id BIGINT NOT NULL,
    genres_id BIGINT NOT NULL
);

ALTER TABLE series_genres
    ADD CONSTRAINT fk_sergen_on_series FOREIGN KEY (series_id) REFERENCES series (id);

ALTER TABLE series_genres
    ADD CONSTRAINT fk_sergen_on_series_genre FOREIGN KEY (genres_id) REFERENCES series_genre (id);