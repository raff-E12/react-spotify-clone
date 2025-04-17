import React from 'react'
import { songsData, assets, icons } from '../js/assets'

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
               <img src={icons.shuffle_icon} alt="ico-player" />
               <img src={icons.prev_icon} alt="ico-player" />
               <img src={icons.play_icon} alt="ico-player" />
               <img src={icons.next_icon} alt="ico-player" />
               <img src={icons.loop_icon} alt="ico-player" />
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
            <img src={icons.plays_icon} alt="icons" className='icon-player-left'/>
            <img src={icons.mic_icon} alt="icons" className='icon-player-left'/>
            <img src={icons.speaker_icon} alt="icons" className='icon-player-left'/>
            <img src={icons.volume_icon} alt="icons" className='icon-player-left'/>
           <div className='volume-slider'>
              <hr className='slide'/>
           </div>
            <img src={icons.mini_player_icon} alt="icons" className='icon-player-left'/>
            <img src={icons.zoom_icon} alt="icons" className='icon-player-left'/>
        </div>
    </div>
  )
}
