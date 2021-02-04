
var body = document.querySelector('body');
var createDiv = document.createElement('div');
body.appendChild(createDiv);
createDiv.setAttribute('class' , 'contenaire')

for (let i = 0 ; i<= 52 ; i++){
    
    var createImg = document.createElement('img');
    createDiv.appendChild(createImg);
    createImg.setAttribute('src' , 'https://via.placeholder.com/150x150/'+'?text=Mistery+Card' );
    
    createImg.onclick= function (e) {
        var letters = "0123456789ABCDEF";
        var colors = "";
        var nomCarte= ["roi","dame","as","valet"];
        var text ="";
    

        for (let x = 0; x <= 6; x++) {
            colors+= letters[Math.floor(Math.random()*16)];            
        }
        text+= nomCarte[Math.floor(Math.random()*3)];
        let click =document.getElementById(i);
        click.setAttribute ("src" , "https://via.placeholder.com/150x150/"+color+"?text="+text);
    }
    
}

