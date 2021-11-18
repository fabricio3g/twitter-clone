import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Views/Home.jsx'
import Register from './Views/Register.jsx'
import Singup from './Views/Singup.jsx'
import Login from './Views/Login.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
      <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/register' element={<Register/>} />
            <Route path="/singup" element={<Singup />} />
            <Route path="/Login" element={<Login />} />
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);