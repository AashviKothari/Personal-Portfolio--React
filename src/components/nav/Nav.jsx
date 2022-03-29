import React from 'react'
import './nav.css'
import {FiHome} from 'react-icons/fi'
import {FiUserCheck} from 'react-icons/fi'
import {BiBookBookmark} from 'react-icons/bi'
import{RiServiceLine} from 'react-icons/ri'
import {AiFillContacts} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav>
      <a href='#'><FiHome/></a>
      <a href='#about'><FiUserCheck/></a>
      <a href='#experience'><BiBookBookmark/></a>
      <a href='#services'><RiServiceLine/></a>
      <a href='#contact'><AiFillContacts/></a>
    </nav>
  )
}

export default Nav
