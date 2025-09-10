import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router'

const Navbar = ({setShowSignIn}) => {

  const [menu,setMenu] = useState(" ");

  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo2} alt="" className='logo' /></Link>
        {/* <Link to='/'>Eatsy</Link> */}
        <ul className='navbar-menu'>
          <Link to='/' onClick={()=>(setMenu("Home"))} className={menu === "Home" ? "active":""}>Home</Link>
          <Link to='/menu' onClick={()=>(setMenu("Menu"))} className={menu === "Menu" ? "active":""}>Menu</Link>
          <a href='#' onClick={()=>(setMenu("Mobile-app"))} className={menu === "Mobile-app" ? "active":""}>Mobile-app</a>
          <a href='#footer' onClick={()=>(setMenu("Contact Us"))} className={menu === "Contact Us" ? "active":""}>Contact Us</a>
        </ul>
        <div className='navbar-right'>
          <img src={assets.search_icon} alt="" />
          <div className="navbar-cart-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className='dot'></div>
          </div>  
          <button onClick={()=>setShowSignIn(true)}>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar