import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

export default function SongItems({name, image, desc, id}) {
  const { playWithId } = useContext(PlayerContext)

  return (
    <div onClick={() => {playWithId(id)}} className='items-displays'>
        <img src={image} alt="song-icon" className='rounded'/>
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}
