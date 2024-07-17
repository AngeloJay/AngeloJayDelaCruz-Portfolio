import React from 'react';
import './CardSlide.css';

function CardSlide({ image1, image2, image3 }) {

  const handleNavClick = (slideId) => {
    const element = document.getElementById(slideId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  };

  return (
    <div className='container'>
      <div className='slider-wrapper'>
        <div className='slider'>
          <img id="slider-1" src={image1} alt='slide1' />
          <img id="slider-2" src={image2} alt='slide2' />
          <img id="slider-3" src={image3} alt='slide3' />
        </div>
        
        <div className='slider-nav'>
          <button onClick={() => handleNavClick('slider-1')}>
            <box-icon name='circle' type='solid'></box-icon>
          </button>
          <button onClick={() => handleNavClick('slider-2')}>
            <box-icon name='circle' type='solid'></box-icon>
          </button>
          <button onClick={() => handleNavClick('slider-3')}>
            <box-icon name='circle' type='solid'></box-icon>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardSlide;
