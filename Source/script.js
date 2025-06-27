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

let loadedImages = 0;
portfolioItems.forEach((item, index) => {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = `${item.title} Thumbnail`;
  img.className = "thumbnail";

  // Image load handler
  img.onload = () => {
    loadedImages++;
    if (loadedImages === portfolioItems.length) {
      loader.style.display = "none";
    }
  };

  img.onerror = () => {
  loadedImages++;
  if (loadedImages === portfolioItems.length) {
    loader.style.display = "none";
  }
};

  const title = document.createElement("h2");
  title.textContent = item.title;

  const link = document.createElement("a");
  link.href = item.link;
  link.target = "_blank";
  link.className = "btn";
  link.innerHTML = `Preview <i class="fa-solid fa-arrow-up-right-from-square"></i>`;

  const flexDiv = document.createElement("div");
  flexDiv.className = "flex";
  flexDiv.appendChild(title);
  flexDiv.appendChild(link);

  card.appendChild(img);
  card.appendChild(flexDiv);
  container.appendChild(card);
});