const cardsContainer = document.getElementById("cardsContainer");
const wrapper = document.getElementById("cardsWrapper");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

/* ===============================
   FETCH DATA FROM API
================================ */
fetch("https://cors-anywhere.herokuapp.com/https://partner.leckereich.de/api/v1/partner")
  .then(response => response.json())
  .then(data => {
    createCards(data.data);
  })
  .catch(err => console.error("API fetch error:", err));

/* ===============================
   CREATE CARDS
================================ */
function createCards(partners) {
  partners.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img class="cover" src="${item.cover_photo_url}" alt="${item.name}">
      <div class="card-body">
        <img class="logo" src="${item.logo_url}" alt="logo">
        <h3>${item.name}</h3>
        <p>${item.type}</p>
        <button>View</button>
      </div>
    `;
    cardsContainer.appendChild(card);
  });

  updateButtons(); // init button visibility
}

/* ===============================
   HOLD TO SCROLL (ARROWS)
================================ */
let scrollInterval = null;
const speed = 100;
const scrollSpeed = 100;

function startScroll(direction) {
  stopScroll();
  scrollInterval = setInterval(() => {
    wrapper.scrollLeft += direction * speed;
    updateButtons();
  }, scrollSpeed);
}

function stopScroll() {
  if (scrollInterval) {
    clearInterval(scrollInterval);
    scrollInterval = null;
  }
}

/* Mouse */
rightBtn.addEventListener("mousedown", () => startScroll(1));
leftBtn.addEventListener("mousedown", () => startScroll(-1));
document.addEventListener("mouseup", stopScroll);
document.addEventListener("mouseleave", stopScroll);

/* Touch */
rightBtn.addEventListener("touchstart", () => startScroll(1));
leftBtn.addEventListener("touchstart", () => startScroll(-1));
document.addEventListener("touchend", stopScroll);

/* ===============================
   DRAG TO SCROLL
================================ */
let isDragging = false;
let startX;
let startScrollLeft;
const walkMultiplier = 1.2;

wrapper.addEventListener("mousedown", e => {
  isDragging = true;
  startX = e.pageX;
  startScrollLeft = wrapper.scrollLeft;
});

wrapper.addEventListener("mousemove", e => {
  if (!isDragging) return;
  const walk = (e.pageX - startX) * walkMultiplier;
  wrapper.scrollLeft = startScrollLeft - walk;
});

wrapper.addEventListener("mouseup", () => isDragging = false);
wrapper.addEventListener("mouseleave", () => isDragging = false);

wrapper.addEventListener("touchstart", e => {
  startX = e.touches[0].pageX;
  startScrollLeft = wrapper.scrollLeft;
});

wrapper.addEventListener("touchmove", e => {
  const walk = (e.touches[0].pageX - startX) * walkMultiplier;
  wrapper.scrollLeft = startScrollLeft - walk;
});

/* ===============================
   AUTO HIDE BUTTONS
================================ */
function updateButtons() {
  const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
  leftBtn.classList.toggle("hidden", wrapper.scrollLeft <= 0);
  rightBtn.classList.toggle("hidden", wrapper.scrollLeft >= maxScroll);
}

wrapper.addEventListener("scroll", updateButtons);