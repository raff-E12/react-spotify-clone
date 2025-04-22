import React, { useEffect, useRef } from 'react'
import Display from './Display'
import { Route, BrowserRouter, Routes, useLocation } from 'react-router'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../js/assets';
import { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

export default function DisplayHome() {
  // Gestione delle Route in un singolo componente partendo dalla sua implementazione.
  const displayRef = useRef();
  const location = useLocation(); //permette di accedere alla posizione attuale della location in un browser.
                                  // la location visualizza: il percorso, lo stato, query-string e i frammenti hash.
  // console.log(location);

  const { AlbumsData } = useContext(PlayerContext);

  const isAlbum = location.pathname.includes("album"); //Corrispondenza dell'album in parametro
  const albumId = isAlbum ? location.pathname.split("/").pop() : ""; //estrazione del id nel parametro
  const bg_color = isAlbum && albumsData.length > 0 ? AlbumsData.find((color) => (color._id === albumId)).bgColor : "#1DB954"; //Estrazione della proprietà dalla oggetto

  console.log()


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
        {albumsData.length > 0 ? <>
          <Routes >
           <Route path='/' element={<Display />}/>
           <Route path='/album/:id' element={<DisplayAlbum albums={AlbumsData.find((element) => {return element._id === albumId})}/>}/>
        </Routes>
        </> : null}
      </div>
    </>
  )
}
