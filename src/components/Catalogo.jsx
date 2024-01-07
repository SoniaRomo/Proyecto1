
import React, { useState } from 'react';
import img1 from './Img1.jpeg';
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';
import img4 from './img4.jpeg';
import img5 from './img5.jpeg';
import img6 from './img6.jpeg';
import './estilos.css';



const Catalogo = ({ addToCart }) => {

  const catalog = [


    {
      id: 1,
      name: 'Ancheta Pequeña',
      description: 'globo metalizado, caja madera, chocolates, dulces, jugo, moño',
      price: 20000,
      image: img1,
    },
    {
      id: 2,
      name: 'Ancheta Infantil',
      description: 'globo metalizado, osito de peluche, moño, dulces, caja madera',
      price: 50000,
      image: img2,
    },
    {
      id: 3,
      name: 'Desayuno Sorpresa',
      description: 'Descripcion:caja madera, oso peluche, 4 fotos, jugo, cafe, huevos revueltos, fruta,',
      price: 70000,
      image: img3,

    },
    {
      id: 4,
      name: 'Desayuno sorpresa',
      description: 'Descripcion: caja madera. globo metalizado, fruta, jugo, oso peluche',
      price: 65000,
      image: img4,
    },
    {
      id: 5,
      name: 'Ancheta Infantil',
      description: 'globo metalizado, moño, dulces, caja madera',
      price: 40000,
      image: img5,
    },
    {
      id: 6,
      name: 'Ancheta Pequeña',
      description: 'caja madera. globo metalizado, mecato',
      price: 45000,
      image: img6,

    },


  ];



  return (
    <div className="contenedor" style={{ color: '#fff', marginTop: 20, padding: 20, width: "700px" }}>

      <div className="catalog">
        <h2>Catalogo de Productos:</h2>
        <ul>
          {catalog.map((product) => (

            <li key={product.id}>

              <h2>{product.name}</h2>
              <img src={product.image} alt={product.name} style={{ width: '100px', height: '150px' }} />
              <p style={{ height: '80px' }}>{product.description}</p>
              <p>Precio: ${product.price}</p>

              <button onClick={() => addToCart(product)} style={{ backgroundColor: '#4CAF50' }}> Agregar al carrito  </button>
            </li>

          ))}
        </ul>
      </div>
    </div>
  );


};

export default Catalogo;

