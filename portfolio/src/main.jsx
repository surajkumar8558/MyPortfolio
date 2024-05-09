import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MenuContextProvider from './context/MenuContextProvider.jsx'
import LoginContextProvider from './context/loginContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MenuContextProvider>
    <LoginContextProvider>
      <App />
    </LoginContextProvider>
  </MenuContextProvider> 
)
