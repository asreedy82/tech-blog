
INSERT INTO user (username, email, password)
VALUES ("test1", "test1@email.com", "abcd1234"),
("test2", "test2@email.com", "abcd1234");


INSERT INTO blog (title, text, user_id, date_created)
VALUES ("Afternoon blog", "This is a seeded test blog post", 1, current_timestamp()),
("Evening blog", "This is another seeded test blog post, again", 2, current_timestamp());



INSERT INTO comment (text, user_id, blog_id, date_created)
VALUES ("Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.", 1, 1, current_timestamp());
