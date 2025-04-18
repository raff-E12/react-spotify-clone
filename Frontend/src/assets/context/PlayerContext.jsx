import React, { createContext, useEffect, useState } from 'react'
import { useRef } from 'react';
import { songsData } from '../js/assets';

export const PlayerContext = createContext();

export default function PlayerContextProvider(props) {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [isTrack, setTrack] = useState(songsData[1]);
    const [playStatus, setPlayStaus] = useState(false);
    const [isTime, setTime] = useState({
        currectTime:{
            second: 0,
            minute: 0
        },
        totalTime:{
            second: 0,
            minute: 0
        }
    });

    useEffect(()=>{
        setTimeout(() => {
            audioRef.current.ontimeupdate = () =>{
            // console.log(seekBar.current.style);
            seekBar.current.style.width = `${(Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100))}px`;
                setTime({
                    currectTime:{
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime:{
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                });
            };
        }, 1000);
    },[audioRef])

    const play = () => {
        audioRef.current.play();
        setPlayStaus(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayStaus(false);
    }
    
    const context_Value = {
        audioRef,
        seekBg,
        seekBar,
        isTrack, setTrack,
        playStatus,setPlayStaus,
        isTime, setTime,
        play, pause
    }

  return (
    <PlayerContext.Provider value={context_Value}>
        {props.children}
    </PlayerContext.Provider>
  )
}
