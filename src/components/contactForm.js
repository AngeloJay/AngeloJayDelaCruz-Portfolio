import React from 'react';
import './contactForm.css';

const contactForm = () => {
  return (
    <div className='contact-div'>
        <p>E-mail:</p>
        <input className='toAndFrom' type='email' required/>

        <p>Message:</p>
        <input className='msg' type='text' required/>

        <button>Submit</button>
    </div>
  );
};

export default contactForm;
