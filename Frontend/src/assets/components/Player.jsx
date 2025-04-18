import React from 'react'
import { songsData, assets, icons } from '../js/assets'
import { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

export default function Player() {
    const song_list_export = songsData;
    const { seekBar, seekBg, playStatus, play, pause, isTrack, isTime } = useContext(PlayerContext);
  return (
    <div className='player-sc'>
        <div className='song-icons'>
          <img src={isTrack.image} alt="song-icon" />
            <div>
              <p className='title-song-pl'>{isTrack.name}</p>
              <p>{isTrack.desc.slice(0, 12)}</p>
           </div>
        </div>
        <div className='icons-player'>
            <div className='icons-player-group'>
               <img src={icons.shuffle_icon} alt="ico-player" />
               <img src={icons.prev_icon} alt="ico-player" />
               {playStatus ? <img onClick={() => {pause()}} src={icons.pause_icon} alt="ico-player" /> : <img onClick={() => {play()}} src={icons.play_icon} alt="ico-player" />}
               <img src={icons.next_icon} alt="ico-player" />
               <img src={icons.loop_icon} alt="ico-player" />
            </div>
            <div className='slide-player'>
              <p>{isTime.currectTime.minute}:{isTime.currectTime.second}</p>
                <div ref={seekBg} className='slide-sc'>
                    <hr ref={seekBar} className='slide'/>
                </div>
              <p>{isTime.totalTime.minute}:{isTime.totalTime.second}</p>
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
