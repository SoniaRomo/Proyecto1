import React from 'react'
import img8 from './img8.jpeg';
import img9 from './img9.jpeg';
import './inicio.css'

export const Inicio = () => {

  const bienvenida =() => {

}

return (
    
    <div className="container"style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}}> 
    <div className="contenedorInicio" style={{ background: 'linear-gradient(to right, #5170FF, #F284E0)', width: '90%', maxWidth: '1200px', overflow: 'hidden', margin: 'auto', padding: '70px 0', textAlign: 'center'}}>
    
    <h1 class="titulo">Ke Detalles Bogota</h1>
    <p class="copy">pequeñas sorpresas grandes sonrisas</p>
    <p class="copy">convertimos tus sueños en realidad.</p>
    <br></br>
    <div className='columns'>
    <div class="column">
    <img src= {img9} alt="imagen9" />
    
    </div>
    <div class="column">
    <img src= {img8} alt="imagen8" />
    
</div>
</div>
<p> Somos especialistas en las mas hermosas sorpresas y desayunos especiales. enamora conquista y
      cautiva a esas personas importantes</p>


</div>
</div>

);
};