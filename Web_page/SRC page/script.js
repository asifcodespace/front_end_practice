/* Scroll reveal */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* Animated counters */
const counters = document.querySelectorAll(".metrics h3");

counters.forEach(counter => {
  const target = +counter.innerText;
  let count = 0;

  const update = () => {
    count += Math.ceil(target / 40);
    if (count < target) {
      counter.innerText = count;
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };
  update();
});
