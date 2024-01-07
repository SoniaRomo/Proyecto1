import React, {useState, useEffect} from 'react'

export const Factura = () => {

  const obtenerRegistros =() => {
    var datos = localStorage.getItem("registroFactura");
    if (datos){
      return JSON.parse(datos);
    }else{
      return[];
    }  
    }
  

const[registroFactura, setRegistroFactura]= useState(obtenerRegistros());

const [numFac, setNumFac] = useState("");
const [subTotal, setSubTotal] = useState("");
const [cosEnvio, setCosEnvio] = useState("");
const [totalPag, setTotalPag] = useState("");
const [metPag, setMetPag] = useState("");
const [otroMedPag, setOtroMedPag] = useState("");

const botonGuardar = (e) =>{
  e.preventDefault();
  var miObjeto = { numFac, subTotal, cosEnvio, totalPag, metPag,otroMedPag}
  setRegistroFactura([...registroFactura, miObjeto]);
  limpiarFormulario();

}

useEffect(() => {
localStorage.setItem("registroDevolucion", JSON.stringify(registroFactura))
}, [registroFactura] );

const limpiarFormulario = ()=> {
  setNumFac("");
  setSubTotal("");
  setCosEnvio("");
  setTotalPag("");
  setMetPag("");
  setOtroMedPag("");
  document.getElementById("miFormulario").reset();

}


  return (
    <div className="h3">
    FACTURA
   <br/>
    <div className="bg-light" style={{marginTop:20, padding:20}}>

    
      <form id="miFormulario"  onSubmit={botonGuardar}>
        <div className="row" style={{marginTop:20, alignItems:'center'}}>
          <div className="col-6">
            <input className="form-control form-control-lg text-center" type="text" placeholder="Numero de Factura" onChange={(e) => setNumFac(e.target.value)}required  />
            <br></br>
            <input className="form-control form-control-lg text-center" type="text" placeholder="Sub Total" onChange={(e) => setSubTotal (e.target.value)}required  />
            <br></br>
            <input className="form-control form-control-lg text-center" type="text" placeholder="Costo envio" onChange={(e) => setCosEnvio (e.target.value)} required  />
            <br></br>
            <input className="form-control form-control-lg text-center" type="text" placeholder="Total a Pagar" onChange={(e) => setTotalPag(e.target.value)}required  />
            <br></br>
            <input className="form-control form-control-lg text-center" type="text" placeholder="Metodo de Pago" onChange={(e) => setMetPag(e.target.value)}required  />
            <br></br>
            <input className="form-control form-control-lg text-center" type="text" placeholder="Otros Medios de Pago" onChange={(e) => setOtroMedPag(e.target.value)}required  />
            <br></br>
          </div>
          </div>
          

       
      </form>
      </div>
      <div className="row" style={{marginTop:20}}>
          <div className="col">
            <button className="btn btn-primary btn-lg">Realizar Pago</button>
          </div>
        </div>
    </div>
            
  

  )
}