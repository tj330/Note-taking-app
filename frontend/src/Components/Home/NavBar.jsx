import React, { useState } from 'react'
import "./Navbar.css"
import {person} from "../../assets/icons/logo"
import { useSelector } from 'react-redux'
import Dropdown from './Dropdown'

function NavBar() {

  const userDetails=useSelector((state)=>state.user.user)
  const hour=new Date().getHours()
  const greeting=hour>=12?"Afternoon":"Morning"
  const [profileTap,setProfileTap]=useState(false)

  return (
    <div className='nav-bar'>
      <p className='greeting'>Good {greeting} <span className='user'>{userDetails.username}</span>!</p>
      <div className='profile' onClick={()=>setProfileTap(!profileTap)}>
        <img src={userDetails.profile||person} alt="profile" className='profile-pic'/>
        <p className='nav-username'>{userDetails.username}</p>
        {profileTap?<Dropdown/>:""}
      </div>
    </div>
  )
}

export default NavBar