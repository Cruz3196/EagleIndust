import React from 'react';
import Container from '../Container/Container';
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <Container>
        <div className='hero-content'>
          <h1 className='hero-text'>Building a Strong, Safe <br/>
            Foundations for a Sustainable <br/>
            Future.
          </h1>
        </div>
      </Container>
    </div>
  )
}

export default Hero