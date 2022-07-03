import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
 <div className='AppNavbar'>
   <section id="header">     
    <h3>Port<span>folio</span></h3>
        <div>
            <ul id="navbar"  >
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    </section>
  </div>
  )
}

export default Navbar