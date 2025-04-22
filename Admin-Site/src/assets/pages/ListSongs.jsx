import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { url } from '../layout/IndexLayout';
import { toast } from 'react-toastify';

export default function ListSongs() {
  const [isData, SetData] = useState([]);
  
  const fetchSongs = async ()=>{
    try {
      const response = await axios.get(`${url}/api/song/list`);
      console.log(response.data);
      if (response.data.status === 200) {
         SetData(response.data.result);
      }

    } catch (error) {
      console.log(error);
    }
  }

  const removeSong = async (id) =>{
      try {
        const response = await axios.post(`${url}/api/song/remove`, {id});
        
        if (response.data.status === 200) {
          toast.success("Song is Delete!!");
          await fetchSongs();
        }

      } catch (error) {
        console.log(error);
        toast.error("Error Communications!!");
      }
  }

  console.log(isData)

  useEffect(() =>{ fetchSongs(); },[]);

  return (
    <div>
      <p className='text-2xl font-bold'>All Songs List</p>
      <br />
      <div>
         <div className='tables-values'>
            <b>Image</b>
            <b>Name</b>
            <b>Album</b>
            <b>Duration</b>
            <b>Action</b>
         </div>
         {isData.map((items, index) =>{
          return(
            <>
            <div key={index} className='box-song-index'>
               <img src={items.image} alt="song-icon" className='w-12' />
               <p>{items.name}</p>
               <p>{items.album}</p>
               <p>{items.duration}</p>
               <p className="btn-remove" onClick={() => removeSong(items._id)}>x</p>
            </div>
            </>
          )
         })}
      </div>
    </div>
  )
}
