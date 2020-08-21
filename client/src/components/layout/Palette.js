
/// COLORS 
//Chinese porcelain - blue -- primary 1849a2
//gooseberry - prurple 709068
// moss ring - green 624046



// WHITES 
//atrirum white -- eggshell
// cool concrete -- offwhite 


export const Colors = {
    primary:'#1849a2',
    secondary:'#709068',
    accent:'#624046 ',
    text:'#eee',
    textDark:'hsl(205,40,30)',
 
}


function changeUIColor(color) {
    
   if (color = 'green'){
       Colors.primary = '#709068'

   } else if (color = 'purple'){
       Colors.primary = '#624046 '
   } else if (color = 'blue'){
       Colors.primary = '#1849a2'
   }
}


export const Shadows = {
xs:'0 1px 3px rgba(0, 0, 0, 0.2)',
sm:'0 4px 6px rgba(0, 0, 0, 0.2)',
md:'0 5px 15px rgba(0, 0, 0, 0.2)',
lg:'0 10px 24px rgba(0, 0, 0, 0.2)',
xl:'0 15px 35px rgba(0, 0, 0, 0.2)'
}

 


