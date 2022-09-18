import React, { useContext } from 'react'
import cl from "./Navbar.module.scss"
import { GiHamburgerMenu } from "react-icons/gi"
import { TopicContext } from '../../context'

const Navbar = () => {
    const { menuOpen,setMenuOpen }=useContext(TopicContext)
  return (
    <div className={cl.navbar}>
        <GiHamburgerMenu onClick={()=>setMenuOpen(!menuOpen)}/>
        <h2>Имя преподователя</h2>
    </div>
  )
}

export default Navbar
