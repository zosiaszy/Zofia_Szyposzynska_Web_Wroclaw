import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { CartProvider } from './utils/CartContex';

import ProductList from './components/ProductList';
import Cart from './components/Cart';

import Navbar from './components/Navbar';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <main className="container mt-4">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
};

export default App;
