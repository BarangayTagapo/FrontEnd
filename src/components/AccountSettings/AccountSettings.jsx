import React, { useRef, useState } from 'react';
import './accountSettings.css';
import Title from '../Title/Title';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../store/userActions';
import { userActions } from '../../store/userSlice';

const AccountSettings = () => {
  const {
    fName,
    mName,
    lName,
    email,
    _id: id,
  } = useSelector((state) => state.user.userInfo);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    // Account infos to be edit
    const info = {
      fName,
      mName,
      lName,
    };
    // Exclude admin's email to be sent
    if (email !== 'SystemAdmin@mail.com') info.email = email;
    // Add password if inputted
    if (password.current.value) info.password = password.current.value;
    // Add image if inputted
    if (file) form.append('image', file);

    form.append('info', JSON.stringify(info));
    // retyped password to be verify
    form.append('confirmPassword', confirmPassword.current.value);

    // Clear passwords input
    confirmPassword.current.value = '';
    password.current.value = '';
    // Send form
    dispatch(updateUser({ form, id, setIsEditing }));
  };

  return (
    <section className='accSetting'>
      <Title text='Edit your account' />
      <div className='accSetting-content'>
        <form
          className='form-inputs'
          onSubmit={handleSubmit}
          encType='multipart/form-data'
        >
          <div>
            <label>
              First name
              <input
                type='text'
                value={!fName ? '' : fName}
                onChange={(e) => dispatch(userActions.setfName(e.target.value))}
                disabled={!isEditing}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Middle name
              <input
                type='text'
                value={!mName ? '' : mName}
                onChange={(e) => dispatch(userActions.setmName(e.target.value))}
                disabled={!isEditing}
              />
            </label>
          </div>
          <div>
            <label>
              Last name:
              <input
                type='text'
                value={!lName ? '' : lName}
                onChange={(e) => dispatch(userActions.setlName(e.target.value))}
                disabled={!isEditing}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Image
              <input
                type='file'
                accept='image/*'
                disabled={!isEditing}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>
          {/* email */}
          <div>
            <label>
              Email
              <input
                type='email'
                value={!email ? '' : email}
                onChange={(e) => dispatch(userActions.setEmail(e.target.value))}
                disabled={!isEditing || email === 'SystemAdmin@mail.com'}
                required
              />
            </label>
          </div>
          <div>
            <label>
              {!isEditing ? 'Password' : 'New Password'}
              <input
                type='password'
                placeholder='only fill this when you want to change password'
                disabled={!isEditing}
                ref={password}
              />
            </label>
          </div>
          <div>
            <label>
              You have to confirm your password to apply changes
              <input
                type='password'
                disabled={!isEditing}
                ref={confirmPassword}
                required
              />
            </label>
          </div>
          <div style={isEditing ? { display: 'block' } : { display: 'none' }}>
            <label>
              <input
                type='submit'
                value={isLoading ? 'Loading...' : 'Submit Changes'}
                className='btn btn-green'
              />
            </label>
          </div>
        </form>
        <div className='accSetting-content--btn'>
          <button
            className='btn btn-primary'
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AccountSettings;
