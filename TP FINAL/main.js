
var body = document.querySelector('body');
var createDiv = document.createElement('div');
body.appendChild(createDiv);
createDiv.setAttribute('class' , 'contenaire')

for (let i = 0 ; i<= 52 ; i++){
    
    var createImg = document.createElement('img');
    createDiv.appendChild(createImg);
    createImg.setAttribute('src' , 'https://via.placeholder.com/150x150/?text=Mistery+Card' );
    
    createImg.addEventListener ("click",function (event) {
        console.log(event);
    });
    createImg.setAttribute('src' , 'https://via.placeholder.com/150x150/'+'ff00ff/?text=Dame' );
    


    


       

    
}

