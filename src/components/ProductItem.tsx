import React, { useState } from 'react';
import { Product } from './types';

interface ProductItemProps {
  product: Product;
  addToCart: (product: Product, quantity: number) => void;
}

function ProductItem({ product, addToCart }: ProductItemProps) {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const totalPrice =
    (product.price.main + product.price.fractional / 100) * quantity;

  return (
    <div className="col">
      <div
        className="card h-100 shadow-sm d-flex flex-column justify-content-between"
        style={{ minHeight: '100%' }}
      >
        <div className="card-body text-center d-flex flex-column">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text text-muted">Opis przykładowy produktu...</p>

          <div className="d-flex justify-content-center align-items-center my-2">
            <button
              className="btn btn-outline-secondary btn-sm me-2"
              onClick={decrease}
            >
              −
            </button>
            <span className="fw-bold">{quantity}</span>
            <button
              className="btn btn-outline-secondary btn-sm ms-2"
              onClick={increase}
            >
              +
            </button>
          </div>

          <div className="mb-3">
            <span className="fw-bold fs-5">{totalPrice.toFixed(2)} zł</span>
          </div>

          <button
            className="btn btn-primary mt-auto"
            onClick={() => addToCart(product, quantity)}
          >
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
