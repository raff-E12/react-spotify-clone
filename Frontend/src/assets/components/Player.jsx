import React from 'react'
import { songsData, assets } from '../js/assets'

export default function Player() {
    const song_list_export = songsData;
    const assets_icons = assets;
  return (
    <div className='player-sc'>
        <div className='song-icons'>
        {song_list_export.map( element => {
            if (element.id === 0) {
                return(
                   <>
                     <img src={element.image} alt="song-icon" />
                     <div>
                        <p className='title-song-pl'>{element.name}</p>
                        <p>{element.desc.slice(0, 12)}</p>
                     </div>
                   </>
                )
            }
        })}
        </div>
        <div className='icons-player'>
            <div className='icons-player-group'>
                {assets_icons.player.map( icons => {
                    return(
                        <>
                         <img src={icons.icon} alt="icons"/>
                        </>
                    )
                })}
            </div>
            <div className='slide-player'>
              <p>1:06</p>
                <div className='slide-sc'>
                    <hr className='slide'/>
                </div>
              <p>1:90</p>
           </div>
        </div>
        <div className='icons-setting'>
           {assets_icons.icons_setting_1.map( icons =>{
             return(
             <>
               <img src={icons.icon}  className='icon-player-left' alt='icons'/>
             </>
             )
           })}
           <div className='volume-slider'>
              <hr className='slide'/>
           </div>
           {assets_icons.icons_setting_2.map( icons => {
             return(
               <>
               <img src={icons.icon} alt="img" className='icon-player-left' />
               </>
             )
           })}
        </div>
    </div>
  )
}
