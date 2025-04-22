import React, { useContext } from 'react'
import SideBar from '../components/SideBar'
import Player from '../components/Player'
import DisplayHome from '../layout/DisplayHome'
import { PlayerContext } from '../context/PlayerContext';

export default function IndexHome() {
  //Controllo dei valori in Database nella fase di rendering.
  const { audioRef, isTrack, songData, AlbumsData } = useContext(PlayerContext);

  return (
    <div className='main-page'>
       {songData.length !== 0 ? <>
        <div className='page-compos'>
            <SideBar />
            <DisplayHome />
        </div>
        <Player />
        </> : null
        } 
        <audio ref={audioRef} preload='auto' src={isTrack ? isTrack.file : ""}></audio>
    </div>
  )
}
