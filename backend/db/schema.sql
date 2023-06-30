DROP DATABASE IF EXISTS footprints;
CREATE DATABASE footprints;

\c footprints;

CREATE TABLE emissions (
    id SERIAL PRIMARY KEY,
    project_id TEXT,
    server_id TEXT,
    location TEXT,
    year INT,
    month INT,
    watt_hours INT,
    pue NUMERIC(3, 2)
);