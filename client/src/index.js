import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Views/Home.jsx'
import Register from './Views/Register.jsx'
import Singup from './Views/Singup.jsx'
import Login from './Views/Login.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function isRegisterPageTrue(){
  
  const pathName = window.location.pathname

  if(pathName ===  '/register' || pathName ===  '/singup' || pathName ===  '/login'){
    return false
  }
  else{
    return true
  }
}



ReactDOM.render(
  <BrowserRouter>

      {
        isRegisterPageTrue() && <Home/>
      }
      
      <Routes>

            <Route exact path='/register' element={<Register/>}/>
            <Route exact path="/singup" element={<Singup />} />
            <Route exact path="/Login" element={<Login />} />
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);