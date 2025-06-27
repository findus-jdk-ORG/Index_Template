const container = document.getElementById("portfolio-container");

portfolioItems.forEach((item) => {
  const card = document.createElement("div");
  card.className = "card animate-fade-up"; // Add animation class
  card.innerHTML = `
    <img src="${item.image}" alt="${item.title} Thumbnail" class="thumbnail" />
    <div class="card-hover">
      <h2>${item.title}</h2>
      <div class="hover-icons">
        <a href="${item.gitlink}" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="${item.link}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
      </div>
      <div class="tech-stack">
        ${item.tech.map((tech) => `<span class="tech-badge">${tech}</span>`).join('')}
      </div>
    </div>
  `;
  container.appendChild(card);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
      observer.unobserve(entry.target); // Animate once
    }
  });
}, {
  threshold: 1
});

document.querySelectorAll('.animate-fade-up').forEach(el => observer.observe(el));