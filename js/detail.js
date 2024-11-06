let produit = JSON.parse(localStorage.getItem("produitDetail"));
let panierProduit = JSON.parse(localStorage.getItem("panierProduits")) || [];
let divProduitDetail = document.getElementById("produitDetail");

divProduitDetail.innerHTML = `
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4 col-sm-2">
          <img src=${produit.image} class="img-fluid w-100"/>
        </div>
        <div class="col-md-8 col-sm-4">
          <div class="card-body">
            <h2 class="card-title">${produit.nom_produit}</h2>
            <hr>
            <h4>${produit.prix}</h4>
            <p class="card-text">${produit.descriptif}</p>
            <div class="caracteristiques">
              <h4>Caractéristiques techniques</h4>
              <ul>
                <li><p class="card-text">${produit.caracteristiques.résolution}</p></li>
                <li><p class="card-text">${produit.caracteristiques.zoom}</p></li>
                <li><p class="card-text">${produit.caracteristiques.connectivité}</p></li>
                <li><p class="card-text">${produit.caracteristiques.écran}</p></li>
                </ul>
            </div>
            <button class="btn btn-success ajouterPanier my-2">Ajouter au panier</button>
          </div>
        </div>
      </div>
    </div>
`
;

// Fonction pour gérer l'ajout au panier
const btnsAjouterPanier = document.querySelectorAll(".ajouterPanier");

btnsAjouterPanier.forEach((btn) => {
  btn.addEventListener("click", function () {
    let index = this.getAttribute("data-index");
    
    // Vérifie si le produit est déjà dans le panier
    let produitDansPanier = panierProduit.find(
      produitInPanier => produitInPanier[0].nom_produit === produit.nom_produit
    );

    if (produitDansPanier) {
      // Si le produit existe déjà, augmenter la quantité
      produitDansPanier[1].quantity += 1;
      console.log("Produit déjà dans le panier, quantité augmentée :", produitDansPanier[1].quantity);
    } else {
      // Sinon, ajouter le produit avec une quantité de 1
      panierProduit.push([produit, { quantity: 1 }]);
      console.log("Produit ajouté au panier :", produit.nom_produit);
    }

    // Met à jour le localStorage
    alert("Produit ajouté au panier")
    localStorage.setItem("panierProduits", JSON.stringify(panierProduit));
    console.log("Panier mis à jour :", panierProduit);
  });
});
