import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router"
import IndexHome from './assets/pages/IndexHome'
import PlayerContextProvider from './assets/context/PlayerContext'

function App() {
 // Route Principale per la gestione delle route figle da "IndexHome".
  return (
    <BrowserRouter>
      <PlayerContextProvider>
         <IndexHome />
      </PlayerContextProvider>
    </BrowserRouter>
  )
}

export default App
