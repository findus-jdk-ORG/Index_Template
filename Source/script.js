const container = document.getElementById("portfolio-container");
const loader = document.getElementById("loader");
portfolioItems.forEach((item) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${item.image}" alt="${item.title} Thumbnail" class="thumbnail" />
    <div class='flex'>
        <h2>${item.title}</h2>
        <a href="${item.link}" target="_blank" class="btn">Preview <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
    </div>
  `;
  container.appendChild(card);
});