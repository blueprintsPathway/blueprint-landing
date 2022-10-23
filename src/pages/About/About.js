import React from 'react'
import './About.css'
import Line from '../../assets/line-this.png'
import creativity from '../../assets/creativity.png'
import collaboration from '../../assets/collaboration.png'
import value from '../../assets/value-oriented.png'
import innovation from '../../assets/innovation.png'
import problem from '../../assets/problem-solving.png'
import driven from '../../assets/driven.png'
import frame from '../../assets/frame-design.png'


const About = () => {
  return (
  <div className='ab-wrapper'>

               {/* ABOUT TOP */}
      <div className='about-con-top'>
          <img src={Line} className='ab-line' alt='line' />
          <span className='about-title'>
              What we do
          </span>
          <p className='about-words'>
          We create solutions designed to eliminate everyday complications. Blueprints Pathway is a place where businesses become brands. We are a Nigerian Digital Agency company committed to simplifying digital processes in every industry across Africa.
We believe in better. Because better doesn’t live in isolation and never stops evolving. Because better knows that best is only temporary. We are new, fresh and hungry. We exist to make the world a better experience.
           </p>            

           <div className='card-con'>

              <div className='card-con-left'>
                <div className='card card1'
                style={{backgroundColor: '#9747FF4F'}}
                >
                  <h3 className='card-title'>Branding</h3>
                  <p className='card-words'>Meeting brand objectives is made simpler with Blueprints Pathway since we provide strategy services with great brains that thoroughly investigate the best communication model and approach for your company.</p>
                   <div className='card-bottom'>
                  <p className='card-link'>Get to know more</p>
                  <img  className='card-frame' src={frame} alt='card-frame' />
                   </div>
                </div>

                <div className='card card2'
                style={{backgroundColor: '#FCF6EE'}}
                >
                  <h3 className='card-title'>IT services, Product Design & Development </h3>
                  <p className='card-words'> From the UI to the UX, we develop mood-enhancing, narrative websites that reach and make them appear appealing to their target demographic and beyond, add flavour to the brand, and give it more trust.</p>
                  <div className='card-bottom'>
                  <p className='card-link'>Get to know more</p>
                  <img  className='card-frame' src={frame} alt='card-frame' />
                   </div>
                 </div>

              </div>

              
                <div className='card-con-right'>

                 <div className='card card3'
                 style={{backgroundColor: '#B1D8FE'}}
                 >
                  <h3 className='card-title'>Content</h3>
                  <p className='card-words'>We produce content that works on all digital and social media channels. Content draws your audience even closer by narrating the stories behind your business. </p>
                  <div className='card-bottom'>
                  <p className='card-link'>Get to know more</p>
                  <img  className='card-frame' src={frame} alt='card-frame' />
                   </div>
                </div>

                <div className='card card4'
                 style={{backgroundColor: '#DEE3E6'}}
                >
                  <h3 className='card-title'>Brand Engagement</h3>
                  <p className='card-words'>Your brand will undoubtedly establish a steadfast place in the hearts of your target audience by engaging in conversation and responding to client issues.</p>
                  <div className='card-bottom'>
                  <p className='card-link'>Get to know more</p>
                  <img  className='card-frame' src={frame} alt='card-frame' />
                   </div>
                </div>
              </div>
              
           </div>
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
            <div>
            <img className='about-img' src={creativity} alt='cards' />
            <img className='about-img' src={collaboration} alt='cards' />
            <img className='about-img' src={value} alt='cards' />
            </div>
            <div>
            <img className='about-img' src={innovation} alt='cards' />
            <img className='about-img' src={problem} alt='cards' />
            <img className='about-img' src={driven} alt='cards' />
            </div>
          </div>
          <p className='about-cta'>Get to know more</p>
      </div>
  </div>
  )
}

export default About
