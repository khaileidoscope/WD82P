async function fetchShopItems(api) {
  const response = await fetch(api);
  const data = await response.json();

  return data;
}

function renderShopItems(shopItems) {
  const shoppingList = document.getElementById("shopping-list");

  shopItems.forEach((shopItem) => {
    const listItem = document.createElement("li");
    listItem.classList.add("shop-item");

    listItem.innerHTML = `
            <img src="${shopItem.thumbnail}" alt="${shopItem.title}" width="250px" />
            <h2>${shopItem.title}</h2>
            <p>Price: ${shopItem.price}</p>
            <p>${shopItem.description}</p>
            <div class="photo-container">
            <img class="photo" src="${shopItem.images[0]}" alt="${shopItem.title}" />
            <img class="photo" src="${shopItem.images[1]}" alt="${shopItem.title}" />
            <img class="photo" src="${shopItem.images[2]}" alt="${shopItem.title}" />
            <img class="photo" src="${shopItem.images[3]}" alt="${shopItem.title}" />
            </div>
        `;

    shoppingList.appendChild(listItem);
  });
}

window.addEventListener("load", async () => {
  const shopItems = await fetchShopItems("https://dummyjson.com/products");
  console.log(shopItems);
  renderShopItems(shopItems.products);
});
