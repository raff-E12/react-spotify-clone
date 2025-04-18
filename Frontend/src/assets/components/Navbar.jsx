import React from 'react'
import { icons } from '../js/assets'
import { useNavigate } from 'react-router'

export default function Navbar() {
  const navigate = useNavigate(); // restituisce una la navigazione corrente impostando 
                                 // come predefinitiva inattiva, quando non è in corso alcuna navigazione.

  return (
   <>
    <div className='navbar-sc'>
       <div className='nav-icons'>
         <img onClick={() => navigate(-1)} src={icons.arrow_left} alt="icons" className='arrows-icons' />
         <img onClick={() => navigate(1)} src={icons.arrow_right} alt="icons" className='arrows-icons' />
       </div>
        <div className='left-btn-nav'>
           <p className='btn-nav'>Explore Premium</p>
           <p className='btn-nav second'>Install App</p>
           <p className='user-icons'>d</p>
        </div>
    </div>
      <div className='items-btn-nav'>
         <p className='btn-nav'>All</p>
         <p className='btn-nav inactive'>Podcast</p>
      </div>
    </>
  )
}
