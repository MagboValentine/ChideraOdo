import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';
import { NavLink } from "react-router-dom"

// BEM ->

const Menu = () => (
  <>
        <p>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </p>

        <p>
          <NavLink to="/gallery" activeClassName="active">
            Gallery
          </NavLink>
        </p>

        <p><a href="http://www.ebeano.org" target='blank'>Ebeano</a></p>

        <p><a href="#contact">Contact</a></p>
  </>
)

const Navbar = () => {
  const [ toggleMenu, setToggleMenu ] = useState(false);

  return (
    <div className="co__navbar" >
      <div className="co__navbar_left">
        <div className="co__navbar_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="co__navbar-links">
         <Menu />
        </div>
      </ div>
      <div className="co__navbar-menu">
        {toggleMenu
          ? < RiCloseLine color="#3d3d3d" size={27} onClick={() => setToggleMenu(false)} />
          : < RiMenu3Line color="#3d3d3d" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="co__navbar-menu_container scale-up-center">
            <div className="co__navbar-menu_container-links">
              <Menu />
            </ div>
          </ div>
        )}
      </div>
    </div>
  )
}

export default Navbar