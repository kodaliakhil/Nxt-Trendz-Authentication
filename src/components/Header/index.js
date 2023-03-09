import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <img
      className="website-logo-img"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
    />
    <ul className="home-products-cart-options">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/">
        <li>Products</li>
      </Link>
      <Link to="/">
        <li>Cart</li>
      </Link>
      <button type="button">Logout</button>
    </ul>
  </nav>
)

export default Header
