import React, { useContext } from 'react'
import SideBar from '../components/SideBar'
import Player from '../components/Player'
import DisplayHome from '../layout/DisplayHome'
import { PlayerContext } from '../context/PlayerContext';

export default function IndexHome() {

  const { audioRef, isTrack } = useContext(PlayerContext);

  return (
    <div className='main-page'>
        <div className='page-compos'>
            <SideBar />
            <DisplayHome />
        </div>
        <Player />
        <audio ref={audioRef} preload='auto' src={isTrack.file}></audio>
    </div>
  )
}
