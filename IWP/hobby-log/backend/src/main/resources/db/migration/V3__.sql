CREATE TABLE game
(
    id             BIGINT NOT NULL,
    name           VARCHAR(255),
    cover_imageurl VARCHAR(255),
    summary        TEXT,
    rating         DOUBLE PRECISION,
    rating_count   INTEGER,
    release_date   VARCHAR(255),
    status         VARCHAR(255),
    last_date      TIMESTAMP WITHOUT TIME ZONE,
    CONSTRAINT pk_game PRIMARY KEY (id)
);

CREATE TABLE game_genres
(
    game_id   BIGINT NOT NULL,
    genres_id BIGINT NOT NULL
);

ALTER TABLE game_genres
    ADD CONSTRAINT uc_game_genres_genres UNIQUE (genres_id);

ALTER TABLE game_genres
    ADD CONSTRAINT fk_gamgen_on_game FOREIGN KEY (game_id) REFERENCES game (id);

ALTER TABLE game_genres
    ADD CONSTRAINT fk_gamgen_on_game_genre FOREIGN KEY (genres_id) REFERENCES game_genre (id);