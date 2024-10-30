let panierProduit = JSON.parse(localStorage.getItem("panierProduits")); // recuepere les elements du panier
let divPanier = document.getElementById("panier");
let prixTotalPanier = 0; // Prix total du panier

// Si le panier n'est pas vide 
if (panierProduit != null) {
  panierProduit.forEach((produit) => {
    let prixProduit = parseFloat(produit[0].prix.replace("€", "")); // Supprime le symbole et convertit en nombre
    let prixProduitTotal = prixProduit * produit[1].quantity; // Prix total pour la quantité de ce produit

    console.log("Prix total du produit par rapport à sa quantité", prixProduitTotal);

    prixTotalPanier += prixProduitTotal; // Ajouter le prix total du produit au prix total du panier

    console.log("Prix total panier : ", prixTotalPanier);
    console.log("Type prix total panier ", typeof prixTotalPanier);
    
    divPanier.innerHTML += `
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col md-4 sm-3">
          <img src=${produit[0].image} class="img-fluid" width="100%" "/>
        </div>
        <div class="col md-4 sm-3">
          <div class="card-body">
            <h2 class="card-title">${produit[0].nom_produit}</h2>
            <hr>
            <h4>${prixProduitTotal} € - Quantité : x${produit[1].quantity}</h4>
            <button class="btn btn-success ajouterPanier my-2">Ajouter au panier</button>
          </div>
        </div>
      </div>
    </div>
`;
  })}
else {
  console.log("le panier est vide");
}

divPanier.innerHTML += `
    <div class="row">
        <h2 class="col-8">Total</h2>
        <h4 class="col-4">${prixTotalPanier} €</h4>
    </div>
    `;
