import React from 'react'
import './Navbar.css';
const Navbar = () => {
  return (
 <div className='AppNavbar'>
   <section id="header">
        <p>RY</p>
        <div>
            <ul id="navbar">
                <li><a class="active" href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Passion</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    </section>
  </div>
  )
}

export default Navbar