import React from 'react'
import Navbar from '../components/Navbar'
import AlbumItems from '../components/AlbumItems'
import SongItems from '../components/SongItems'
import { PlayerContext } from '../context/PlayerContext'
import { useContext } from 'react'

export default function Display() {
  const {songData, AlbumsData} = useContext(PlayerContext);

  return (
    <>
     <Navbar />
     <div className='mb-4'>
       <h4 className='my-5 font-bold text-2xl title-menu'>Featured Charts</h4>
       <div className='overflow-sc'>
         {AlbumsData.map((item, index) => { return <AlbumItems key={index} name={item.name} desc={item.desc} id={item._id} image={item.image}/>})}
       </div>
       <div className='mb-4'>
         <h4 className='my-5 font-bold text-2xl title-menu'>Today's biggest hits</h4>
       </div>
       <div className='overflow-sc'>
          {songData.map((items, index) => { return <SongItems key={index} name={items.name} desc={items.desc} id={items._id} image={items.image}/>})}
       </div>
     </div>
    </>
  )
}
