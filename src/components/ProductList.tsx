import React, { useState, useEffect } from 'react';
import { Product } from './types';
import { useCart } from '../utils/CartContex';
import ProductItem from './ProductItem';
import productsData from '../products.json';

const ProductList = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center">Produkty w naszym sklepie</h2>
      <div className="mt-2 row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-center">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
