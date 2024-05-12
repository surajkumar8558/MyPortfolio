import './App.css'
import HomePage from './pages/HomePage';
import AdminSignup from './pages/AdminSignup';
import AdminLogin from './pages/AdminLogin';
import PrivateRoute from './pages/PrivateRoute';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import Testing from './Testing';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/adminRegister' element={<PrivateRoute 
        Component={AdminSignup}/>}/>
        <Route path='/adminLogin' element={<AdminLogin/>}/>
        <Route path='/dashboard' element={<PrivateRoute Component={Dashboard}/>}/>
        <Route path='/testing' element={<Testing/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;