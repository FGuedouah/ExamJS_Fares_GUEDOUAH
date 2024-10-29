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
  let quantity = 1;
  const btnsAjouterPanier = document.querySelectorAll(".ajouterPanier");
  btnsAjouterPanier.forEach((btn) => {
    btn.addEventListener("click", function () {
      let index = this.getAttribute("data-index");
      // si le produit est dans le tableau ajouter 1 a quantity
      // sinon push le produit dans le tableau
      console.log("data index", data[index])
      console.log(panierProduit)
      panierProduit.forEach(produit => {
          console.log("LAAAAAAA ",produit)
      });
      
      
      if(panierProduit.find(produit => produit === data[index])){
          console.log("y a deja")
      }else{

      }
      panierProduit.push([data[index], quantity]);
      
      
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