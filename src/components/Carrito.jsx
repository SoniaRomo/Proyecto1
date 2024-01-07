
// components/Carrito.jsx

import React from 'react';

const Carrito = ({ cart, removeFromCart, total }) => {
  return (
    <div className="cart">
      <h2>Carrito:</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} - Cantidad: {product.quantity}{' '}
            <button onClick={() => removeFromCart(product)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <button onClick={() => alert('Continuar con el pago')}>Continuar con el pago</button>
    </div>
  );
};

export default Carrito;

