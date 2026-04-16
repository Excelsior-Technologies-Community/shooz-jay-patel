import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/all.css'
import './styles/header.css'
import './styles/footer.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </CartProvider>
  </StrictMode>,
)
