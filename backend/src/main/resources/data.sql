INSERT INTO tb_user (first_name, last_name, email, password) VALUES ('Lucas', 'Marques', 'lucas@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (first_name, last_name, email, password) VALUES ('Lara', 'Cobar', 'lara@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_GUEST');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

INSERT INTO tb_book (name, description, author, literary_genre_enum, number_of_pages, publishing_company, image, score) VALUES ('The Lord of the Rings', 'The lord of the Ring is a fantasy book', 'J. R. R. Tolkien', 'FANTASY', 1568, 'Harper Collins', 'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg', 4);
INSERT INTO tb_book (name, description, author, literary_genre_enum, number_of_pages, publishing_company, image, score) VALUES ('Flores para Algernon', 'Is a book about a man and a rat', 'Daniel Keyes', 'ROMANCE', 288, 'Editora Aleph', 'https://m.media-amazon.com/images/I/71VrMtcmE9L._SL1500_.jpg', 4);
INSERT INTO tb_book (name, description, author, literary_genre_enum, number_of_pages, publishing_company, image, score) VALUES ('The Lord of the Rings', 'The lord of the Ring is a fantasy book', 'J. R. R. Tolkien', 'FANTASY', 1568, 'Harper Collins', 'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg', 5);
INSERT INTO tb_book (name, description, author, literary_genre_enum, number_of_pages, publishing_company, image, score) VALUES ('Flores para Algernon', 'Is a book about a man and a rat', 'Daniel Keyes', 'ROMANCE', 288, 'Editora Aleph', 'https://m.media-amazon.com/images/I/71VrMtcmE9L._SL1500_.jpg', 5);
INSERT INTO tb_book (name, description, author, literary_genre_enum, number_of_pages, publishing_company, image, score) VALUES ('The Lord of the Rings', 'The lord of the Ring is a fantasy book', 'J. R. R. Tolkien', 'FANTASY', 1568, 'Harper Collins', 'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg', 3);
INSERT INTO tb_book (name, description, author, literary_genre_enum, number_of_pages, publishing_company, image, score) VALUES ('Flores para Algernon', 'Is a book about a man and a rat', 'Daniel Keyes', 'ROMANCE', 288, 'Editora Aleph', 'https://m.media-amazon.com/images/I/71VrMtcmE9L._SL1500_.jpg', 2);
INSERT INTO tb_book (name, description, author, literary_genre_enum, number_of_pages, publishing_company, image, score) VALUES ('The Lord of the Rings', 'The lord of the Ring is a fantasy book', 'J. R. R. Tolkien', 'FANTASY', 1568, 'Harper Collins', 'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg', 4);
INSERT INTO tb_book (name, description, author, literary_genre_enum, number_of_pages, publishing_company, image, score) VALUES ('Flores para Algernon', 'Is a book about a man and a rat', 'Daniel Keyes', 'ROMANCE', 288, 'Editora Aleph', 'https://m.media-amazon.com/images/I/71VrMtcmE9L._SL1500_.jpg', 4);
INSERT INTO tb_book (name, description, author, literary_genre_enum, number_of_pages, publishing_company, image, score) VALUES ('The Lord of the Rings', 'The lord of the Ring is a fantasy book', 'J. R. R. Tolkien', 'FANTASY', 1568, 'Harper Collins', 'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg', 4);
INSERT INTO tb_book (name, description, author, literary_genre_enum, number_of_pages, publishing_company, image, score) VALUES ('Flores para Algernon', 'Is a book about a man and a rat', 'Daniel Keyes', 'ROMANCE', 288, 'Editora Aleph', 'https://m.media-amazon.com/images/I/71VrMtcmE9L._SL1500_.jpg', 4);
INSERT INTO tb_book (name, description, author, literary_genre_enum, number_of_pages, publishing_company, image, score) VALUES ('The Lord of the Rings', 'The lord of the Ring is a fantasy book', 'J. R. R. Tolkien', 'FANTASY', 1568, 'Harper Collins', 'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg', 4);
INSERT INTO tb_book (name, description, author, literary_genre_enum, number_of_pages, publishing_company, image, score) VALUES ('Flores para Algernon', 'Is a book about a man and a rat', 'Daniel Keyes', 'ROMANCE', 288, 'Editora Aleph', 'https://m.media-amazon.com/images/I/71VrMtcmE9L._SL1500_.jpg', 4);

INSERT INTO tb_review (note, opinion, date, created_At, book_id, user_id) VALUES (4, 'Leitura fluída.', TIMESTAMP WITH TIME ZONE '2020-07-13T20:50:07.12345Z', NOW(), 1, 1);
INSERT INTO tb_review (note, opinion, date, created_At, book_id, user_id) VALUES (3.5, 'Apenas bom.', TIMESTAMP WITH TIME ZONE '2020-07-14T20:50:07.12345Z', NOW(), 2, 1);
INSERT INTO tb_review (note, opinion, date, created_At, book_id, user_id) VALUES (3, 'Normal. Esperava mais', TIMESTAMP WITH TIME ZONE '2020-07-15T20:50:07.12345Z', NOW(), 3, 1);
INSERT INTO tb_review (note, opinion, date, created_At, book_id, user_id) VALUES (5, 'PERFEITO!', TIMESTAMP WITH TIME ZONE '2020-07-16T20:50:07.12345Z', NOW(), 4, 2);
INSERT INTO tb_review (note, opinion, date, created_At, book_id, user_id) VALUES (2.4, 'Livro ruim.', TIMESTAMP WITH TIME ZONE '2020-07-17T20:50:07.12345Z', NOW(), 5, 2);
INSERT INTO tb_review (note, opinion, date, created_At, book_id, user_id) VALUES (3.8, 'Is a great book', TIMESTAMP WITH TIME ZONE '2020-07-18T20:50:07.12345Z', NOW(), 6, 2);
INSERT INTO tb_review (note, opinion, date, created_At, book_id, user_id) VALUES (4.3, 'Ótimo terror', TIMESTAMP WITH TIME ZONE '2020-07-19T20:50:07.12345Z', NOW(), 7, 1);
INSERT INTO tb_review (note, opinion, date, created_At, book_id, user_id) VALUES (4, 'Ótimo livro pra ler a noite.', TIMESTAMP WITH TIME ZONE '2020-07-20T20:50:07.12345Z', NOW(), 8, 1);
INSERT INTO tb_review (note, opinion, date, created_At, book_id, user_id) VALUES (5, 'Experiência incrível', TIMESTAMP WITH TIME ZONE '2020-07-21T20:50:07.12345Z', NOW(), 9, 2);
INSERT INTO tb_review (note, opinion, date, created_At, book_id, user_id) VALUES (3, 'Ok.', TIMESTAMP WITH TIME ZONE '2020-07-22T20:50:07.12345Z', NOW(), 10, 1);
INSERT INTO tb_review (note, opinion, date, created_At, book_id, user_id) VALUES (2, 'Decepcionante.', TIMESTAMP WITH TIME ZONE '2020-07-23T20:50:07.12345Z', NOW(), 11, 1);
INSERT INTO tb_review (note, opinion, date, created_At, book_id, user_id) VALUES (1, 'Pior livro que já li na minha vida.', TIMESTAMP WITH TIME ZONE '2020-07-24T20:50:07.12345Z', NOW(), 12, 2);