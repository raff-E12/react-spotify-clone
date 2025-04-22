import React, { useEffect, useState } from 'react'
import assets from '../js/assets_admin'
import axios from 'axios';
import { toast } from 'react-toastify';
import { url } from '../layout/IndexLayout';

// Stesso Schema Applicato Add-Music

export default function AddAlbum() {
  const [isImage, setImage] = useState(false);
  const [isColor, SetColor] = useState("#ffffff");
  const [isName, SetName] = useState("");
  const [isDesc, SetDesc] = useState("");
  const [isLoading, setLoading] = useState(false);

  const onSubmitAlbumAdd = async (e) =>{
      e.preventDefault();
      setLoading(true)
      
      try {
        const Form_Data = new FormData();

        Form_Data.append("name", isName);
        Form_Data.append("desc", isDesc);
        Form_Data.append("image", isImage);
        Form_Data.append("bgColor", isColor);

        const response = await axios.post(`${url}/api/album/add`, Form_Data);

        if (response.data.status === 200) {
          toast.success("Album is Added");
          SetDesc("");
          setImage(false);
          SetName("");
        } else{
          toast.error("The Fields Were not appreciated");
        }

      } catch (error) {
        console.log(error);
        toast.error("Server Error while loading");
      }

      setLoading(false);
  }

  return (
   <>
    {isLoading ? (<div className='loading-icon'></div>) :  (<form  className='flex flex-col items-start gap-8 text-gray-600 pb-5' onSubmit={onSubmitAlbumAdd}>

<div className='flex flex-col gap-4'>
  <p>Upload Image</p>
  <input type="file" accept='image/*' hidden id='image' onChange={(e) => setImage(e.target.files[0])}/>
  <label htmlFor="image">
    <img src={isImage ? URL.createObjectURL(isImage) : assets.upload_area} alt="icons" className='w-24 cursor-pointer'/>
  </label>
</div>

<div className='flex flex-col gap-2.5'>
  <p>Album name</p>
  <input type="text" className='input-text' placeholder='Album Name....' onChange={(e) => SetName(e.target.value)} value={isName} required/>
</div>

<div className='flex flex-col gap-2.5'>
  <p>Album Description</p>
  <input type="text" className='input-text' placeholder='Album Desc....' onChange={(e) => SetDesc(e.target.value)} value={isDesc} required/>
</div>

<div className='flex flex-col gap-3'>
  <p>Background Color</p>
  <input type="color" onChange={(e) => SetColor(e.target.value)} value={isColor} required/>
</div>

<button type='submit' className='text-base bg-black text-white py-2.5 px-14 cursor-pointer'>Add Album</button>
</form>
)}
   </>
  )
}
