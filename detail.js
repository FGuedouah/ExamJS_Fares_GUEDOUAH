let produit = JSON.parse(localStorage.getItem("produitDetail"));
console.log(produit);
let divProduitDetail = document.getElementById("produitDetail");

divProduitDetail.innerHTML = `
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

`;
