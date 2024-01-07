import React, {useState, useEffect} from 'react'

export const Devolucion = () => {

  const obtenerRegistros =() => {
    var datos = localStorage.getItem("registroDevolucion");
    if (datos){
      return JSON.parse(datos);
    }else{
      return[];
    }  
    }
  

const[registroDevolucion, setRegistroDevolucion]= useState(obtenerRegistros());

const [numFac, setNumFac] = useState("");
const [usuario, setUsuario] = useState("");
const [proDev, setProDev] = useState("");
const [motDev, setMotDev] = useState("");


const botonGuardar = (e) =>{
  e.preventDefault();
  var miObjeto = { numFac, usuario, proDev, motDev}
  setRegistroDevolucion([...registroDevolucion, miObjeto]);
  limpiarFormulario();

}

useEffect(() => {
localStorage.setItem("registroDevolucion", JSON.stringify(registroDevolucion))
}, [registroDevolucion] );

const limpiarFormulario = ()=> {
  setNumFac("");
  setUsuario("");
  setProDev("");
  setMotDev("");
  document.getElementById("miFormulario").reset();

}


  return (
    <div className="h3" style={{padding:20}} >
    Devolucion de Producto
   <br/>
    <div className="bg-light" style={{marginTop:20, padding:20}}>

    
      <form id="miFormulario"  onSubmit={botonGuardar}>
        <div className="row" style={{marginTop:20, alignItems:'center'}}>
          <div className="col-6">
            <input className="form-control form-control-lg text-center" type="text" placeholder="Numero de Factura" onChange={(e) => setNumFac(e.target.value)}required  />
            <br></br>
            <input className="form-control form-control-lg text-center" type="text" placeholder="Usuario" onChange={(e) => setUsuario (e.target.value)}required  />
            <br></br>
            <input className="form-control form-control-lg text-center" type="text" placeholder="Producto a Devolver" onChange={(e) => setProDev (e.target.value)} required  />
            <br></br>
            <input className="form-control form-control-lg text-center" type="text" placeholder="Motivo de Devolucion" onChange={(e) => setMotDev(e.target.value)}required  />
            <br></br>
            
          </div>
          </div>
        
      </form>
      </div>
      <div className="row" style={{marginTop:20}}>
      <div className="col">
        <button className="btn btn-primary btn-lg">Enviar Devolucion</button>
    
            
  </div>
  </div>
  </div>

  )
}