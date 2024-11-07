CREATE TABLE book
(
    id           BIGINT NOT NULL,
    title        VARCHAR(255),
    imageurl     VARCHAR(255),
    author       VARCHAR(255),
    length       INTEGER,
    description  TEXT,
    link         VARCHAR(255),
    status       VARCHAR(255),
    page         INTEGER,
    publish_date TIMESTAMP WITHOUT TIME ZONE,
    last_date    TIMESTAMP WITHOUT TIME ZONE,
    CONSTRAINT pk_book PRIMARY KEY (id)
);