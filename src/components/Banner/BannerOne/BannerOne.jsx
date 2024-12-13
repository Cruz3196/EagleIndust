import React from 'react';
import Container from '../../Container/Container';
import './BannerOne.css'


const BannerOne = () => {
  return (
      <section className='BannerOne-Section'>
        <Container>
          <div className='BannerOne-Content'>
              <div className='BannerOne-Header'>
                <h2>Experience and Expertise are Clear in <br/>Our Services.</h2> 
              </div>
              <div className='BannerOne-Content'>
                <p>We self-perform ASME code repairs and retrofits, civil work, foundation work, trenching, structural bracing, excavation, installation of new pipes, rigging, and heavy equipment setting. </p>
                <p>
                From replacing and repairing tanks, valves, pumps, pipes, vessels, and boilers, our experienced team of engineers and construction professionals provide quality and efficiency in all our work.
                </p>
              </div>
          </div>
        </Container>
      </section>
  )
}

export default BannerOne