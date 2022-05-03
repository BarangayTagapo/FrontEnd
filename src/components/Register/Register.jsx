import React, { useState } from 'react';
import './register.css';
import Title from '../Title/Title';
import { useDispatch, useSelector } from 'react-redux';
import { popupActions } from '../../store/popupSlice';
import { registerUser } from '../../store/userActions';

const Register = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.user);
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Inputs value
    let fName = e.target[0].value;
    let mName = e.target[1].value;
    let lName = e.target[2].value;
    let email = e.target[3].value;
    let pass = e.target[4].value;
    let confirmPass = e.target[5].value;
    const form = new FormData();
    form.append('fName', fName);
    form.append('mName', mName);
    form.append('lName', lName);
    form.append('email', email);
    form.append('password', pass);
    form.append('image', file);

    // prevent register from processing when passwords didn't match
    if (pass !== confirmPass) {
      dispatch(
        popupActions.triggerPopup({
          display: true,
          message: 'Passwords does not match',
          type: 'danger',
        })
      );
    } else {
      // Register
      dispatch(registerUser(form));
      // Reset inputs
      e.target.reset();
      setFile(null);
    }
  };

  return (
    <section className='register' id='register'>
      <p className='register-header'>
        Don't have an account? <a href='#register'>Register</a> new account
      </p>
      <Title text='Register new account' />
      <div className='login-content shadow-md'>
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
          <div>
            <label>
              <input type='text' placeholder='first name' />
            </label>
          </div>
          <div>
            <label>
              <input type='text' placeholder='middle name' />
            </label>
          </div>
          <div>
            <label>
              <input type='text' placeholder='last name' />
            </label>
          </div>
          <div>
            <label>
              <input type='email' placeholder='email' />
            </label>
          </div>
          <div>
            <label>
              <input type='password' placeholder='password' />
            </label>
          </div>
          <div>
            <label>
              <input type='password' placeholder='confirm password' />
            </label>
          </div>
          <div>
            <label>
              <p style={{ fontSize: '1.2rem' }}>Image</p>
              <input
                type='file'
                accept='image/*'
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type='submit'
                value={isLoading ? 'Loading...' : 'Submit'}
                className='btn btn-primary'
              />
            </label>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
