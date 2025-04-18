import React, { useEffect, useRef } from 'react'
import Display from './Display'
import { Route, BrowserRouter, Routes, useLocation } from 'react-router'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../js/assets';

export default function DisplayHome() {
  // Gestione delle Route in un singolo componente partendo dalla sua implementazione.
  const displayRef = useRef();
  const location = useLocation(); //permette di accedere alla posizione attuale della location in un browser.
                                  // la location visualizza: il percorso, lo stato, query-string e i frammenti hash.
  // console.log(location);
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bg_color = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bg_color}, #191414)`;
    } else{
      displayRef.current.style.background = `#191414`;
    }
  },[isAlbum])

  return (
    <>
      <div ref={displayRef} className='display-home'>
        <Routes >
           <Route path='/' element={<Display />}/>
           <Route path='/album/:id' element={<DisplayAlbum />}/>
        </Routes>
      </div>
    </>
  )
}
