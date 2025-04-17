import React from 'react'
import { assets, icons } from '../js/assets'

export default function SideBar() {
    const assets_icons = assets.sidebar;
  return (
    <div className='sidebar-sc'>
        <div className='icons-side'>
            <div className='options-bar'>
               <img src={icons.home_icon} alt="icons"/>
                <p>Home</p>
            </div>
            <div className='options-bar'>
                <img src={icons.search_icon} alt="icons"/>
                <p>Search</p>
            </div>
        </div>
        <div className='playlist-sc'>
            <div className='options-bar-bottom'>
                 <div className='icons-part-1'>
                    <img src={icons.stack_icon} alt="icons" />
                    <p>Your Library</p>
                </div>
                <div className='icons-part-2'>
                    <img src={icons.arrow_right} alt="icons" />
                    <img src={icons.plus_icon} alt="icons" />
                </div>
            </div>
            <div className='adv-box'>
               <h2>Create your first playlist</h2>
                <p>it's easy we will help you</p>
                <button className='btn-app'>Crate Playlist</button>
            </div>
            <div className='adv-box'>
               <h2>Let's findsome podcasts to follow</h2>
               <p>well keep you update on new episodes</p>
               <button className='btn-app'>Browse podcasts</button>
            </div>
        </div>
    </div>
  )
}
