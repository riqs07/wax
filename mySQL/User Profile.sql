use wax2;


create view user_album as 
select userID,albumfavlikes.albumID,artistID,artist,name,likes,favs,avg,imageURL,createdAt from album_favorites
left join albumfavlikes on album_favorites.albumID = albumfavlikes.albumID
;


create view Artist_Stats as 
select artists.id,artists.name,count(distinct artist_followers.userID) as 'Followers',
sum(distinct albumfavlikes.favs) as 'Total album favs',sum(distinct albumfavlikes.likes) as 'Total Album Likes',avg(albumfavlikes.avg) as 'Avg Album Rating',
sum(distinct songfavlikes.favs) as 'Total Song favs',sum( distinct songfavlikes.likes) as 'Total Song Likes',avg(songfavlikes.avg) as 'Avg Song Rating'
 from artists 
 left join artist_followers on artists.id = artist_followers.artistID
left join albumfavlikes on artists.id = albumfavlikes.artistID
left join songfavlikes on artists.id = songfavlikes.artistID
group by artists.id
;




-- select * artists and TOTAL THERE LIKES AND FAVS IN DB 