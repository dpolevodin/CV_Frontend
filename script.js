const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation");
    }
  });
});

const skills = document.querySelectorAll(".skills__progressbar");
for (let item of skills) {
  observer.observe(item);
}
