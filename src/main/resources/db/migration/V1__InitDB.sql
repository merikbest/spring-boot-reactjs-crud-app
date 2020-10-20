CREATE TABLE IF NOT EXISTS employees (
  id         BIGINT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100),
  last_name  VARCHAR(100),
  city       VARCHAR(100),
  address    VARCHAR(100),
  telephone  VARCHAR(100)
);