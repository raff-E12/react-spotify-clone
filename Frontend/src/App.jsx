import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router"
import IndexHome from './assets/pages/IndexHome'
import PlayerContextProvider from './assets/context/PlayerContext'

function App() {
 // Route Principale per la gestione delle route figle da "IndexHome".
 // 4. Dopo aver creato il pattern si utilizza il componente creato al padre dove provede di esportarlo su tutti i suoi figli.
  return (
    <BrowserRouter>
      <PlayerContextProvider>
         <IndexHome />
      </PlayerContextProvider>
    </BrowserRouter>
  )
}

export default App
