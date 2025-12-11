import { useState, useEffect, useRef } from 'react'
import './App.css'
import Cart from './components/Cart'
import { loadAndRenderProducts } from './utils/productsRenderer'

function App() {
  const [cart, setCart] = useState([])
  const addToCartRef = useRef(null)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (e) {
        console.error('Error loading cart from localStorage:', e)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  // Vanilla JS - mahsulotlarni yuklash va ko'rsatish (React emas)
  useEffect(() => {
    loadAndRenderProducts()
  }, [])

  // Vanilla JS'dan kelgan "Add to cart" eventlarini qabul qilish
  useEffect(() => {
    addToCartRef.current = addToCart

    const handleAddToCart = (event) => {
      if (addToCartRef.current) {
        addToCartRef.current(event.detail)
      }
    }

    window.addEventListener('addToCart', handleAddToCart)

    return () => {
      window.removeEventListener('addToCart', handleAddToCart)
    }
  }, [])

  return (
    <div className="app">
      <header className="app-header">
        <h1>Mini Marketplace</h1>
      </header>
      <div className="app-container">
        <section className="products-section">
          <h2>Products</h2>
          <div id="products-container"></div>
        </section>
        <section className="cart-section">
          <Cart
            cart={cart}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />
        </section>
      </div>
    </div>
  )
}

export default App

