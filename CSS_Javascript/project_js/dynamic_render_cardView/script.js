// JSON DATA (normally comes from API)
let productList = [
  {
    name: "Headphone",
    description: "High quality sound & comfort",
    price: 80.0,
    imgurl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  },
  {
    name: "Smart Watch",
    description: "Modern smart watch for daily use",
    price: 120.0,
    imgurl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },
  {
    name: "Mobile Phone",
    description: "Fast performance & clean design",
    price: 450.0,
    imgurl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  }
];

const cardContainer = document.getElementById("productCards");

// Render cards
productList.forEach(product => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${product.imgurl}" alt="${product.name}">
    <div class="card-body">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <span>$${product.price}</span>
      <button>Add to Cart</button>
    </div>
  `;

  cardContainer.appendChild(card);
});

// Button click logic (event delegation – best practice)
cardContainer.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    alert("Product added to cart!");
  }
});

