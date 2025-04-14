import React from 'react'
import Display from './Display'
import { Route, BrowserRouter, Routes } from 'react-router'

export default function DisplayHome() {
  return (
    <>
      <div className='display-home'>
        <Routes >
           <Route path='/' element={<Display />}/>
        </Routes>
      </div>
    </>
  )
}
