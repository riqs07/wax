use wax;
CREATE TABLE artists
(
 id 		 int NOT NULL ,
 name      varchar(255) NOT NULL ,
 genre     varchar(255) NOT NULL ,

PRIMARY KEY (id)
);

CREATE TABLE `albums`
(

 `id`     int NOT NULL ,
 `name`         varchar(255) NOT NULL ,
`artist_id`    int NOT NULL ,
 `release_year` int NULL ,
 `runtime`      int NULL ,
 `genre`        varchar(255) NULL 
 ,
 

PRIMARY KEY (`id`),
FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`)
);

CREATE TABLE `songs`
(
 `name`      varchar(255) NOT NULL ,
 `id`   int NOT NULL ,
 `artist_id` int NOT NULL ,
 `album_id` int NULL,
 `runtime`   int NULL ,

PRIMARY KEY (`id`),
FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`),
FOREIGN KEY (`album_id`) REFERENCES `albums` (`id`)
);

CREATE TABLE `Users`
(
 `id`  int NOT NULL ,
 `email`    varchar(255) NOT NULL ,
 `password` varchar(255) NOT NULL ,

PRIMARY KEY (`id`)
);



insert into artists (id,name,genre) values
(1,'Kanye West','Rap'),
(2,'Dua Lipa','Pop'),
(3,'A$AP Rocky','Rap'),
(4,'Tyler the Creator','Rap'),
(5,'Lil Uzi Vert','Rap'),
(6,'Playboy Carti','Rap'),
(7,' Lorde','Pop'),
(8,'Daft Punk','Electronic'),
(9,'Kid Cudi','Rap'),
(10,'Bob Marley','Reggae'),
(11,'Kid Cudi','Rap'),
(12,'Marvin Gaye','R&B'),
(13,'Frank Ocean','R&B'),
(14,'Billie Eilish','Pop'),
(15,'The Weeknd','R&B')
;



insert into albums (id,name,artist_id,release_year,runtime,genre) values 
(1,'Yeezus',1,2013,2401,'Rap'),
(2,'ye',1,2018,1420,'Rap'),
(3,'Graduation',1,2008,3120,'Rap'),
(4,'College Dropout',1,2004,4560,'Rap'),
(5,'Late Registration',1,2005,4200,'Rap'),
(6,'Future Nostalgia',2,2020,2401,'Pop'),
(7,'Igor',4,2019,2401,'Rap'),
(8,'Flower Boy',4,2013,2401,'Rap'),
(9,'Goblin',4,2013,2401,'Rap'),
(10,'Eternal Atake',5,2020,2401,'Rap'),
(11,'After Hours',15,2020,2401,'R&B'),
(12,'Starboy',15,2016,2401,'R&B'),
(13,'Trilogy',15,2012,2401,'R&B'),
(14,'Beauty Behind the Madness',15,2015,2401,'R&B');



insert into songs (id,artist_id,album_id,name,runtime) values 
(1,1,1,'Send it Up','124'),
(2,1,1,'Im in it','154'),
(3,1,1,'Blood on the Leaves','200'),
(4,1,1,'Bound 2','124'),
(5,1,2,'Yikes','124'),
(6,1,2,'All mine ','124'),
(7,1,2,'Violent Crimes','154'),
(8,1,2,'Ghost Town','200'),
(9,2,6,'Cool','124'),
(10,2,6,'Pretty Please','124'),
(11,2,6,'Future Nostaligia','124');


insert into users (id,email,password) values 
(1,'test@email.com','test')

