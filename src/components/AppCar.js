


import React, { useState } from 'react';

import Catalogo from './components/Catalogo';
import Carrito from './components/Carrito';


function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity++;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    setTotal(total + product.price);
  };

  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter((product) => product.id !== productToRemove.id);
    const removedItemTotal = productToRemove.price * productToRemove.quantity;
    setCart(updatedCart);
    setTotal(total - removedItemTotal);
  };

  

  return (
    <div className="App">
      <h1>Carrito de Compras</h1>
      <Catalogo addToCart={addToCart} />
      
      <Carrito cart={cart} removeFromCart={removeFromCart} total={total} /> 
    </div>
  );
}

export default App;