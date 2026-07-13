import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h2 className="logo">🍽️ Shashi's Kitchen</h2>

      <div className="nav-links">
        <Link to="/">🏠 Home</Link>

        <Link to="/menu">🍕 Menu</Link>

        <Link to="/cart">
          🛒 Cart
          <span className="cart-badge">
            {cartCount}
          </span>
        </Link>

        <Link to="/login">🔑 Login</Link>

        <Link to="/register">👤 Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;