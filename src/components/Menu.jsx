import React,{ useState} from 'react'
import { NavLink} from "react-router-dom"
import Registrar from "./Registrar"
import{Listar} from "./Listar"
import Catalogo from "./Catalogo"
import {Inicio} from "./Inicio"
import Carrito from './Carrito'
import {Devolucion} from "./Devolucion"
import {Resumen}from "./Resumen"
import { Pago } from './Pago'
import {Factura} from "./factura"


export const Menu = (props) => {

  const [reg, setReg] =useState("");
  const [lis, setLis] =useState("");
  const [cat, setCat] =useState("");
  const [ini, setIni] = useState("");
  const [car, setCar] = useState("");
  const [dev, setDev] = useState("");
  const [res, setRes] = useState("");
  const [pag, setPag] = useState("");
  const [fac, setFac] = useState("");
  

function cerrarSesion(){
  document.getElementById("caja_menu").style.display="none";
  document.getElementById("form_login").style.display ="block";
  document.getElementById("txtusu").value ="";
  document.getElementById("txtpas").value ="";
  document.getElementById("txtusu").focus();
}

function op_registrar(){
  setReg("1");
  setLis("0");
  setCat("0");
  setIni("0");
  setCar("0");
  setDev("0");
  setRes("0");
  setPag("0");
  setFac("0");
 
  

}
function op_listar(){
  setReg("0");
  setLis("1");
  setCat("0");
  setIni("0");
  setCar("0");
  setDev("0");
  setRes("0");
  setPag("0");
  setFac("0");

  
}
function op_catalogo(){
  setReg("0");
  setLis("0");
  setCat("1");
  setIni("0");
  setCar("0");
  setDev("0");
  setRes("0");
  setPag("0");
  setFac("0");

  
}

function op_inicio(){
  setReg("0");
  setLis("0");
  setCat("0");
  setIni("1");
  setCar("0");
  setDev("0");
  setRes("0");
  setPag("0");
  setFac("0");
  
  
}
function op_carrito(){
  setReg("0");
  setLis("0");
  setCat("0");
  setIni("0");
  setCar("1");
  setDev("0");
  setRes("0");
  setPag("0");
  setFac("0");
  
}
function op_devolucion(){
  setReg("0");
  setLis("0");
  setCat("0");
  setIni("0");
  setCar("0");
  setDev("1");
  setRes("0");
  setPag("0");
  setFac("0");
 
}
function op_resumen(){
  setReg("0");
  setLis("0");
  setCat("0");
  setIni("0");
  setCar("0");
  setDev("0");
  setRes("1");
  setPag("0");
  setFac("0");
  
}
function op_pago(){
  setReg("0");
  setLis("0");
  setCat("0");
  setIni("0");
  setCar("0");
  setDev("0");
  setRes("0");
  setPag("1");
  setFac("0");
 
}
function op_factura(){
  setReg("0");
  setLis("0");
  setCat("0");
  setIni("0");
  setCar("0");
  setDev("0");
  setRes("0");
  setPag("0");
  setFac("1");
  
}


  return (
    <>
        
    <div id="caja_menu" style={{textAlign:"left"}}>

    <strong className="h3">
      Bienvenido Usuario : {props.usu.toUpperCase()}
    </strong>
              
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginTop:20}}>
      <div className="container-fluid">

        <label className="navbar-brand  h5" href=" "></label>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <NavLink to="" className="nav-link  h5  text-center" onClick={op_inicio} >Inicio</NavLink>
            <NavLink to="" className="nav-link  h5  text-center" onClick={op_registrar} >Registrar</NavLink>
            <NavLink to="" className="nav-link  h5  text-center" onClick={op_listar} >Listar</NavLink>
            <NavLink to="" className="nav-link  h5  text-center" onClick={op_catalogo} >Catalogo</NavLink>
            <NavLink to="" className="nav-link  h5  text-center" onClick={op_carrito} >Carrito</NavLink>
            <NavLink to="" className="nav-link  h5  text-center" onClick={op_devolucion} >Devolucion</NavLink>
            <NavLink to="" className="nav-link  h5  text-center" onClick={op_resumen} >Resumen</NavLink>
            <NavLink to="" className="nav-link  h5  text-center" onClick={op_pago} >Pago</NavLink>
            <NavLink to="" className="nav-link  h5  text-center" onClick={op_factura} >Factura</NavLink>
           
            <a className="nav-link  h5  text-center"  style={{color:"blue"}}  href=" " onClick={cerrarSesion} >Cerrar Sesión</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
 { ini === "1" && <Inicio/>}
 { reg === "1" && <Registrar/>}
 { lis === "1" && <Listar/>}
 { cat === "1" && <Catalogo/>}
 { car === "1" && <Carrito/>}
 { dev === "1" && <Devolucion/>}
 { res === "1" && <Resumen/>}
 { pag === "1" && <Pago/>}
 { fac === "1" && <Factura/>}

</>
  
  )
}