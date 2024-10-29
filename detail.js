let produit = JSON.parse(localStorage.getItem("produitDetail"));
let divProduitDetail = document.getElementById("produitDetail")

divProduitDetail.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src=${produit.image} class="img-fluid" width="100%" "/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${produit.nom_produit}</h5>
            <p class="card-text">${produit.descriptif}</p>
            
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>

`