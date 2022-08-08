import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import React from 'react'
import './App.css'
import FavoriteIcon from '@mui/icons-material/Favorite';


function Navbar() {
  return (
    <div className='navbar'>
    <IconButton>
    <MenuIcon color="secondary" sx={{ fontSize: 40 }}  />
    </IconButton>
    <h1 className='logotext'>EVERYTHING FOR YOU</h1>
    <FavoriteIcon fontSize='large'/>


    

    

      
    </div>
  )
}

export default Navbar
