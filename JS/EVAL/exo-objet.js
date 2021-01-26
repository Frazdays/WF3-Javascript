// faire une liste qui s'appelera panier, elle référencera à la fois le nom du légume ainsi que sont prix à l'unité
// crée une liste qui s'appelera prixTotalsFruitsLegumes 
// cette liste devra contenir le prix total pour chaque fruit&légume. 
//Ce prix total sera variable par rapport à la quantité. 
//(à noté que cette liste au début est vide).
// crée un résultat permettant de faire le total de prixTotalsFruitsLegumes.

var prixTotalsFruitsLegumes = [];

     for(var Legume of panier){
        var Total = Legume.prixUnite * Legume.quantite ;
        prixTotalsFruitsLegumes.push(Total);
     };
     console.log("key :" ,prixTotalsFruitsLegumes , "value :", prixTotalsFruitsLegumes);

     // crée un résultat permettant de faire le total de prixTotalsFruitsLegumes.

     var prixTotal = 0;
    for(var i= 0; i<prixTotalsFruitsLegumes.length ; i++){
        prixTotal = prixTotal + prixTotalsFruitsLegumes[i] ;
        //return prixTotal;
    };
    console.log(prixTotal);
