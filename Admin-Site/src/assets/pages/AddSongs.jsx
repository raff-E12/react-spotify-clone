import React, { useEffect, useState } from 'react'
import assets from '../js/assets_admin'
import axios from "axios"
import { url } from '../layout/IndexLayout';
import { toast } from 'react-toastify';

// Creazione del Form per l'aggiunta di nuova musica nel database.

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
      setLoading(true); // Alternanza di stato di isLoading

      try {

        const form_Data = new FormData(); // L'oggetto formData è uno oggetto che raggruppa delle coppie chiave valore.
        
        form_Data.append("name", isName);  // Per ogni valore conservato, vengono aggiunti ai parametri corrispondenti del Api al FormData
        form_Data.append("desc", isDesc);  // Valore attribuito alla FormData verranò passati all' Api.
        form_Data.append("image", isImage);
        form_Data.append("audio", isSong);
        form_Data.append("album", isAlbum);

        const response = await axios.post(`${url}/api/song/add`, form_Data); // Chiamata Api tramite database.

        if (response.data.status === 200) {  //Se lo stato corrisponde allora sarà vera.
          toast.success("Song is Added");
          setName("");
          setDesc("");
          setAlbum("none");
          setImage(false);
          setSong(false);
        } else{   // Se no sarà falso come si prevede.
          toast.error("Song is not Added");
        }

      } catch (error) {
        console.log(error);
        toast.error("Bad Request");
      }

      setLoading(false); // Alternanza di stato di isLoading
  }

  const loadAlbumData = async () =>{
    try {
      const response = await axios.get(`${url}/api/album/list`);
      
      if (response.data.status === 200) {
         setAlbumData(response.data.list);
      } else{
        toast.error("Album List is Empty");
      }
      
    } catch (error) {
      console.log(error);
      toast.error("Server Error Connections");
    }
  }

  useEffect(() =>{ loadAlbumData() },[])

  return (
    <>
    {isLoading ? <div className='menu-add-song'> 
       <div className='loading-icon'></div>
    </div> : <form onSubmit={onSubmitHandler} className='form-sc-song'>
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
    <input onChange={(e) => setName(e.target.value)} value={isName} type='text'className="input-text" placeholder='Song Name...' required/>
  </div>

  <div className='flex flex-col gap-2.5'>
    <p>Song Description</p>
    <input type='text' onChange={(e) => setDesc(e.target.value)} value={isDesc} className='input-text' placeholder='Song Description...' required/>
  </div>

  <div className='flex flex-col gap-2.5'>
    <p>Album</p>
    <select className='bg-transparent outline-green-600 borde-2 border-gray-400 p-2.5 w-[150px]' onChange={(e) => setAlbum(e.target.value)} defaultValue={isAlbum}>
      <option value="none">None</option>
      {AlbumData.map((items, index) => { return(<option key={index} value={items.name}>{items.name}</option>)})}
    </select>
  </div>

  <button type='submit' className='text-base bg-black text-white py-2.5 px-14 cursor-pointer'>Add Song</button>
</form>}
    </>
  )
}
