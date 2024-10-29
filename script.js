let panierProduit = [];

function afficherProduits(data) {
  const produits = document.getElementById("produits");
  // const panier = document.getElementById('shoppingCart');

  // pour chaque produits de mon json
  data.forEach((produit, index) => {
    let divProduitCard = document.createElement("div");
    divProduitCard.classList.add("card");
    divProduitCard.classList.add("col-3");

    divProduitCard.innerHTML = `
        <img src="${produit.image}" class="card-img-top mb-2 object-fit-fill border rounded" alt="${produit.nom_produit}"/>
        <div class="card-body">
            <h4>${produit.prix}</h4>
            <h5 class="card-title">${produit.nom_produit}</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <button  class=" btn voirDetail mb-1" onclick="voirDetail(${index})">En savoir plus</button>
        <button class="ajouterPanier mb-2" data-index="${index}">Ajouter au panier</button>
        </div>
        `;
    produits.appendChild(divProduitCard);

  });
  var quantityObj = {
    quantity : 1  
  }
  const btnsAjouterPanier = document.querySelectorAll(".ajouterPanier");
  btnsAjouterPanier.forEach((btn) => {
    btn.addEventListener("click", function () {
      let index = this.getAttribute("data-index");
      
           // Vérifier si le produit est déjà dans le panier
           let produitDansPanier = panierProduit.find(
            produit => produit[0].nom_produit === data[index].nom_produit
          );

          if (produitDansPanier) {
            // Si le produit existe déjà, augmenter la quantité
            produitDansPanier[1].quantity += 1;
            console.log("Produit déjà dans le panier, quantité augmentée :", produitDansPanier[1].quantity);
          } else {
            // Sinon, ajouter le produit avec une quantité de 1
            panierProduit.push([data[index], { quantity: 1 }]);
            console.log("Produit ajouté au panier :", data[index].nom_produit);
          }  
      
      console.log(panierProduit)
      localStorage.setItem("panierProduits", JSON.stringify(panierProduit));

    });
  });
}

function voirDetail(index) {
  fetch("produits.json")
    .then((response) => response.json())
    .then((data) => {
      let produit = data[index];
      localStorage.setItem("produitDetail", JSON.stringify(produit));
      window.location.href = "detail.html";
    })
    .catch((error) => console.log(error));
}

// Récupere les données inscritent dans le JSON
fetch("produits.json")
  .then((response) => response.json())
  .then((data) => afficherProduits(data))
  .catch((error) => console.log(error));