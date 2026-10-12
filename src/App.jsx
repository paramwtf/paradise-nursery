import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ProductList from './components/ProductList'
import CartItem from './components/CartItem'
import AboutUs from './components/AboutUs'
import './App.css'

function Home() {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <h2>🌿 Paradise Nursery</h2>
      </nav>

      <main className="hero">
        <div className="hero-content">
          <h1>Paradise Nursery</h1>
          <h2>Bring Nature Into Your Home</h2>
          <p>
            Discover beautiful houseplants that brighten your space,
            purify your air, and bring peace to your everyday life.
          </p>
          <Link to="/plants" className="get-started">
            Get Started
          </Link>
          <div style={{ marginTop: 20 }}>
            <Link to="/about" style={{ color: 'white' }}>
              About Us
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App