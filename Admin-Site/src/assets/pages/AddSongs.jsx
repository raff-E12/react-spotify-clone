import React, { useState } from 'react'
import assets from '../js/assets_admin'
import axios from "axios"
import { url } from '../layout/IndexLayout';
import { toast } from 'react-toastify';

export default function AddSongs() {
  const [isImage, setImage] = useState(false);
  const [isSong, setSong] = useState(false);
  const [isName, setName] = useState("");
  const [isDesc, setDesc] = useState("");
  const [isAlbum, setAlbum] = useState("none");
  const [isLoading, setLoading] = useState(false);
  const [AlbumData, setAlbumData] = useState([]);

  const onSubmitHandler = async (e) =>{
      e.preventDefault();
      setLoading(true);

      try {

        const form_Data = new FormData();
        
        form_Data.append("name", isName);
        form_Data.append("desc", isDesc);
        form_Data.append("image", isImage);
        form_Data.append("audio", isSong);
        form_Data.append("album", isAlbum);

        const response = await axios.post(`${url}/api/song/add`, form_Data);

        if (response.data.status === 200) {
          toast.success("Song is Added");
          setName("");
          setDesc("");
          setAlbum("none");
          setImage(false);
          setSong(false);
        } else{
          toast.error("Song is not Added");
        }

      } catch (error) {
        console.log(error);
        toast.error("Bad Request");
      }

      setLoading(false);
  }

  return (
    <>
    {isLoading ? <div className='grid place-items-center min-h-[80vh]'> 
       <div className='w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin'></div>
    </div> : <form onSubmit={onSubmitHandler} className='flex flex-col items-start gap-8 text-gray-600 pb-5'>
<div className='flex gap-8'>
  <div className='flex flex-col gap-4'>
    <p>Upload Song</p>
    <input type='file' id='song' accept='audio/*' onChange={(e) => setSong(e.target.files[0])} hidden/>
    <label htmlFor="song">
      <img src={isSong ? assets.upload_added : assets.upload_song} alt="icons" className='w-24 cursor-pointer' draggable="false" />
    </label>
  </div>
  
  <div className='flex flex-col gap-4'>
    <p>Upload Image</p>
    <input type='file' onChange={(e) => setImage(e.target.files[0])} id="image" accept='image/*' hidden/>
    <label htmlFor="image">
      <img src={isImage ? URL.createObjectURL(isImage) : assets.upload_area} alt="icons" className='w-24 cursor-pointer' draggable="false" />
    </label>
  </div>
</div>

<div className='flex flex-col gap-2.5'>
    <p>Song Name</p>
    <input onChange={(e) => setName(e.target.value)} value={isName} type='text'className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]' placeholder='Song Name...' required/>
  </div>

  <div className='flex flex-col gap-2.5'>
    <p>Song Description</p>
    <input type='text' onChange={(e) => setDesc(e.target.value)} value={isDesc} className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]' placeholder='Song Description...' required/>
  </div>

  <div className='flex flex-col gap-2.5'>
    <p>Album</p>
    <select className='bg-transparent outline-green-600 borde-2 border-gray-400 p-2.5 w-[150px]' onChange={(e) => setAlbum(e.target.value)} defaultValue={isAlbum}>
      <option value="none">None</option>
    </select>
  </div>

  <button type='submit' className='text-base bg-black text-white py-2.5 px-14 cursor-pointer'>Add Song</button>
</form>}
    </>
  )
}
