import React from 'react'
import './Newnav.css'

const Newnav = () => {
  return (
    <div className='nav-con'>
        <div className='nav-left'>
            <h1>LOGO</h1>
        </div>
        <div className='nav-right'>
            <ul className='nav-ul'>
                <li>Home</li>
                <li>Solutions</li>
                <li>Blog</li>
                <li>Our Culture</li>
            </ul>
            <button className='nav-btn'>Get to know more</button>
        </div>
    </div>
  )
}

export default Newnav