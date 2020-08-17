use wax2;


create view user_albums as 
select userID,albumfavlikes.albumID,artistID,artist,albumfavlikes.name,likes,favs,avg,score,albumfavlikes.imageURL,artists.imageURL as 'artist_imageURL',album_favorites.createdAt from album_favorites
left join albumfavlikes on album_favorites.albumID = albumfavlikes.albumID
left join artists on albumfavlikes.artistID = artists.id

;

create view user_artists as 
select userID,artistID,artists.name,imageURL,artist_followers.createdAt from artist_followers
left join users on artist_followers.userID = users.id
left join artists on artist_followers.artistID = artists.id
;


create view artist_stats as
select artists.id as 'artistID',artists.name,count(distinct artist_followers.userID) as 'Followers',
sum(distinct albumfavlikes.favs) as 'album_fav_total',sum(distinct albumfavlikes.likes) as 'album_like_total',avg(albumfavlikes.avg) as 'album_avg_rating',
sum(distinct songfavlikes.favs) as 'song_fav_total',sum( distinct songfavlikes.likes) as 'song_like_total',avg(songfavlikes.avg) as 'song_avg_rating',
 round(sum(distinct albumfavlikes.favs)*4 + sum(distinct albumfavlikes.likes)*1.8 +(avg(albumfavlikes.avg)*1.8/3)
 + (sum(distinct songfavlikes.favs))*1.9 + sum(distinct songfavlikes.likes)*1.5 +(avg(songfavlikes.avg)*1.3/3))
 as 'score'
 from artists 
 left join artist_followers on artists.id = artist_followers.artistID
left join albumfavlikes on artists.id = albumfavlikes.artistID
left join songfavlikes on artists.id = songfavlikes.artistID
group by artists.id
;





