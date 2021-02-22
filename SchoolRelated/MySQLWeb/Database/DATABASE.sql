-- SETUP

DROP DATABASE www;
CREATE DATABASE www;
USE www;

-- 

SET SQL_SAFE_UPDATES = 0;

-- TABLE

CREATE TABLE adminusers (
	id INT AUTO_INCREMENT,
    username VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(50),
	PRIMARY KEY (id)
);

CREATE TABLE users (
	id INT AUTO_INCREMENT,
    username VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(50),
    PRIMARY KEY (id)
);

CREATE TABLE logs (
	id INT,
	username VARCHAR(50),
    date DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id) REFERENCES users(id),
    FOREIGN KEY (id) REFERENCES adminusers(id)
);

--

-- SELECT
 
SELECT * FROM users;
SELECT * FROM adminusers;
SELECT * FROM logs;

-- 

-- WHERE

SELECT * FROM users
WHERE username = 'Mathew';


--

-- INSERTS 

INSERT INTO users (username, email, password)
VALUES ('Carl', 'carl@email.com', '1234');

INSERT INTO users (username, email, password)
VALUES ('Mathew', 'mathew@email.com', '1234');

INSERT INTO users (username, email, password)
VALUES ('Osman', 'osman@email.com', '1234');

INSERT INTO adminusers (username, email, password)
VALUES ('Carl', 'carl@email.com', '1234');

INSERT INTO adminusers (username, email, password)
VALUES ('Mathew', 'mathew@email.com', '1234');

INSERT INTO adminusers (username, email, password)
VALUES ('Osman', 'osman@email.com', '1234');

INSERT INTO logs (username, date)
VALUE ('Mathew', current_time());

INSERT INTO logs (username, date)
VALUE ('Osman', current_time());

INSERT INTO logs (username, date)
VALUE ('Carl', current_time());

-- 


-- DELETE 

DELETE FROM users;
DELETE FROM adminusers;
DELETE FROM logs;

-- 

-- ALTER 

ALTER TABLE logs
DROP COLUMN date;

ALTER TABLE logs
ADD date DATETIME(6);

SELECT current_time();

--