import {  Routes, Route, Link } from 'react-router-dom';


import React, { useState } from 'react'
import { Menu } from './Menu'

import logo from './logo.png';
import img6 from './img6.jpeg';
import img4 from './img4.jpeg';
import Registrar from './Registrar';


 const Login = () => {
    const [miLogin, setMiLogin] = useState("false");
    const [usu, setUsu] = useState("");
    const [pas, setPas] = useState("");

    function iniciarSesion(e) {
        e.preventDefault();
        var txtusu = document.getElementById("txtusu").value;
        var txtpas = document.getElementById("txtpas").value;

        if (txtusu.length === 0 || txtpas.length === 0) {
            alert("complete los datos faltantes !!");
        } else {
            if (usu === "admin" && pas === "123") {
                setMiLogin("true");
                setUsu (txtusu);
                setPas (txtpas);
                document.getElementById("form_login").style.display = "none";
            } else {
                setMiLogin("false");
                alert("error de usuario y/o contraseña");
                document.getElementById("txtusu").value = "";
                document.getElementById("txtpas").value = "";
                document.getElementById("txtusu").focus();

            }
        }
    }



    return (
        
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="contenedor" style={{ background: 'linear-gradient(to right, #5170FF, #F284E0)', marginTop: 20, padding: 20, width: "1000px", textAlign: 'center' }}>
                <img src={logo} alt="Logotipo" style={{ width: "80px" }} />

                {miLogin === "true" && <Menu usu={usu} />}
                <form id="form_login">
                    <h1 class="titulo">Ke Detalles Bogota</h1>
                    <p class="copy">pequeñas sorpresas grandes sonrisas</p>
                    <p class="copy">convertimos tus sueños en realidad.</p>
                
               
                <div className='column-container'style={{ display: "flex"}}>
                    <div className='column' style={{flex: 1, padding: 10}}>
                        <h1 style={{ color: "#ff66c4", textalign: "center" }}>INICIAR SESION</h1>
                        <label htmlFor="txtusu"><strong>Username</strong></label>
                        <input type="text" id="txtusu" style={{ textAlign: "center" }} className="form-control" onChange={(e) => setUsu(e.target.value)} required />
                        <label htmlFor="txtpas"><strong>Password</strong></label>
                        <input type="password" id="txtpas" style={{ textAlign: "center" }} className="form-control" onChange={(e) => setPas(e.target.value)} required />

                        <br />
                        <input type="submit" className="btn btn-primary" value="Login" onClick={iniciarSesion} />
                        <br></br>
                        <a> si no tiene cuenta registrarse ahora </a>
                        <br></br>
                        <Link to ="/Registrar">registrate aqui</Link>
                    </div>
                    <div class="column" style={{flex: 1, padding: 10}}>
                        <img style={{ width: 250, height: 250, borderRadius: 20, objectFit: "cover" }} src={img6} alt="imagen6" />
                        <br></br>
                        <img style={{ width: 250, height: 250, borderRadius: 20, objectFit: "cover" }} src={img4} alt="imagen4 " />
                    </div>
                   
                    </div>
                    </form>
                    <Routes>
                    <Route path="/Registrar" component={Registrar} />

                    </Routes>
                    
                    <footer>
                        <div class="contenedor footer-content">
                            <div class="contact-us">
                                <h2 class="brand">Ke Detalles Bogota</h2>
                                <p>somos expertos en la creacion de tus sueños</p>
                            </div>
                            <div class="social-media">
                                <a href="./" class="social-media-icon">
                                    <i class='bx bxl-facebook'></i>
                                </a>
                                <a href="./" class="social-media-icon">
                                    <i class='bx bxl-twitter'></i>
                                </a>
                                <a href="./" class="social-media-icon">
                                <i class='bx bxl-instagram'></i>
                                </a>
                            </div>
                        </div>
                        <div class="line"></div>
                    </footer>
                   
                </div>
                </div>
                





    )
}

export default Login;