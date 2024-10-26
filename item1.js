const relatedItems = [
    { title: 'Item 1', img: 'vegetables.jpg', link: 'link1.html' },
    { title: 'Item 2', img: 'fruits.jpg', link: 'link2.html' },
    { title: 'Item 3', img: 'dairy.jpg', link: 'link3.html' },
    { title: 'Item 4', img: 'snacks.jpg', link: 'link4.html' }
    // Add more items as needed
  ];
  
  const itemsContainer = document.querySelector('.items-container');
  
  relatedItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
  
    itemDiv.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p>${item.price}</p>
    <button onclick="window.location.href='${item.link}'"><a href="products.html">View Item</a></button>
    `;
    itemsContainer.appendChild(itemDiv);
  });
  
