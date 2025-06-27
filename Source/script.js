const container = document.getElementById("portfolio-container");
const loader = document.getElementById("loader");
portfolioItems.forEach((item) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${item.image}" alt="${item.title} Thumbnail" class="thumbnail" />
    <div class='flex'>
        <h2>${item.title}</h2>
        <div class='flex'>
          <a href="${item.gitlink}" target="_blank" class="btn"><i class="fa-solid fa-code"></i></a>
        <a href="${item.link}" target="_blank" class="btn"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
    </div>
  `;
  container.appendChild(card);
});