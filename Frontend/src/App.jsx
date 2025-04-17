import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router"
import IndexHome from './assets/pages/IndexHome'

function App() {
 // Route Principale per la gestione delle route figle da "IndexHome".
  return (
    <BrowserRouter>
      <IndexHome />
    </BrowserRouter>
  )
}

export default App
