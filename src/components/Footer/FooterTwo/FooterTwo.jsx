import React from 'react';
import FooterButtonTwo from '../../Buttons/FooterButtonTwo';
import Container from '../../Container/Container';
import './FooterTwo.css';

const FooterTwo = () => {
  return (
    <section className='FooterTwo-Section'>
        <Container>
            <div  className='FooterTwo-Content'>
                <div className='FooterTwo-Logo'>
                    <h1>Eagle Industrial</h1>
                </div>
                <div id='borderlineTwo'>
                </div>
                <h2 className='FooterTwo-Ending'>
                    Quality and Safety, Engineered.
                </h2>
            </div>
          <FooterButtonTwo/>
        </Container>
    </section>
    )
}

export default FooterTwo