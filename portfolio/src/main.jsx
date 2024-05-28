import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MenuContextProvider from './context/MenuContextProvider.jsx'
import LoginContextProvider from './context/loginContextProvider.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MenuContextProvider>
    <LoginContextProvider>
      <App />
    </LoginContextProvider>
  </MenuContextProvider> 
)
