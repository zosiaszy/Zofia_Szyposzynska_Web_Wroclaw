import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../utils/CartContex';
import { ShoppingCart } from 'phosphor-react';

function Navbar() {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          Sklep
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">
                Strona Główna
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/cart">
                <span className="mx-1">Koszyk</span>
                <ShoppingCart size={24} />
                <span className="start-100 translate-middle badge rounded-pill bg-danger">
                  {cartItemCount}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
