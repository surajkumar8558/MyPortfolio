import './App.css'
import HomePage from './pages/HomePage';
import AdminSignup from './pages/AdminSignup';
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/adminRegister' element={<AdminSignup/>}/>
        <Route path='/adminLogin' element={<AdminLogin/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;