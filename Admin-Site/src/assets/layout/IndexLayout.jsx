import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import AddSongs from "../pages/AddSongs"
import AddAlbum from "../pages/AddAlbum"
import ListSongs from "../pages/ListSongs"
import ListAlbum from "../pages/ListAlbum"
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar';

export const url = "http://localhost:4000";

export default function IndexLayout() {
  return (
    <div className='body-sc'>
      <ToastContainer />
      <SideBar />
      <div className='main-sc'>
      <Navbar />
        <div className='menu-layout'>
            <Routes>
                <Route path='/add-song' element={<AddSongs />}/>
                <Route path='/add-album' element={<AddAlbum />}/>
                <Route path='/list-song' element={<ListSongs />}/>
                <Route path='/list-album' element={<ListAlbum />}/>
            </Routes>
        </div>
      </div>
     </div>
  )
}
