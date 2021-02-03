window.onload = function(){

    //Faire une fonction qui vous permettra de créer 
    //n'importe quel éléments HTML qui retournera
    // cet élément html



    // Faire une fonction qui va créer un élément div
    // et qui va créer un enfant tel qu'un paragraphe et 
    //ce paragraphe doit contenir votre prénom

    /*function parentEnfant(parent , enfant) {

        var creatediv = document.createElement(parent);
        creatediv.setAttribute('class', 'square');
        creatediv.setAttribute('id', 'centrerDiv');
        var createP=document.createElement(enfant);                                                         
        createP.setAttribute('class', 'paragraph1');
        creatediv.appendChild(createP);
        createP.innerText = "Houda Sophia Fatima Nina !";
       return creatediv;
      
     }
      
    console.log(parentEnfant('div','p'));

    //Faire une fonction qui va créer 3 élément html (div) 
    //c'est trois div auront des attributs différent qui seront:
    //id div1, id div2 et id div3 ainsi qu'une class square pour chaque div créer plus une class color1, color2, color3, 
    //une fois fais l'afficher dans la console */

      function divItem (){ 

        var createDiv1 = document.createElement('div');
        createDiv1.setAttribute('class', 'iddiv1');
        var createP1 = document.createElement('p');
        createP1.setAttribute('class', 'color1');
        createDiv1.setAttribute('class', 'square');
        createP1.innerText = "Houda";
        var createDiv2 = document.createElement('div');
        createDiv2.setAttribute('class', 'iddiv2');
        var createP2 = document.createElement('p');
        createDiv2.setAttribute('class', 'square');
        createP2.setAttribute('class', 'color2');
        createP2.innerText = "Fatima";
        var createDiv3 = document.createElement('div');
        createDiv3.setAttribute('class', 'iddiv3');
        var createP3 = document.createElement('p');
        createP3.setAttribute('class', 'color3');
        createDiv3.setAttribute('class', 'square');
        createP3.innerText = "Nina";
       
        var callbody=document.querySelector('body');
        callbody.appendChild(createDiv1);
        callbody.appendChild(createDiv2);
        callbody.appendChild(createDiv3);
        createDiv1.appendChild(createP1);
        createDiv2.appendChild(createP2);
        createDiv3.appendChild(createP3);


        console.log(createDiv1,createDiv2,createDiv3);
      }
    
   console.log(divItem());
    
}