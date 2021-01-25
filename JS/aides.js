window.onload = function(){
    // Récupérer de différentes façons les élements HTML
    // Avant
    var p = document.getElementsByTagName('p');
    var div = document.getElementsByTagName('div');
    var greenP = document.getElementById('green');
    var p1 = document.getElementsByClassName('p1');
    console.log("greenP: ",greenP, "div: ", div, "all paragraph: ", p, "p1: ", p1);
    // Aujourd'hui
    var pWithQuerySelectorByTagName = document.querySelector('p');
    var pWithQuerySelectorById = document.querySelector('#green');
    var pWithQuerySelectorByClassName =  document.querySelector('.p1');
    console.log("pWithQuerySelector: ", pWithQuerySelectorByTagName); 
    console.log("pWithQuerySelectorById: ", pWithQuerySelectorById);
    console.log("pWithQuerySelectorByClassName: ", pWithQuerySelectorByClassName);
    
    // Pour pouvoir récupérer plusieurs éléments avec querySelector
    // Il faut utiliser querySelectorAll()
    var getAllParagrapheWithQuerySelectorAll = document.querySelectorAll('p');
    console.log("getAllParagrapheWithQuerySelectorAll: ", getAllParagrapheWithQuerySelectorAll)

    // Les types de valeurs que peut prendre une variable en javascript
    var a = 1;
    var b = "";
    var c = [1, "", {}, function(){}, false, true];
    var d = {
        color: "red",
        number: 1,
        tableau: [],
        obj: {},
        func: function(){},
        bool1: true,
        bool2: false
    };

    console.log("type property", typeof d.color,"property color: ", d.color);
    console.log("type property", typeof d.number,"property number: ", d.number);
    console.log("type property", typeof d.tableau,"property tableau: ", d.tableau);
    console.log("type property", typeof d.obj,"property obj: ", d.obj);
    console.log("type property", typeof d.func,"property func: ", d.func);
    console.log("type property", typeof d.bool1,"property bool1", d.bool1);
    console.log("type property", typeof d.bool2, "property bool2", d.bool2);

    var e = function(){};
    var f = true || false;

    // Les boucles
        // Boucle for fonctionnement 
        for(var i = 0; i <= 10; i = i + 1){
            console.log("boucle for: ",i)
        }
    
        // Boucle While
        var j = 0;
        while(j <= 10){
            console.log("boucle while: ", j);
            j = j + 1;
        }
    
        // Les tableaux
        var tableau = ["Hello", "World !"];
        console.log("value tableau 0",tableau[0]);
        console.log("value tableau 1",tableau[1]);

        // mise en pratique tableau + boucle pour parcourir notre tableau

        for(k = 0; k < 2; k = k + 1){
            console.log('boucle + tableau :', 'indice: ', k, "valeur: ", tableau[k]);
        }

        // Ou bien on peut itérer dans un tableau avec la boucle du dessous

        var tableau2 = ["foo", "bar", "foo", "baz"];
        for(var item of tableau2){
            console.log("item tableau: ", item);
        }

        // Boucle pour itérer dans un objet(collection, dictionnaire)
        var monObj = {
            foo: "bar",
            hello: "world",
            age: 30
        }

        for(var keyObject in monObj){
            console.log("key: ",keyObject, "value: ", monObj[keyObject]);
        }

        var tableau3 = [];
        // Comment ajouter dans un tableau ?
        console.log("Le tableau quand il est vide: ", tableau3);
        tableau3[0] = "tomate";
        console.log("Le tableau aprés un ajout: ", tableau3);
        console.log(tableau3[0]);
    
        // Ajoute à la fin du tableau
        tableau3.push("banane");
        console.log("Ajoute banane à la fin du tableau: ",tableau3[1]);
        
        // Ajoute au début du tableau
        tableau3.unshift("poire");
        console.log("Ajoute poire au debut du tableau: ", tableau3);
    
        // supprimer le dernière élément d'un tableau
        tableau3.pop();
        console.log("la méthode pop supprime banane à la fin du tableau : ", tableau3);
    
        // supprimer le première élément d'un tableau
        tableau3.shift();
        console.log("la méthode shift supprime poire au début du tableau: ", tableau3);
    
}