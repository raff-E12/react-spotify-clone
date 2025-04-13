import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router"
import IndexPage from './assets/layout/IndexPage'

function App() {

  return (
    <>
    <BrowserRouter >
       <Routes>
         <Route path='/' element={<IndexPage />}/>
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
