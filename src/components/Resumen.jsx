import React, {useState, useEffect} from 'react'

export const Resumen = () => {

  const obtenerRegistros =() => {
    var datos = localStorage.getItem("registroUsuario");
    if (datos){
      return JSON.parse(datos);
    }else{
      return[];
    }  
    }
  

const[registroUsuario, setRegistroUsuario]= useState(obtenerRegistros());

const [correo, setCorreo] = useState("");
const [envio, setEnvio] = useState("");
const [costo, setCosto] = useState("");

const botonGuardar = (e) =>{
  e.preventDefault();
  var miObjeto = { correo, envio, costo}
  setRegistroUsuario([...registroUsuario, miObjeto]);
  limpiarFormulario();

}

useEffect(() => {
localStorage.setItem("registroUsuario", JSON.stringify(registroUsuario))
}, [registroUsuario] );

const limpiarFormulario = ()=> {
  setCorreo("");
  setEnvio("");
  setCosto("");
  document.getElementById("miFormulario").reset();




}


  return (
    
    <div className="h3">
       Resumen del pedido
      <br/>
   
    <div className="bg-light" style={{marginTop:20, padding:20}}>

      <form id="miFormulario"  onSubmit={botonGuardar}>
        <div className="row" style={{marginTop:20,  textAlign:'center'}}>
          <div className="col-6">
            <input className="form-control form-control-lg text-center" type="text" placeholder="correo cliente" onChange={(e) => setCorreo (e.target.value)}required  />
            <br></br>
            <input className="form-control form-control-lg text-center" type="text" placeholder="Enviar a Dirrecion" onChange={(e) => setEnvio (e.target.value)}required  />
            <br></br>
            <input className="form-control form-control-lg text-center" type="number" placeholder="Costo de Envio" onChange={(e) => setCosto (e.target.value)} required  />
            <br></br>
            
          </div>
          </div>
          

        
      </form>
    </div>
    <div className="row" style={{marginTop:20}}>
          <div className="col">
             <a href='./Carrito.jsx'>volver a informacion</a>
             <br></br>
            <button className="btn btn-primary btn-lg">continuar pago</button>
          </div>
        </div>       
  </div>
  

  )
}