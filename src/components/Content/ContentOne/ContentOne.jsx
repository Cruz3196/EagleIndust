import React from 'react';
import Container from '../../Container/Container';
import './ContentOne.css';

const ContentOne = () => {
  return (
    <Container>
        <section className='ContentOne-Section'>
            <div className='ContentOne-Content'>
                <div className='ContentOne-Header' data-aos='fade-up'>
                    <h1>Our Commitment to Safety.</h1>
                </div>
                <div className='ContentOne-Info' data-aos='fade-up'>
                    <p>
                    Our work begins with our people. At Eagle Industrial, the safety of our clients and employees is our top priority and at the core of our business.
                    </p>
                    <p>
                    We adhere to extreme safety measures when controlling hazardous project conditions to ensure a safe and injury-free environment for our clients and employees. 
                    </p>
                    <p>
                    We provide an in-depth safety training program for our team to secure the safest working measures on all of our projects. Our safety adherence is in compliance with all regulatory federal, state and local requirements, as well as the Occupational Safety and Health Administration (OSHA).
                    </p>
                </div>
            </div>
        </section>
    </Container>
  )
}

export default ContentOne