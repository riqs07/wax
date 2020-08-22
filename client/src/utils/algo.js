
// These dont get called anywhere but This is score algo that SQL perfoms to get scores 
// MAinly so i can tweak faster without having to redo all my views constantly

//add score to main views 
export function calculateAlbumScore(likes,favs,avg){
    let score = (favs*3 + likes*1.8 + ((avg*1.8)/3))
    
    return Math.floor(score)
}


export function calculateArtistScore(likes,favs,avg){
    let score = (favs*1.8 + likes + ((avg*1.3)/2))
    
    return score
}


// Album Modal Turning score to letter grade 

export function convertScoreToGrade(score){
    let grade = '';
 
    if (score < 40){
        grade = 'D'
    } else if (score >= 40 && score < 50){
        grade = 'C'
    } else if ( score >= 50 && score < 60){
        grade = 'B'
    }else if ( score >= 60 && score < 70){
        grade = 'A'
    }else if ( score >= 70){
        grade = 'S'
    }
    return grade
    
}

export function convertArtistScoreToGrade(score){
    let grade = '';
 
    if (score < 30){
        grade = 'D'
    } else if (score >= 30 && score < 60){
        grade = 'C'
    } else if ( score >= 60 && score < 90){
        grade = 'B'
    }else if ( score >= 90 && score < 120){
        grade = 'A'
    }else if ( score >= 120){
        grade = 'S'
    }
    return grade
}


const guests = [
    {email:"bob@gmail.com",password:"horsepurse"},
    {email:"tom@gmail.com",password:"horsepurse"},
    {email:"jim@gmail.com",password:"horsepurse"},
    {email:"sam@gmail.com",password:"horsepurse"},
]

console.log('Test accounts ', guests)