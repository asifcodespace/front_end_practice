const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Product added to cart!");
  });
});

let productList = [
  {
   "name" : "Headphone",
   "description" : "High quality sound & comfort",
   "price" : 80.0,
   "imgurl" : "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"

  }
]