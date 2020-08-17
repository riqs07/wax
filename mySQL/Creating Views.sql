
select albums.id ,artists.name,albums.id,albums.name,
count(distinct album_likes.userID) as 'Toal Likes', count(distinct album_favorites.userID) as 'Total Favs',avg(album_ratings.rating) as `avg rating`
from albums
inner join artists on albums.artistID = artists.id
left join album_likes on albums.id = album_likes.albumID
left join album_favorites on albums.id = album_favorites.albumID
left join album_ratings on albums.id = album_ratings.albumID
group by albums.name 
order by `Total Favs` desc
;


create view albumfavlikes as 
select artists.id as 'artistID' ,artists.name as `artist`,albums.id as 'albumID',albums.name,
count(distinct album_likes.userID) as 'likes', count(distinct album_favorites.userID) as 'favs',avg(album_ratings.rating) as `avg`,
round(count(distinct album_likes.userID)*3 + count(distinct album_favorites.userID)*1.8 + ((avg(album_ratings.rating)*1.8)/3)) as 'score',
release_year,runtime,albums.genre,artists.imageURL as 'artist_imageURL',albums.imageURL as 'imageURL'
from albums
inner join artists on albums.artistID = artists.id
left join album_likes on albums.id = album_likes.albumID
left join album_favorites on albums.id = album_favorites.albumID
left join album_ratings on albums.id = album_ratings.albumID
group by albums.name 
order by `avg` desc
;


 
CREATE VIEW SongFavLikes AS
select  albums.id as 'albumID',albums.name as 'album',artists.id as 'artistID', songs.id as 'songID',songs.name as 'name',
count(distinct song_likes.userID) as 'likes', count(distinct song_favorites.userID) as 'favs',avg(song_ratings.rating) as `avg`,
songs.runtime,songs.genre,linkURL
from songs
inner join albums on songs.albumID = albums.id
inner join artists on albums.artistID = artists.id
left join song_likes on songs.id = song_likes.songID
left join song_favorites on songs.id = song_favorites.songID
left join song_ratings on songs.id = song_ratings.songID
group by songs.name;






select * from albums;
