import React from 'react'
import assets from "../js/assets_admin"
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

export default function SideBar() {
  return (
    <div className='side-bar'>
        <img src={assets.logo} alt="logo" className='side-icons big'/>
        <img src={assets.logo_small} alt="logo" className='side-icons small'/>
    <div className='btns-content'>
            <NavLink to="/add-song" className='btn-side'>
                <img src={assets.add_song} alt="icon" className='w-5'/>
                <p className='hidden sm:block'>Add Song</p>
            </NavLink>

            <NavLink to="/list-song" className='btn-side'>
                <img src={assets.song_icon} alt="icon" className='w-5'/>
                <p className='hidden sm:block'>List Song</p>
            </NavLink>

            <NavLink to="/add-album" className='btn-side'>
                <img src={assets.add_album} alt="icon" className='w-5'/>
                <p className='hidden sm:block'>Add Album</p>
            </NavLink>

            <NavLink to="/list-album" className='btn-side'>
                <img src={assets.album_icon} alt="icon" className='w-5'/>
                <p className='hidden sm:block'>List Album</p>
            </NavLink>
        </div>
    </div>
  )
}
