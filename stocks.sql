DROP DATABASE IF EXISTS stocks;
CREATE DATABASE stocks;

\c stocks;

CREATE TABLE stocks (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  value DECIMAL
);