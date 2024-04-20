import React from 'react';
import './Hero.css';
import hero_img from '../assets/hero.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Shoes Store</h2>
      <div>
      <div className="hero-hand-icon">
        <p>New</p>
        <img src={hero_img} alt="" />
      </div>
      <p>Collections</p>
      <p>By Nike</p>
      </div>
      <div className="hero-latest-btn">
        <div>Latest Collection</div>
      </div>
     </div>
     <div className="hero-right">
      <img src={hero_img} alt="" />
     </div>
    </div>
  )
}

export default Hero