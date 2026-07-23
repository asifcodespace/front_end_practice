document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("slider-track");
  if (!track) return;

  const slides = track.children;
  const slideCount = slides.length;

  // Clone first slide and append to end
  const firstClone = slides[0].cloneNode(true);
  track.appendChild(firstClone);

  let index = 0;
  const slideInterval = 2000; // delay
  const transitionTime = 1200; // must match CSS

  setInterval(() => {
    index++;
    track.style.transform = `translateX(-${index * 100}%)`;

    // If we reached the cloned slide
    if (index === slideCount) {
      setTimeout(() => {
        track.style.transition = "none";
        track.style.transform = "translateX(0)";
        index = 0;

        // force reflow
        track.offsetHeight;

        track.style.transition =
          "transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)";
      }, transitionTime);
    }
  }, slideInterval);
});
