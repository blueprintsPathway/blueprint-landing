import React from 'react'
import './About.css'
import Line from '../../assets/line-this.png'

const About = () => {
  return (
  <div className='ab-wrapper'>

               {/* ABOUT TOP */}
      <div className='about-con-top'>
          <img src={Line} className='ab-line' alt='line' />
          <span className='about-title'>
              Who are we?
          </span>
          <p className='about-words'>We are an African tech company focused on simplifying <br />
           the digital experience of millions of people accross Africa.<br />
           We connect you to solutions designed to eliminate <br />
          everyday complications.
           </p>
           <button className='about-btn'>Get to know more</button>
      </div>


                {/* ABOUT BOTTOM */}
      <div className='about-con-bottom'>
          <img src={Line} className='ab-line' alt='line' />
          <span className='ab-bottom-title'>
              What we believe
          </span>
          <p className='ab-bottom-words'>
              Our team is committed to breaking the barriers to success, but we pride 
              ourselves in our healthy work environment, one that primes every one of us 
              to do our best and deliver more than expected.
          </p>
          <div className='about-cards'>
            <div className='ab-card'>
                <p className='card-icon'>ab</p>
                <p className='card-text'>Creativity</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About
