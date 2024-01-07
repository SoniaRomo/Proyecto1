import React, { useState, useEffect} from 'react'

export const Listar = () => {

  const obtenerRegistros =() => {
    var datos = localStorage.getItem("registroslogin");
    if (datos){
      return JSON.parse(datos);
    }else{
      return[];
    }  
    }
  
    const[registroslogin, setRegistrosLogin]= useState(obtenerRegistros());

  const botonEliminar =(miIndex)=>{
    if(window.confirm("¿estas seguro de querer eliminar el regisitro?")){
      var registrosFiltrados = registroslogin.filter((e, index) =>{
          return miIndex !== index
      });
      setRegistrosLogin(registrosFiltrados);
    }
  }

  useEffect (() => {
    localStorage.setItem("registroslogin", JSON.stringify(registroslogin))
  }, [registroslogin])




  return (
    <div className="bg-light" style={{marginTop:20, padding:20}}>

    <div className="h3">
      Listado De Registro De usuarios
    </div>

    <div className="table-responsive">
      
{ registroslogin.length > 0 ? 

      <>
        <table className="table table-bordered table-hover" style={{marginTop:12}}>
            <thead className="text-center" style={{background:"lightgray"}}>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Identificacion</th>
                    <th>Direccion</th>
                    <th>correo</th>
                    <th>Nueva Contraseña</th> 
                    <th>Confirmar Contraseña</th>
                    <th>X</th>
                </tr>
            </thead>
            <tbody className="text-center align-baseline">
             {
              registroslogin.map((x, index)=> (
                <tr key={index}>
                  <tr>{index+1 }</tr>
                  <td>{x.nombre }</td>
                  <td>{x.apellido }</td>
                  <td>{x.identificacion }</td>
                  <td>{x.direccion }</td>
                  <td>{x.correo }</td>
                  <td>{x.nuevaContraseña }</td>
                  <td>{x.confirmarContraseña}</td>
                  <td className = "text-center">
                    <button className="btn btn-outline-dange" onClick={()=>botonEliminar(index)}>
                    <i class="bi bi-trash3-fill"></i>

                    </button>

                  </td>
                </tr>
              ))
             }   
            </tbody>
        </table>
      </> 
     : <p className = 'h5' style={{color : "red"}}>"No hay registros para listar"</p> 
      
     }
    </div>
 
  </div>
  )
}
