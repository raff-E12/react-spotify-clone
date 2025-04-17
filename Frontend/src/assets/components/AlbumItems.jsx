import React from 'react'

export default function AlbumItems({image, name, desc, id}) {
  return (
    <div className='items-displays'>
        <img className="rounded w-50" src={image} alt="album" />
        <p className='font-extrabold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}
