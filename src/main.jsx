// Este archivo es el punto de entrada de la aplicación React. 
// Aquí se renderiza el componente principal (App) dentro del 
// elemento HTML con id 'root'. Además, se envuelve el 
// componente App con BrowserRouter para habilitar las 
// rutas en una aplicación de una sola página (SPA). También se 
// importa un archivo CSS global para aplicar estilos a toda la aplicación.
// | ------------- | -------------------- |
// | BrowserRouter | habilita rutas SPA   |
// | App           | componente principal |
// | global.css    | CSS global           |


import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)