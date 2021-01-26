
//faire une liste 12 fruits et légumes qui s'appelera fruitsLegumes.
//faire une liste qui référence tous ce que vous avez mis dans un panier, ce panier doit être vide au départ.


var fruitsLegumes= [artichaut , poivron , tomate , brocoli , aubergine , carotte, cerise , pamplemousse, clémentine, orange, citron, banane];
var panier =[];
while (fruitsLegumes.length>0){
    var fruitSupprime = fruitsLegumes.shift();
    panier.push(fruitSupprime);
}

console.log(panier);

