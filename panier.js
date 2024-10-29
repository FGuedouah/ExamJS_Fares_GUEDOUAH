let panierProduit = JSON.parse(localStorage.getItem("panierProduits"));
console.log(panierProduit)
let divPanier = document.getElementById("panier");
let sum = 0
panierProduit.forEach(produit => {
    let prix = (produit.prix).replace("€", "");
    sum += parseInt(parseFloat(prix)*100)
});
sum = sum/100

if(panierProduit!=null)
    panierProduit.forEach(produit => {
        divPanier.innerHTML += `
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col md-4 sm-3">
          <img src=${produit.image} class="img-fluid" width="100%" "/>
        </div>
        <div class="col md-4 sm-3">
          <div class="card-body">
            <h2 class="card-title">${produit.nom_produit}</h2>
            <hr>
            <h4>${produit.prix}</h4>
            <button class="btn btn-success ajouterPanier my-2">Ajouter au panier</button>
          </div>
        </div>
      </div>
    </div>
`
 });
else{
    console.log("le panier est vide")}

divPanier.innerHTML+=`
    <div class="row">
        <h2 class="col-8">Total</h2>
        <h4 class="col-4">${sum} €</h4>
    </div>
    `