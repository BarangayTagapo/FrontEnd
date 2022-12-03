import React, { useRef } from 'react';
import './contact.css';
import Title from '../../components/Title/Title';
import hotlines from '../../json/Hotlines.json';
import brgyHallMap from '../../images/map.png';
import emailjs from '@emailjs/browser';
import { useDispatch } from 'react-redux';
import { popupActions } from '../../store/popupSlice.js';

const Contact = () => {
  const form = useRef();
  const dispatch = useDispatch();
  const sendForm = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_gmu8jnp',
        'template_wkn1zis',
        form.current,
        'mflSj5_BbxoHzGv0U'
      )
      .then(
        (result) => {
          dispatch(
            popupActions.triggerPopup({
              display: true,
              type: 'success',
              message:
                'Message sent. Please wait for the staffs to reply to your contact you provided',
            })
          );
        },
        (error) => {
          dispatch(
            popupActions.triggerPopup({
              display: true,
              type: 'danger',
              message: error.text,
            })
          );
        }
      );

    e.target.reset();
  };

  return (
    <section className='contact py-4'>
      <Title text='What can we help you today?' />
      <div className='contact-content container'>
        {/* Contact form */}
        <form
          className='contact-content-form form-inputs'
          ref={form}
          onSubmit={sendForm}
        >
          <div>
            <label>
              Name
              <input type='text' name='name' />
            </label>
          </div>
          <div>
            <label>
              Contact Number/Email
              <input type='text' name='contact' />
            </label>
          </div>
          <div>
            <label>
              Topic
              <input type='text' name='topic' />
            </label>
          </div>
          <div>
            <label>
              Message
              <textarea name='message'></textarea>
            </label>
          </div>
          <div>
            <input type='submit' value='Submit' className='btn btn-primary' />
          </div>
        </form>
        {/* More contact info */}
        <div className='py-4'>
          <Title text='You can also contact us by:' />
          <div className='contact-content--hotlines'>
            {hotlines.map((hotline, index) => {
              return (
                <article key={index} className='shadow-sm'>
                  <h4>{hotline.number}</h4>
                  <p>{hotline.contactName}</p>
                </article>
              );
            })}
          </div>
        </div>
        <footer>
          <h3>
            Or you can visit us on{' '}
            <address>Bgy Tagapo Street, Purok 5, Santa Rosa City, Laguna</address>
          </h3>
          <img
            src={brgyHallMap}
            alt='barangay hall location'
            className='shadow-sm'
          />
        </footer>
      </div>
    </section>
  );
};

export default Contact;
