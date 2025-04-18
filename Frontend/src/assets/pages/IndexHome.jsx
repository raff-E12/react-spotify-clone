import React from 'react'
import SideBar from '../components/SideBar'
import Player from '../components/Player'
import DisplayHome from '../layout/DisplayHome'

export default function IndexHome() {
  return (
    <div className='main-page'>
        <div className='page-compos'>
            <SideBar />
            <DisplayHome />
        </div>
        <Player />
        {/* <audio preload='auto'></audio> */}
    </div>
  )
}
