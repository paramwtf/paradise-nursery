import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import plants from '../data/plants'
import { addToCart } from '../redux/CartSlice'
import './ProductList.css'

function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)

  const categories = [...new Set(plants.map(plant => plant.category))]

  return (
    <div className="shop-page">
      <nav className="shop-navbar">
        <Link to="/" className="brand">🌿 Paradise Nursery</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">
            🛒 Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
          </Link>
        </div>
      </nav>

      <header className="shop-heading">
        <h1>Our Houseplants</h1>
        <p>Find the perfect green companion for your home.</p>
      </header>

      {categories.map(category => (
        <section className="plant-category" key={category}>
          <h2>{category}</h2>

          <div className="plant-grid">
            {plants.filter(plant => plant.category === category).map(plant => {
              const added = cartItems.some(item => item.id === plant.id)

              return (
                <article className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <div className="plant-info">
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <strong>₹{plant.price}</strong>
                    <button
                      disabled={added}
                      onClick={() => dispatch(addToCart(plant))}
                    >
                      {added ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}

export default ProductList