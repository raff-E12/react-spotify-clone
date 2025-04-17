import React from 'react'
import Navbar from '../components/Navbar'
import { albumsData, songsData } from '../js/assets'
import AlbumItems from '../components/AlbumItems'
import SongItems from '../components/SongItems'

export default function Display() {
  return (
    <>
     <Navbar />
     <div className='mb-4'>
       <h4 className='my-5 font-bold text-2xl title-menu'>Featured Charts</h4>
       <div className='overflow-sc'>
         {albumsData.map((item, index) => { return <AlbumItems key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>})}
       </div>
       <div className='mb-4'>
         <h4 className='my-5 font-bold text-2xl title-menu'>Today's biggest hits</h4>
       </div>
       <div className='overflow-sc'>
          {songsData.map((items, index) => { return <SongItems key={index} name={items.name} desc={items.desc} id={items.id} image={items.image}/>})}
       </div>
     </div>
    </>
  )
}
