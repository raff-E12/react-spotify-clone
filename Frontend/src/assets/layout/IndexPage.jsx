import React from 'react'
import SideBar from '../components/SideBar'
import Player from '../components/Player'

export default function IndexPage() {
  return (
    <div className='main-page'>
        <div className='page-compos'>
            <SideBar />
            <Player />
        </div>
    </div>
  )
}
