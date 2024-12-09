import React from 'react';
import Container from '../Container/Container';
import './HeroTwo.css';

const HeroTwo = () => {
  return (
    <section className='HeroTwo-Section'>
     <Container>
        <div className='HeroTwo-Container'  data-aos='fade-up'>
           <div className='HeroTwo-Header'>
             expert leadership on every project 
           </div>
           <div className='HeroTwo-Content'>
             <p>
               No matter the size, complexity or turnaround time of your project, we are fully equipped for any challenge.  
             </p>
             <p>
               The expert leadership at Eagle Industrial and the collective experience of our highly skilled team provides our clients with innovative solutions and quality service ensuring projects are completed safely, on time and on budget.  
             </p>
             <p>
               Expand your Our clients interact directly with our leadership team who continuously strive to provide cost-effective solutions to technically challenging initiatives, and deliver exceptional results. We have saved clients upwards of 30% on construction projects leveraging our thorough pre-planning process and groundbreaking engineering. 
             </p>
           </div>
        </div>
     </Container>
    </section>
  )
}

export default HeroTwo