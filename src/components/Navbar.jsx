import React, { useContext } from 'react'

import { AuthContext } from '../context/AuthContext'
import logo1 from '../img/talktome.png'
import online from '../img/online.png'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo"> <img src={logo1} style={{ width: 110 }} alt="" /></span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" /> 
        <img src={online} style={{ width: 13, height:13 }} alt="" /> <span>{currentUser.displayName}</span> 
        
      </div>
    </div>
  )
}

export default Navbar