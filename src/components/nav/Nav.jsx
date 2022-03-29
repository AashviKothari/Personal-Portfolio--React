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
      <a href='#' className={activeNav === '#' ? 'active':'' }><FiHome/></a>
      <a href='#about'  onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}><FiUserCheck/></a>
      <a href='#experience'><BiBookBookmark/></a>
      <a href='#services'><RiServiceLine/></a>
      <a href='#contact'><AiFillContacts/></a>
    </nav>
  )
}

export default Nav
