use wax2;


create view user_albums as 
select userID,albumfavlikes.albumID,artistID,artist,albumfavlikes.name,likes,favs,avg,score,albumfavlikes.imageURL,artists.imageURL as 'artist_imageURL',album_favorites.createdAt from album_favorites
left join albumfavlikes on album_favorites.albumID = albumfavlikes.albumID
left join artists on albumfavlikes.artistID = artists.id
;

create view user_album_likes as
select userID,albumfavlikes.albumID,artistID,artist,albumfavlikes.name,likes,favs,avg,score,albumfavlikes.imageURL,artists.imageURL as 'artist_imageURL',album_likes.createdAt from album_likes
left join albumfavlikes on album_likes.albumID = albumfavlikes.albumID
left join artists on albumfavlikes.artistID = artists.id
;

create view user_artists as 
select userID,artistID,artists.name,imageURL,artist_followers.createdAt from artist_followers
left join users on artist_followers.userID = users.id
left join artists on artist_followers.artistID = artists.id
;

create view artist_stats as 
select artists.id as 'artistID',artists.imageURL ,artists.name,count(distinct artist_followers.userID) as 'Followers',
sum(distinct albumfavlikes.favs) as 'album_fav_total',sum(distinct albumfavlikes.likes) as 'album_like_total',avg(albumfavlikes.avg) as 'album_avg_rating',
 round(sum(distinct albumfavlikes.favs)*4 + sum(distinct albumfavlikes.likes)*1.8 +(avg(albumfavlikes.avg)*1.8/3))
 as 'score'
 from artists 
 left join artist_followers on artists.id = artist_followers.artistID
left join albumfavlikes on artists.id = albumfavlikes.artistID
group by artists.id
;

create view user_reviews as 
select userID,albums.name,review,albums.imageURL,album_reviews.updatedAt from album_reviews 
left join albums on album_reviews.albumID = albums.id;

create view user_ratings as 
select userID,albums.name,rating,albums.imageURL,album_ratings.updatedAt from album_ratings 
left join albums on album_ratings.albumID = albums.id;







