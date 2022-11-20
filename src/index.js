import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home_Login from './Home_Login';
import Register from './Register';
import Forgot_password from './Forgot_password';
import Actualizacion_ordenes from './Actualizacion_ordenes';
import Registro_ordenes from './Registro_ordenes';
import Control_paquetes from './Control_paquetes';
import reportWebVitals from './reportWebVitals';



import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> 
      <Routes> 
        <Route exact path="/" element={<Home_Login/>} /> 
        <Route path="/Register" element={<Register/>} /> 
        <Route path="/Forgot-Password" element={<Forgot_password/>} /> 
        <Route path="/Control-Ordenes" element={<Control_paquetes/>} /> 
        <Route path="/Actualizacion-Ordenes" element={<Actualizacion_ordenes/>} /> 
        <Route path="/Registro-Ordenes" element={<Registro_ordenes/>} /> 
      </Routes> 
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
