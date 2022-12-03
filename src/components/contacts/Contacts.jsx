import React, {useRef, useState} from 'react'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import './contacts.css'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contacts = () => {

  const notify = () => toast("Message is sent!");


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fyctvcs', 'template_jco9apn', form.current, 'BhruHcm3836yorw07')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      notify(); 

      e.target.reset();
  };

  return (
    <section id='contacts'>
        <h2>Contact Me</h2>

        <div className="container contacts__container">
          <div className="contact__options">
            <article className="contact__option">
              <div className="contact__option-icon">
                <MdEmail/>
              </div>
              <h4>Email</h4>
              <h5>firsovalizzz@gmail.com</h5>
              <a href = "mailto: firsovalizzz@gmail.com" target='_blank'>Send a message</a>
            </article>

            <article className="contact__option">
              <div className="contact__option-icon">
                <BsMessenger/>
              </div>
              <h4>Messenger</h4>
              <h5>Elizaveta Firsova</h5>
              <a href = "https://m.me/100082183097016" target='_blank'>Send a message</a>
            </article>
          </div>
          {/*END OF CONTACT OPTIONS*/}
          {/* <form ref={form} on Submit={sendEmail}>
            <input type='text' name="name" placeholder='Your Full Name' required/>
            <input type='email' name="email" placeholder='Your Email' required/>
            <textarea name="message" rows='7' placeholder='Your Message' required/>
            <button type='submit' value="Send" className='btn btn-primary' >Send Message</button>
          </form> */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Your Full Name' required/>
            <input type="email" name="email" placeholder='Your Email' required/>
            <textarea name="message" rows='7' placeholder='Your Message' required/>
            <button type="submit" value="Send" className='btn btn-primary'>Send Message</button>
          </form>

          <div>
            <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
            theme="light"
            />
          </div>

        </div>
      </section>
  )
}

export default Contacts