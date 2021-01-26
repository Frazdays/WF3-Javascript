// faire une liste qui s'appelera panier, elle référencera à la fois le nom du légume ainsi que sont prix à l'unité
// crée une liste qui s'appelera prixTotalsFruitsLegumes 
// cette liste devra contenir le prix total pour chaque fruit&légume. 
//Ce prix total sera variable par rapport à la quantité. 
//(à noté que cette liste au début est vide).
// crée un résultat permettant de faire le total de prixTotalsFruitsLegumes.

var panier = [{
    legumes : artichaud;
    prix: 5;
    quantite: 10;
 }
 {
    legumes : brocoli;
    prix: 9;
    quantite: 5;
 }]
var prixTotalsFruitsLegumes = [];
for (var legumes of panier){
    prixTotals=  legumes.prix*legumes.quantite;
    prixTotalsFruitsLegumes.push(prixTotals);
}
console.log(prixTotalsFruitsLegumes);