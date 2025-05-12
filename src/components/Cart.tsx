import React from 'react';
import { useCart } from '../utils/CartContex';


const Cart = () => {
  const { cart, removeFromCart, clearCart, getCartTotal, updateQuantity } =
    useCart();

  const totalPrice = getCartTotal().toFixed(2);

  const handleIncrease = (productId: number) => {
    updateQuantity(productId, 1);
  };

  const handleDecrease = (productId: number) => {
    updateQuantity(productId, -1);
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg mx-auto" style={{ maxWidth: '800px' }}>
        <div className="card-header bg-primary text-white text-center">
          <h2>Twój koszyk</h2>
        </div>
        <div className="card-body">
          {cart.length === 0 ? (
            <p className="text-center">Koszyk jest pusty</p>
          ) : (
            <div>
              <ul className="list-group">
                {cart.map(({ product, quantity }) => (
                  <li
                    key={product.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <p className="mb-0">{product.name}</p>
                      <p className="mb-0 text-muted">
                        {product.price.main},
                        {product.price.fractional.toString().padStart(2, '0')}{' '}
                        zł x {quantity}
                      </p>
                    </div>

                    {/* Przycisk do zmiany ilości */}
                    <div className="d-flex justify-content-end align-items-center">
                      <button
                        className="btn btn-outline-secondary btn-sm me-2"
                        onClick={() => handleDecrease(product.id)}
                      >
                        −
                      </button>
                      <span>{quantity}</span>
                      <button
                        className="btn btn-outline-secondary btn-sm ms-2"
                        onClick={() => handleIncrease(product.id)}
                      >
                        +
                      </button>
                    </div>

                    {/* Przycisk do usunięcia */}
                    <button
                      className="btn btn-danger btn-sm ms-3" // Dodano ms-3 (margin start) aby zmniejszyć gap
                      onClick={() => removeFromCart(product.id)}
                    >
                      Usuń
                    </button>
                  </li>
                ))}
              </ul>

              <div className="d-flex justify-content-between align-items-center mt-3">
                <p className="fw-bold mt-2">Całkowita cena: {totalPrice} zł</p>

                {/* Przyciski do czyszczenia koszyka i przejścia do podsumowania */}
                <div className="d-flex">
                  <button
                    className="btn btn-warning me-2"
                    onClick={() => clearCart()}
                  >
                    Wyczyść koszyk
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      localStorage.setItem('order', JSON.stringify(cart));
                      localStorage.setItem('orderTotal', totalPrice);
                      window.location.href = 'order-summary.html';
                    }}
                  >
                    Przejdź do podsumowania
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
