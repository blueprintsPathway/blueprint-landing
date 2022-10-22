import React from 'react'
import './footer.css'
import whatsapp from '../../assets/whatsapp-icon.png'
import linkedin from '../../assets/linkedin-icon.png'
import instagram from '../../assets/instagram-icon.png'
import twitter from '../../assets/twitter-icon.png'
import tiktok from '../../assets/tiktok-icon.png'


const Footer = () => {
  return (
    <>
    <div className='foo-wrapper'>
        <div className='foo-left'>
            <p className='foo-title'>Blueprints Pathways</p>
            <hr />
            <ul className='foo-ul'>
                <li className='foo-li'>Elf Bus stop, No 1b Akinyemi Ave, <br /> Lekki Phase 1 106104, Lagos</li>
                <li className='foo-li'>+234-704-1127-855</li>
                <li className='foo-li'>+234-902-8197-960</li>
            </ul>
        </div>
        <div className='foo-middle'>
            <p className='foo-title'>Quick Links</p>
            <hr />
            <ul className='foo-ul'>
                <li className='foo-li'>Home</li>
                <li className='foo-li'>Solutions</li>
                <li className='foo-li'>Blog</li>
                <li className='foo-li'>Our Culture</li>
                <li className='foo-li'>Contact Us</li>
            </ul>
        </div>
        <div className='foo-right'>
            <p style={{textAlign: 'center'}} className='foo-title'>Follow Us</p>
            <hr style={{margin: '0px 120px'}} />
            <div className='foo-ul ul-right'>
                <img className='foo-img' src={whatsapp} alt='whatsapp' />
                <img className='foo-img' src={linkedin} alt='linkedin' />
                <img className='foo-img' src={instagram} alt='instagram' />
                <img className='foo-img' src={twitter} alt='twitter' />
                <img className='foo-img' src={tiktok} alt='tiktok' />
            </div>
        </div>
    </div>
    <div>
        <p className='foot-btm'>©  Copyright Blueprints 2022</p>
    </div>
    </>
  )
}

export default Footer
