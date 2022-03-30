import React from 'react'
import './nav.css'
import {FiHome} from 'react-icons/fi'
import {FiUserCheck} from 'react-icons/fi'
import {BiBookBookmark} from 'react-icons/bi'
import{RiServiceLine} from 'react-icons/ri'
import {AiFillContacts} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active':'' }><FiHome/></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}><FiUserCheck/></a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active':'' }><BiBookBookmark/></a>
      <a href='#services' onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active':'' }><RiServiceLine/></a>
     
      <a href='#contact'onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active':'' }><AiFillContacts/></a>
    </nav>
  )
}

export default Nav
