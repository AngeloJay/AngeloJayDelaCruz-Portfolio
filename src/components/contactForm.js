import React, { useRef } from 'react'
import './contactForm.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('x', 'x', form.current, {
        publicKey: 'x',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email has been sent!')
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Sorry something went wrong. Please reach out another way if the problemss')
        },
      );
  };

  return (
    <div className='contact-div'>
    <form ref={form} onSubmit={sendEmail}>
        <p>Name:</p>
        <input  className='email' type="text" name="user_name" required/>
        <p>E-mail:</p>
        <input className='email' type="email" name="user_email" required/>
        <p>Message:</p>
        <textarea className='msg' required/>
        <input className='submit-form' type="submit" value="Send" />
    </form>
    </div>
  );
};

export default ContactForm;
