import React, {useState, useEffect} from 'react'

export const Pago = () => {

  const pagoProducto =() => {
    var datos = localStorage.getItem("registroPago");
    if (datos){
      return JSON.parse(datos);
    }else{
      return[];
    }  
    }
  

const[registroPago, setRegistroPago]= useState(pagoProducto());

const [correo, setCorreo] = useState("");
const [nombre, setNombre] = useState("");
const [apellido, setApellido] = useState("");
const [identificacion, setIdentificacion] = useState("");
const [direccion, setDireccion] = useState("");

const botonGuardar = (e) =>{
  e.preventDefault();
  var miObjeto = { correo, nombre, apellido, identificacion,direccion}
  setRegistroPago([...registroPago, miObjeto]);
  limpiarFormulario();

}

useEffect(() => {
localStorage.setItem("registroPago", JSON.stringify(registroPago))
}, [registroPago] );

const limpiarFormulario = ()=> {
  setCorreo("");
  setNombre("");
  setApellido("");
  setIdentificacion("");
  setDireccion("");
  document.getElementById("miFormulario").reset();

}


  return (
    <div className="h3" style={{padding:20}}>
    Pago de Productos
   <br/>
    <div className="bg-light" style={{margin:"auto", alignItems:'center', width: 600, maxwidth: 1200, overflow: "hidden"}}>

  
      
      <form id="miFormulario"  onSubmit={botonGuardar}>
        <div className="row" style={{margin:"auto", textAlign:'center', padding:40.10}}>
          <div className="col-6">
          <h1>Contacto</h1>
            <input className="form-control form-control-lg text-center" type="email" placeholder="correo" onChange={(e) => setCorreo(e.target.value)}required  />
            <br></br>
            <h1>Direccion de Envio</h1>
            <input className="form-control form-control-lg text-center" type="text" placeholder="Nombre del cliente" onChange={(e) => setNombre (e.target.value)}required  />
            <br></br>
            <input className="form-control form-control-lg text-center" type="text" placeholder="Apellido" onChange={(e) => setApellido (e.target.value)} required  />
            <br></br>
            <input className="form-control form-control-lg text-center" type="number" placeholder="Identificacion" onChange={(e) => setIdentificacion(e.target.value)}required  />
            <br></br>
            <input className="form-control form-control-lg text-center" type="text" placeholder="Direccion" onChange={(e) => setDireccion(e.target.value)}required  />
            <br></br>
          </div>
          </div>
          

       
      </form>
      </div>
      <div className="row" style={{marginTop:20}}>
          <div className="col">
            <button className="btn btn-primary btn-lg">Continuar</button>
          </div>
        </div>
    </div>
            


  )
}





