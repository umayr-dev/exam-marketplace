// Vanilla JS - mahsulotlarni yuklash va ko'rsatish (React emas)

export async function loadAndRenderProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products')
    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }
    const products = await response.json()
    renderProducts(products)
    return products
  } catch (error) {
    console.error('Error loading products:', error)
    return []
  }
}

// Vanilla JS funksiyasi - mahsulotlarni render qilish
function renderProducts(products) {
  const container = document.getElementById('products-container')
  if (!container) return

  container.innerHTML = ''

  products.forEach(product => {
    const productCard = document.createElement('div')
    productCard.className = 'product-card'
    
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}" class="product-image" />
      <div class="product-info">
        <h3 class="product-title">${product.title}</h3>
        <p class="product-price">$${product.price.toFixed(2)}</p>
        <button class="add-to-cart-btn" data-product-id="${product.id}">
          Add to cart
        </button>
      </div>
    `
    
    container.appendChild(productCard)
  })

  // Event listenerlarni qo'shish - "Add to cart" tugmalari uchun
  container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const productId = parseInt(btn.getAttribute('data-product-id'))
      const product = products.find(p => p.id === productId)
      if (product) {
        // Custom event yuborish - React komponenti uchun
        window.dispatchEvent(new CustomEvent('addToCart', { detail: product }))
      }
    })
  })
}

