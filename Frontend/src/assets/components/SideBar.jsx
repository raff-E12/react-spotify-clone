import React from 'react'
import { assets } from '../js/assets'

export default function SideBar() {
    const assets_icons = assets.sidebar;
  return (
    <div className='sidebar-sc'>
        <div className='icons-side'>
            {assets_icons.top.map( icons => {
                return(
                 <div className='options-bar'>
                    <img src={icons.icons} alt="icons"/>
                     <p>{icons.title}</p>
                 </div>
                )
            })}
        </div>
        <div className='playlist-sc'>
            <div className='options-bar-bottom'>
                {assets_icons.bottom.title[0].map( element => {
                    return(
                        <div className='icons-part-1'>
                            <img src={element.icons} alt="icons" />
                             <p>{element.title}</p>
                        </div>
                    )
                })}
                {assets_icons.bottom.title[1].map( element => {
                    return(
                        <div className='icons-part-2'>
                            <img src={element.first} alt="icons" />
                            <img src={element.second} alt="icons" />
                        </div>
                    )
                })}
            </div>
            {assets_icons.bottom.adv.map( element => {
                return(
                    <div className='adv-box'>
                        <h2>{element.title}</h2>
                        <p>{element.par}</p>
                        <button className='btn-app'>{element.btn}</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
