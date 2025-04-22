import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { url } from '../layout/IndexLayout';

// Stesso Schema Applicato A ListSong

export default function ListAlbum() {
  const [isData, SetData] = useState([]);
  
  const fetchAlbums = async () =>{
    try {
      const response = await axios.get(`${url}/api/album/list`);
      console.log(response);

      if (response.data.status === 200) {
        SetData(response.data.list);
      }

    } catch (error) {
      console.log(error);
      toast.error("Error Server on Connection");
    }
  }

  const removeAlbum = async (id) =>{
    try {
      const response = await axios.post(`${url}/api/album/remove`, {id});
      
      if (response.data.status === 200) {
        toast.success("Album is Delete!!");
        await fetchAlbums();
      }

    } catch (error) {
      console.log(error);
      toast.error("Error Communications!!");
    }
}


  useEffect(() =>{ fetchAlbums() },[])

  return (
    <div className='pb-10'>
      <p className='text-2xl font-bold'>All Albums List</p>
      <br />
      <div>

         <div className='tables-values'>
           <b>Image</b>
           <b>Name</b>
           <b>Description</b>
           <b>Album Colour</b>
           <b>Action</b>
         </div>

         {isData.map((items, index) =>{
          return(
            <>
             <div key={index} className='box-song-index'>
                <img src={items.image} alt="icons" className='w-12' />
                <p>{items.name}</p>
                <p>{items.desc}</p>
                <input type="color" value={items.bgColor} readOnly/>
                <p className='btn-remove' onClick={() => removeAlbum(items._id)}>x</p>
             </div>
            </>
          )
         })}
      </div>
    </div>
  )
}
