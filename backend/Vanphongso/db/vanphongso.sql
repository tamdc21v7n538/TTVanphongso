CREATE DATABASE IF NOT EXISTS vanphongso
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;



USE vanphongso;
CREATE TABLE users (
                       id BIGINT AUTO_INCREMENT PRIMARY KEY,
                       username VARCHAR(50) NOT NULL,
                       full_name VARCHAR(100),
                       role VARCHAR(30) NOT NULL
);


CREATE TABLE rooms (
                       id BIGINT AUTO_INCREMENT PRIMARY KEY,
                       name VARCHAR(100) NOT NULL,
                       capacity INT NOT NULL,
                       location VARCHAR(100),
                       status VARCHAR(30) DEFAULT 'AVAILABLE'
);

CREATE TABLE assets (
                        id BIGINT AUTO_INCREMENT PRIMARY KEY,
                        name VARCHAR(100) NOT NULL,
                        quantity INT NOT NULL,
                        status VARCHAR(30) DEFAULT 'AVAILABLE'
);

CREATE TABLE room_bookings (
                               id BIGINT AUTO_INCREMENT PRIMARY KEY,
                               room_id BIGINT NOT NULL,
                               start_time DATETIME NOT NULL,
                               end_time DATETIME NOT NULL,
                               purpose VARCHAR(255),
                               approved BOOLEAN DEFAULT FALSE,

                               CONSTRAINT fk_room_booking
                                   FOREIGN KEY (room_id)
                                       REFERENCES rooms(id)
                                       ON DELETE CASCADE
);


INSERT INTO users (username, full_name, role)
VALUES
    ('Tam', 'Tran Huu Tam', 'USER'),
    ('Truyen', 'Nguyen Ngoc Truyen', 'ADMIN');

INSERT INTO rooms (name, capacity, location)
VALUES
    ('Phong hop 1', 30, 'Tang 1'),
    ('Phong hop 2', 40, 'Tang 2');

INSERT INTO assets (name, quantity, status)
VALUES
    ('May chieu', 2, 'AVAILABLE'),
    ('Tivi 65 inch', 1, 'AVAILABLE'),
    ('Micro', 4, 'AVAILABLE');

INSERT INTO room_bookings (room_id, start_time, end_time, purpose)
VALUES
    (1, '2026-02-10 06:00:00', '2026-02-10 08:00:00', 'Thuc tap nhom 1 lan 1');

