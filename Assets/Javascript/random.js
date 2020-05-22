let image
let genrateRandomNo = function( ) {
    randmNo = Math.random() * 6 + 1
    newNo = Math.floor(randmNo) 
    console.log(newNo)
    
//  let change = function() {
//     image = document.getElementById('imag');
//     console.log(image)
//  }

if (newNo == 1) {
        image = document.getElementById('imag');
           
        image.src = 'Assets/Dices/1.png'
    } 
    

else if (newNo == 2) {
        image = document.getElementById('imag');
        
        image.src = 'Assets/Dices/2.png' 
    } 
    
else if (newNo == 3) {
        image = document.getElementById('imag');
          
        image.src = 'Assets/Dices/3.png' 
    }   
     

else if (newNo == 4) {
        image = document.getElementById('imag');
          
        image.src = 'Assets/Dices/4.png'
    }   
    

else if (newNo == 5) {
    
        image = document.getElementById('imag');
         
        image.src = 'Assets/Dices/5.png'
    }   
    

else   {
    
        image = document.getElementById('imag');
        
        image.src = 'Assets/Dices/6.png' 
    }   
    
}



let resetRandomNo = function() {
    var none = document.getElementById("imag")
    none.src = "Assets/Dices/dice.gif"
}

