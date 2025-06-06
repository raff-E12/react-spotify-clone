import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router'
import { albumsData, assets, icons, songsData } from '../js/assets';
import { PlayerContext } from '../context/PlayerContext';
import { useState } from 'react';
import { useEffect } from 'react';

export default function DisplayAlbum({albums}) {
    const {id} = useParams(); // con use-param ha preso l'id per la rapprensentazione di ciascun album selezionato 
    // const albums_data = albumsData[id];
    // console.log(albums_data);
    // console.log(albums.name);
    const [AlbumData, SetAlbumData] = useState([]); //Esportazione controllata degli album appartenti alle canzoni corrispondenti
    const {playWithId, AlbumsData, songData} = useContext(PlayerContext);

    useEffect(() =>{AlbumsData.map((items) =>{
        if (items._id === id) {
          SetAlbumData(items);
        }
    })},[])

    console.log(albumsData);

  return (
    <>
     {AlbumsData ? (
    <>
    <Navbar />
     <div className='playlist-show-songs'>
        <img src={AlbumData.image} alt="album" className='w-48 rounded'/>
        <div className='flex flex-col'>
            <p>Playlist</p>
            <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{AlbumData.name}</h2>
            <h4>{AlbumData.desc}</h4>
            <p className='mt-1'>
                <img src={icons.spotify_logo} alt="logo-spotify" className='inline-block w-5'/>
                <b>Spotify</b>
                ⋅ 1,1020,349 likes
                ⋅ <b>50 songs,</b>
                about 2 hr 30 min
            </p>
        </div>
     </div>
     <div className='grid-song-id-pres'>
        <p><b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <img src={icons.clock_icon} alt="icons" className='m-auto w-4'/>
     </div>
     <hr />
      <div className='flex flex-col  w-full'>
        {/* Filtraggio dei valori corrispondenti alle varie proprietà del album*/}
        {songData.filter((song) => {return song.album === albums.name}).map((items,index) => {
          return(
            <>
          <div key={index} onClick={() => playWithId(items._id)} className='grid grid-col-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
            <p className='text-white'>
              <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
              <img src={items.image} alt="icons" className='inline w-10 mr-5'/>
              {items.name}
            </p>
            <p className='text-[1em]'>{AlbumData.name}</p>
            <p className='text-[1em] hidden sm:block'>5 days ago</p>
            <p className='text-[1em] text-center'>{items.duration}</p>
          </div>
            </>
          )
      })}
      </div>
    </>
    ) : null}
    </>
  )
}
