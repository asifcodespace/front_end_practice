/* ===============================
   CONFIG
================================ */
const visibleCards = 5; // Change this number to control how many cards show
const gapAdjustment = 1;

const gap = 16;// must match CSS gap
/* ===============================
   DATA
================================ */
const response = {
  data: [
    { "id": 1, "name": "Electric Corner Wedding", "type": "cafe", "logo_url": "https://picsum.photos/seed/partner-logo-1/256/256", "cover_photo_url": "https://picsum.photos/seed/partner-cover-1/1200/400" },
    { "id": 2, "name": "Spicy Sushi Bar Schöne", "type": "cafe", "logo_url": "https://picsum.photos/seed/partner-logo-2/256/256", "cover_photo_url": "https://picsum.photos/seed/partner-cover-2/1200/400" },
    { "id": 3, "name": "Spicy Corner Charlotten", "type": "restaurant", "logo_url": "https://picsum.photos/seed/partner-logo-3/256/256", "cover_photo_url": "https://picsum.photos/seed/partner-cover-3/1200/400" },
    { "id": 4, "name": "Electric Kitchen Charlotten", "type": "cafe", "logo_url": "https://picsum.photos/seed/partner-logo-4/256/256", "cover_photo_url": "https://picsum.photos/seed/partner-cover-4/1200/400" },
    { "id": 5, "name": "Crispy Curry Club Mitte", "type": "ghost_kitchen", "logo_url": "https://picsum.photos/seed/partner-logo-5/256/256", "cover_photo_url": "https://picsum.photos/seed/partner-cover-5/1200/400" },
    { "id": 6, "name": "Urban Wok Kreuzberg", "type": "cafe", "logo_url": "https://picsum.photos/seed/partner-logo-6/256/256", "cover_photo_url": "https://picsum.photos/seed/partner-cover-6/1200/400" },
    { "id": 7, "name": "Sunny Haus Pankow", "type": "bakery", "logo_url": "https://picsum.photos/seed/partner-logo-7/256/256", "cover_photo_url": "https://picsum.photos/seed/partner-cover-7/1200/400" },
    { "id": 8, "name": "Urban Kiez Fhain", "type": "cafe", "logo_url": "https://picsum.photos/seed/partner-logo-8/256/256", "cover_photo_url": "https://picsum.photos/seed/partner-cover-8/1200/400" }
  ]
};

/* ===============================
   ELEMENTS
================================ */
const cardsContainer = document.getElementById("cardsContainer");
const wrapper = document.getElementById("cardsWrapper");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

/* ===============================
   CREATE CARDS
================================ */
response.data.forEach(item => {
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

/* ===============================
   DYNAMIC CARD WIDTH
================================ */
function setCardWidth() {
   
  const wrapperWidth = wrapper.clientWidth;
  const totalGap = gap * (visibleCards - gapAdjustment);
  const cardWidth = (wrapperWidth - totalGap) / visibleCards;

  document.querySelectorAll(".card").forEach(card => {
    card.style.width = `${cardWidth}px`;
  });
}

setCardWidth();
window.addEventListener("resize", setCardWidth);

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
wrapper.addEventListener("mouseup", () => isDragging = false);
wrapper.addEventListener("mouseleave", () => isDragging = false);
wrapper.addEventListener("mousemove", e => {
  if (!isDragging) return;
  const walk = (e.pageX - startX) * walkMultiplier;
  wrapper.scrollLeft = startScrollLeft - walk;
});

/* Touch drag */
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
updateButtons();