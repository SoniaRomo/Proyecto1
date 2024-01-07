import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import Login from './components/Login';
import Registrar from './components/Registrar';

const App = ()=> {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route  path = "/" element = {<Login/>}/>
        <Route  path = "/Registrar" element = {<Registrar/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
