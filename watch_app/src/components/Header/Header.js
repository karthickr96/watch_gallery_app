// import React from 'react'
import React from 'react'
import logo from '../../images/logo.png.webp'
// import CgSearch from 'react-icons/cg'
// import RxPerson from 'react-icons/rx'
// import AiOutlineShoppingCart from 'react-icons/ai'

import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <img src={logo} alt="logo-img" />
        <ul className='navbar'>
          <li className='nav-links'>Home</li>
          <li className='nav-links'>Shop</li>
          <li className='nav-links'>About</li>
          <li className='nav-links'>Latest </li>
          <li className='nav-links'>Blog</li>
          <li className='nav-links'>Pages</li>
          <li className='nav-links'>Contact</li>
        </ul>
        {/* <ul className="header-right">
                <li className="nav-links"><CgSearch /></li>
                <li className="nav-links"><RxPerson /></li>
                <li className="nav-links cart"><AiOutlineShoppingCart />
                <div className="cart-value-container"><p className="cart-value">123</p></div></li>
            </ul> */}
    </div>
  )
}

export default Header