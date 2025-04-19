import React from 'react'
import { useNavigate } from "react-router"

export default function AlbumItems({image, name, desc, id}) {
  const navigate = useNavigate(); // Utilizzo delle rotte tramite l'id per specificare gli album da rappresentare per ciasuna pagina
                                 // nel loro contenimento.

  return (
    <div className='items-displays' id={`album-${id}`} onClick={() => navigate(`/album/${id}`)}>
        <img className="rounded w-50" src={image} alt="album" />
        <p className='font-extrabold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}
