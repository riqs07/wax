
// These dont get called anywhere but This is score algo that SQL perfoms to get scores 
// MAinly so i can tweak faster without having to redo all my views constanylt

//add score to main views 
export function calculateAlbumScore(likes,favs,avg){
    let score = (favs*3 + likes*1.8 + ((avg*1.8)/3))
    
    return Math.floor(score)
}


export function calculateArtistScore(likes,favs,avg){
    let score = (favs*1.8 + likes + ((avg*1.3)/2))
    
    return score
}


