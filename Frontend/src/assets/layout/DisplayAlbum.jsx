import React from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router'
import { albumsData, assets, icons } from '../js/assets';

export default function DisplayAlbum() {
    const {id} = useParams();
    const albums_data = albumsData[id];
    // console.log(albums_data);

  return (
    <>
     <Navbar />
     <div className='playlist-show-songs'>
        <img src={albums_data.image} alt="album" className='w-48 rounded'/>
        <div className='flex flex-col'>
            <p>Playlist</p>
            <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albums_data.name}</h2>
            <h4>{albums_data.desc}</h4>
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
    </>
  )
}
