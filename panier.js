let panierProduit = JSON.parse(localStorage.getItem("panierProduits")); // recuepere les elements du panier
let divPanier = document.getElementById("panier");
let prixTotalPanier = 0; // Prix total du panier

function afficherPanier() {
    divPanier.innerHTML = ""; // Réinitialise l'affichage du panier
    prixTotalPanier = 0; // Réinitialise le total
    
    // Si le panier n'est pas vide
    if (panierProduit.length > 0) {
      panierProduit.forEach((produit, index) => {
        let prixProduit = parseFloat(produit[0].prix.replace("€", "")); // Supprime le symbole et convertit en nombre
        let prixProduitTotal = prixProduit * produit[1].quantity; // Prix total pour la quantité de ce produit
  
        prixTotalPanier += prixProduitTotal; // Ajouter le prix total du produit au prix total du panier
        
        // Affiche chaque produit
        divPanier.innerHTML += `
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col md-4 sm-3">
              <img src=${produit[0].image} class="img-fluid" width="100%" />
            </div>
            <div class="col md-4 sm-3">
              <div class="card-body">
                <h2 class="card-title">${produit[0].nom_produit}</h2>
                <hr>
                <div>
                    <h4>${prixProduitTotal.toFixed(2)} € - </h4>
                    <div class="d-flex align-items-center">
                        <button class="ajouterQuantite" data-index="${index}">+</button>
                        <h4 class="mx-2">x${produit[1].quantity}</h4>
                        <button class="supprimerQuantite" data-index="${index}">-</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;
      });
  divPanier.innerHTML += `
    <div class="row">
        <h2 class="col-8">Total</h2>
        <h4 class="col-4">${prixTotalPanier} €</h4>
    </div>
    `;
}
   else {
    console.log("le panier est vide dzada");
  divPanier.innerHTML += `
      <div class="text-center">
          <h2>Panier vide</h2>
      </div>
    `
  }

   // Ajoute les événements aux boutons après chaque rendu
   gererQuantite();
}


// Fonction pour ajouter les événements aux boutons + et -
function gererQuantite() {
  const btnsAjouterQuantite = document.querySelectorAll(".ajouterQuantite");
  const btnsSupprimerQuantite = document.querySelectorAll(".supprimerQuantite");

  btnsAjouterQuantite.forEach((btn) => {
    btn.addEventListener("click", function () {
      let index = parseInt(this.getAttribute("data-index"));

      // Augmente la quantité du produit et met à jour le panier
      panierProduit[index][1].quantity += 1;
      localStorage.setItem("panierProduits", JSON.stringify(panierProduit));
      afficherPanier();
    });
  });

  btnsSupprimerQuantite.forEach((btn) => {
    btn.addEventListener("click", function () {
      let index = parseInt(this.getAttribute("data-index"));

      // Diminue la quantité si elle est supérieure à 1, sinon retire le produit du panier
      if (panierProduit[index][1].quantity > 1) {
        panierProduit[index][1].quantity -= 1;
      } else {
        panierProduit.splice(index, 1); // Retire le produit si la quantité est 0
      }

      localStorage.setItem("panierProduits", JSON.stringify(panierProduit));
      afficherPanier();
    });
  });
}

afficherPanier();


