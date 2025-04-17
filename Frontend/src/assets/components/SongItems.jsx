import React from 'react'

export default function SongItems({name, image, desc, id}) {
  return (
    <div className='items-displays'>
        <img src={image} alt="song-icon" className='rounded'/>
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}
