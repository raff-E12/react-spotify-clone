import React, { createContext, useEffect, useState } from 'react'
import { useRef } from 'react';
import { songsData } from '../js/assets';

// utilizzo del Pattern Provider nel espotazione dati:

export const PlayerContext = createContext(); // 1. Creazione di una CreateContext

export default function PlayerContextProvider(props) {

    const audioRef = useRef(); // Prende in riferimento l'elemento html del componente.
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
            seekBar.current.style.width = `${(Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100))}%`;
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

    const playWithId = async (id) =>{
        const song_id = await setTrack(songsData[id]);
        const audio_ref = await audioRef.current.play();
        setPlayStaus(true);
    }

    const previous = async () =>{
        if (isTrack.id > 0) {
            const track_id = await setTrack(songsData[isTrack.id + 1])
            const audio_ref = await audioRef.current.play();
            setPlayStaus(true);
        }
    }

    const next = async () =>{
        if (isTrack.id < songsData.length - 1) {
            const track_id = await setTrack(songsData[isTrack.id + 1])
            const audio_ref = await audioRef.current.play();
            setPlayStaus(true);
        }
    }

    const seekSong = async (e) =>{
        // console.log(e);
        return audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration);
    }
    
    const context_Value = { // 2. Creazione di una costante con tutte le possibili materiali da esportare.
        audioRef,
        seekBg,
        seekBar,
        isTrack, setTrack,
        playStatus,setPlayStaus,
        isTime, setTime,
        play, pause, playWithId, 
        previous, next, seekSong
    }

    // 3. Definire un attributo di valore con la variabile da esportare con i possibili materiali da aggiungere ai componenti.
  return (
    <PlayerContext.Provider value={context_Value}>
        {props.children}
    </PlayerContext.Provider>
  )
}
