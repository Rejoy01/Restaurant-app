import React from 'react';

import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>

      <img src={images.G} alt="G letter" />

    </div>
    <div className='app__aboutus-content flex__center'>
      {/* ------- about us ------*/}
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">AboutUs</h1>
        <img src={images.spoon} alt="spoon image" className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
        {/*----- knife image-------- */}
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about_knife" />
      </div>
        {/* ------our history --------*/}
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon image" className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
