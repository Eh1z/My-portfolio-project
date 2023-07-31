import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

      emailjs.sendForm('portfolio_emails', 'template_aldo7xk', form.current, 'h1NocG3I6K316dgcX')
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));

  };

  return (
    <>
      <h2 className="head-text">Grab a coffee & Let's chat</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:godsentehiz11@gmail.com" className="p-text">godsentehiz11@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+234 (701) 393-9475 " className="p-text">+234 (701) 393-9475</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form ref={form} onSubmit={handleSubmit} className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username"  />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email"  />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
            />
          </div>
          <button type="submit" className="p-text">{!loading ? 'Send Message' : 'Sending...'}</button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch.
          </h3>
          <h3 className="head-text"><span>
            I'll be with you very soon!</span>
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);