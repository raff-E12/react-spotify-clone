import React from 'react'
import Display from './Display'
import { Route, BrowserRouter, Routes } from 'react-router'
import DisplayAlbum from './DisplayAlbum'

export default function DisplayHome() {
  // Gestione delle Route in un singolo componente partendo dalla sua implementazione.
  return (
    <>
      <div className='display-home'>
        <Routes >
           <Route path='/' element={<Display />}/>
           <Route path='/album/:id' element={<DisplayAlbum />}/>
        </Routes>
      </div>
    </>
  )
}
