CREATE TABLE customer (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  done BOOLEAN NOT NULL DEFAULT 0,
  createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)