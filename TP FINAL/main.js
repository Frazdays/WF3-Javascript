
var body = document.querySelector('body');
var createDiv = document.createElement('div');
body.appendChild(createDiv);
createDiv.setAttribute('class' , 'contenaire');

var letters = "0123456789ABCDEF";
var defaultLinkCard = "https://via.placeholder.com/"
var widthCard = "150";
var formatTextCard = "?text=";
var defaultTextCard = "MisteryCard";
var nomCarte= ["roi","dame","as","valet"];
var typeCards = ["Trefle", "Carreau", "Pique", "Coeur"];
var typeCardsWithNameCards = [];
var typeCardWithNumber = []

for(var i = 0; i < typeCards.length; i++){
    typeCardsWithNameCards[i] = []
    for(var j = 0; j < nomCarte.length; j++){
        typeCardsWithNameCards[i][j] = typeCards[i] +" "+ nomCarte[j]; 
    }    
}

for(var i = 0; i < typeCards.length; i++){
    typeCardWithNumber[i] = []
    for(var j = 0; j < 9; j++){
        typeCardWithNumber[i][j] = typeCards[i] +" "+ (j + 2); 
    }    
}

const gameCards = typeCardsWithNameCards.concat(typeCardWithNumber);    

for (let i = 0 ; i<= 52 ; i++){
    
    var createImg = document.createElement('img');
    createDiv.appendChild(createImg);
    createImg.setAttribute('src' , defaultLinkCard + widthCard  + formatTextCard + defaultTextCard );
    
    // createImg.onclick= function (e) {
    //     var letters = "0123456789ABCDEF";
    //     var colors = "";
    //     var nomCarte= ["roi","dame","as","valet"];
    //     var text ="";
    

    //     for (let x = 0; x <= 6; x++) {
    //         colors+= letters[Math.floor(Math.random()*16)];            
    //     }
    //     text+= nomCarte[Math.floor(Math.random()*3)];
    //     let click =document.getElementById(i);
    //     click.setAttribute ("src" , "https://via.placeholder.com/150x150/"+color+"?text="+text);
    // }
    createImg.onclick = function(e){
        var color = "";
        var text ="";

        for (let x = 0; x < 5; x++) {
            color+= letters[Math.floor(Math.random()*letters.length)];            
        }

    /**
     * @ToDo
     * Random Text on array  @gameCards
     */ 
      
      e.target.src = defaultLinkCard+widthCard+ '/'+color+'/'+ 'FFFFF'+'/'+formatTextCard;

    }
    
}

