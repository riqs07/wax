use wax;
create table album_likes(
  user_id INTEGER NOT NULL,
    album_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(album_id) REFERENCES albums(id),
    PRIMARY KEY(user_id, album_id)
);

create table album_favorites(
  user_id INTEGER NOT NULL,
    album_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(album_id) REFERENCES albums(id),
    PRIMARY KEY(user_id, album_id)
);


create table song_likes(
  user_id INTEGER NOT NULL,
    song_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(song_id) REFERENCES songs(id),
    PRIMARY KEY(user_id, song_id)
);
create table song_ratings(
  user_id INTEGER NOT NULL,
    song_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    rating INTEGER NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(song_id) REFERENCES songs(id),
    PRIMARY KEY(user_id, song_id)
);

create table album_ratings(
  user_id INTEGER NOT NULL,
    album_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    rating INTEGER NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(album_id) REFERENCES albums(id),
    PRIMARY KEY(user_id, album_id)
);

create table song_favorites(
  user_id INTEGER NOT NULL,
    song_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(song_id) REFERENCES songs(id),
    PRIMARY KEY(user_id, song_id)
);


create table artist_favorites(
  user_id INTEGER NOT NULL,
    artist_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(artist_id) REFERENCES artists(id),
    PRIMARY KEY(user_id, artist_id)
);

insert into song_likes (user_id,song_id) value
(1,1),(1,2),(1,3),(1,4),(2,5),
(2,10),(2,7),(2,9),(2,1),(3,10),
(3,1),(3,2),(3,3),(3,4),(3,5);

insert into song_favorites (user_id,song_id) value
(1,1),(1,2),(1,3),(1,4),(2,5),
(2,10),(2,7),(2,9),(2,1),(3,10),
(3,1),(3,2),(3,3),(3,4),(3,5);


insert into song_ratings (user_id,song_id,rating) value
(1,1,10),(1,2,9),(1,3,8),(1,4,10),(2,5,8),
(2,10,3),(2,7,5),(2,9,6),(2,1,1),(3,10,3),
(3,1,4),(3,2,6),(3,3,9),(3,4,10),(3,5,10);


insert into album_likes (user_id,album_id) value
(2,10),(2,7),(2,9),(3,10);


insert into album_favorites (user_id,album_id) value
(1,1),(1,2),(1,3),(1,4),(2,5),
(2,10),(2,7),(2,9),(2,1);


insert into album_ratings (user_id,album_id,rating) value
(1,1,10),(1,2,9),(1,3,8),(1,4,10),(2,5,8),
(2,10,3),(2,7,5),(2,9,6),(2,1,1),(3,10,3),
(3,1,4),(3,2,6),(3,3,9),(3,4,10),(3,5,10);



insert into album_likes (user_id,album_id) values
(1,1),(1,2),(2,1),(3,4),(3,2),(1,10);

insert into album_favorites (user_id,album_id) values
(1,10),(3,2),(2,12),(3,4),(3,9),(1,12);

insert into artist_favorites (user_id,artist_id) values
(1,1),(10,1),(14,1),(6,1),(10,15),(12,15);

-- genre leader board 
select genre,count(*) as 'favs' from artists inner join artist_favorites on artists.id = artist_favorites.user_id group by genre;

-- album leader board 
select *,albums.name as 'album' from album_likes inner join albums on album_id = albums.id group by albu;
-- artist leader board 