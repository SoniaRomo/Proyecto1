import React, { useState, useEffect } from 'react';

const Registrar = () => {
  const obtenerRegistros = () => {
    const datos = localStorage.getItem('registroUsuario');
    if (datos) {
      return JSON.parse(datos);
    } else {
      return [];
    }
  };

  const [registroUsuario, setRegistroUsuario] = useState(obtenerRegistros());
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [identificacion, setIdentificacion] = useState('');
  const [direccion, setDireccion] = useState('');
  const [correo, setCorreo] = useState('');
  const [nuevaContraseña, setNuevaContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');

  const botonGuardar = (e) => {
    e.preventDefault();
    if (nuevaContraseña !== confirmarContraseña) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const nuevoUsuario = {
      nombre,
      apellido,
      identificacion,
      direccion,
      correo,
      contraseña: nuevaContraseña,
    };

    setRegistroUsuario([...registroUsuario, nuevoUsuario]);
    limpiarFormulario();
  };

  useEffect(() => {
    localStorage.setItem('registroUsuario', JSON.stringify(registroUsuario));
  }, [registroUsuario]);

  const limpiarFormulario = () => {
    setNombre('');
    setApellido('');
    setIdentificacion('');
    setDireccion('');
    setCorreo('');
    setNuevaContraseña('');
    setConfirmarContraseña('');
  };

  return (
    <div className="h3">
      Registro De Usuarios
      <br />
      <div className="bg-light" style={{ marginTop: 20, padding: 20 }}>
        <form onSubmit={botonGuardar}>
          {/* Aquí van los campos del formulario para registrar usuarios */}
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Digite El Nombre"
            required
          />
          
           <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            placeholder="Digite su apellido"
            required
          />
           <input
            type="text"
            value={identificacion}
            onChange={(e) => setIdentificacion(e.target.value)}
            placeholder="Digite su identificacion "
            required
          />
           <input
            type="text"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            placeholder="Digite su Direccion"
            required
          />
           <input
            type="text"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Digite su correo"
            required
          />
          <label htmlFor="nuevaContraseña">Contraseña</label>
          <input
            type="password"
            id="nuevaContraseña"
            value={nuevaContraseña}
            onChange={(e) => setNuevaContraseña(e.target.value)}
            placeholder="Digite su contraseña"
            required
          />
          
          <label htmlFor="confirmarContraseña">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmarContraseña"
            value={confirmarContraseña}
            onChange={(e) => setConfirmarContraseña(e.target.value)}
            placeholder="Confirme su contraseña"
            required
          />
          <button className="btn btn-primary btn-lg">Guardar Datos</button>
        </form>
      </div>
    </div>
  );
};

export default Registrar;
