const productContainer = document.querySelector('#products');

fetch('JFKProducts.json')
  .then(response => response.json())
  .then(data => {
    for (const product of data) {
      const productElement = document.createElement('div');
      productElement.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
        <img src="${product.image}" alt="${product.name}" />
      `;
      productContainer.appendChild(productElement);
    }
  });
