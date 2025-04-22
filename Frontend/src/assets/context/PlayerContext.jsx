import React, { createContext, useEffect, useState } from 'react'
import { useRef } from 'react';
import { albumsData, songsData } from '../js/assets';
import axios from "axios"

// utilizzo del Pattern Provider nel espotazione dati:

export const PlayerContext = createContext(); // 1. Creazione di una CreateContext

export default function PlayerContextProvider(props) {

    const audioRef = useRef(); // Prende in riferimento l'elemento html del componente.
    const seekBg = useRef();
    const seekBar = useRef();

    // URI Principale per la chiamata Api
    const url = "http://localhost:4000";

    const [songData, SetDataSong] = useState([]); //Lista delle canzoni importata dal Database
    const [AlbumsData, SetAlbumsData] = useState([]); //Lista degli albums importa dal Database
    const [isTrack, setTrack] = useState(songsData[1]); //Lista delle Traccia Complete
    const [playStatus, setPlayStaus] = useState(false); //Alternanza tra pausa e play
    const [isTime, setTime] = useState({ //Oggetto Di Riferimento sulla durata effettiva della traccia
        currectTime:{
            second: 0,
            minute: 0
        },
        totalTime:{
            second: 0,
            minute: 0
        }
    });

    // Locomozione dello Slider presa in riferimento dall'audioRef (audioTag)
    useEffect(()=>{
        setTimeout(() => {
            audioRef.current.ontimeupdate = () =>{
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

    //Click della canzone all utilizzo del id dell'elemento
    const playWithId = async (id) =>{
        // const song_id = await setTrack(songsData[id]);
        // const audio_ref = await audioRef.current.play();
        // setPlayStaus(true);
        await songData.map((item) => {
            if (id === item._id) {
                setTrack(item)
            }
        })
        await audioRef.current.play();
        setPlayStaus(true);
    }

    //Corrispondenza del Id con la lista in Database.
    const previous = async () =>{
        // if (isTrack.id > 0) {
        //     const track_id = await setTrack(songsData[isTrack.id + 1])
        //     const audio_ref = await audioRef.current.play();
        //     setPlayStaus(true);
        // }
        songData.map( async (items, index) =>{ 
            if (isTrack._id === items._id && index > 0){
                await setTrack(songData[index - 1]);
                await audioRef.current.play();
                setPlayStaus(true);
            }
        })
    }

    const next = async () =>{
        // if (isTrack.id < songsData.length - 1) {
        //     const track_id = await setTrack(songsData[isTrack.id + 1])
        //     const audio_ref = await audioRef.current.play();
        //     setPlayStaus(true);
        // }
        songData.map( async (items, index) =>{
            if (isTrack._id === items._id && index < songData.length){
                await setTrack(songData[index + 1]);
                await audioRef.current.play();
                setPlayStaus(true);
            }
        })
    }

    const seekSong = async (e) =>{
        // console.log(e);
        return audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration);
    }
    
    //Estrazione dei valori trasmessi dal Database tramite Api
    const getSongData = async () =>{
        try {
            const response = await axios.get(`${url}/api/song/list`);
            // console.log(response.data.result[0])
            SetDataSong(response.data.result);
            setTrack(response.data.result[0]);
        } catch (error) {
            console.log(error);
        }
    }

    //Estrazione dei valori trasmessi dal Database tramite Api
    const getAlbumData = async () =>{
        try {
            const response = await axios.get(`${url}/api/album/list`);
            SetAlbumsData(response.data.list);
            setTrack(response.data.list[0]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => { getSongData(); getAlbumData(); }, [])
    
    const context_Value = { // 2. Creazione di una costante con tutte le possibili materiali da esportare.
        audioRef,
        seekBg,
        seekBar,
        isTrack, setTrack,
        playStatus,setPlayStaus,
        isTime, setTime,
        play, pause, playWithId, 
        previous, next, seekSong, songData, AlbumsData
    }

    // 3. Definire un attributo di valore con la variabile da esportare con i possibili materiali da aggiungere ai componenti.
  return (
    <PlayerContext.Provider value={context_Value}>
        {props.children}
    </PlayerContext.Provider>
  )
}
