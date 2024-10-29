function afficherProduits(data) {
  const produits = document.getElementById("produits");
  // const panier = document.getElementById('shoppingCart');

  // pour chaque produits de mon json
  data.forEach((produit, index) => {
    console.log(index);

    let divProduitCard = document.createElement("div");
    divProduitCard.classList.add("card");
    divProduitCard.classList.add("col-3");

    divProduitCard.innerHTML = `
        <img src="${produit.image}" class="card-img-top alt="${produit.nom_produit}"/>
        <div class="card-body">
            <h5 class="card-title">${produit.nom_produit}</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <button  class=" btn voirDetail mb-1" onclick="voirDetail(${index})">En savoir plus</button>
        <button class="ajouterPanier mb-2" data-index="${index}">Ajouter au panier</button>
        </div>

        `;
    produits.appendChild(divProduitCard);
  });


}

function voirDetail(index){
    fetch("produits.json")
    .then((response) => response.json())
    .then((data) => {
        let produit = data[index];
        localStorage.setItem("produitDetail", JSON.stringify(produit));
        window.location.href = "detail.html";
    })
    .catch((error) => console.log(error));


//   const btnsAddToCart = document.querySelectorAll(".addToCart");
//   btnsAddToCart.forEach((btn) => {
//     btn.addEventListener("click", function () {
//       let index = this.getAttribute("data-index");
//       productsCartList.push(data[index]);
//       afficherProduits();
//     });
//   });
}

// Récupere les données inscritent dans le JSON
fetch("produits.json")
  .then((response) => response.json())
  .then((data) => afficherProduits(data))
  .catch((error) => console.log(error));
