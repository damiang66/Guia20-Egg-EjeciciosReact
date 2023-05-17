import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NavBar } from './componentes/NavBar.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { EjercicioUno } from './componentes/ejercicio1/EjercicioUno.jsx'
import { EjercicioDos } from './componentes/ejercicio2/EjercicioDos.jsx'
import { MainTres } from './componentes/ejercicio3/MainTres.jsx'
import { Ejercicio4 } from './componentes/ejercicio4/Ejercicio4.jsx'
import { Ejercicio4Dos } from './componentes/ejercicio4/Ejercicio4Dos';
import { Ejercicio5 } from './componentes/ejercicio5/Ejercicio5.jsx'
import { ListaCards } from './componentes/ejercicio6/ListaCards.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/principal' element={<App/>} />
    <Route path='/ejercicio1' element={<EjercicioUno/>} />
    <Route path='/ejercicio2' element={<EjercicioDos/>} />
    <Route path='/ejercicio3' element={<MainTres/>} />
    <Route path='/ejercicio4' element={<Ejercicio4/>} />
    <Route path='/ejercicio4Dos' element={<Ejercicio4Dos/>} />
    <Route path='/ejercicio5' element={<Ejercicio5/>} />
    
    <Route path='/ejercicio6' element={<ListaCards/>} />
    </Routes>
    </BrowserRouter>
   
  </React.StrictMode>,
)
