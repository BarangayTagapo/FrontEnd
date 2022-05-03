import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Title from '../../components/Title/Title';
import { createApplication } from '../../store/applicationActions';

const Applications = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const sendEmail = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('image', file);
    form.append('category', e.target[0].value);
    form.append('name', e.target[1].value);
    form.append('contact', e.target[2].value);
    form.append('address', e.target[3].value);
    form.append('purpose', e.target[4].value);
    e.target.reset();
    dispatch(createApplication(form));
  };

  return (
    <section className='applications py-4 minHeight100'>
      <Title text='Online Applications' />
      <form
        className='applications-content form-inputs'
        onSubmit={sendEmail}
        encType='multipart/form-data'
      >
        {/* Form Category */}
        <div>
          <label>
            Select Form Application
            <select name='category' required>
              <option value='clearance'>Barangay Clearance</option>
              <option value='id'>Barangay Id</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Full name
            <input type='text' name='name' required />
          </label>
        </div>
        <div>
          <label>
            Contact
            <input type='text' name='contact' required />
          </label>
        </div>

        <div>
          <label>
            Address
            <input type='text' name='address' required />
          </label>
        </div>
        <div>
          <label>
            Purpose
            <textarea name='purpose' required></textarea>
          </label>
        </div>
        <div>
          <label>
            Upload Valid Id
            <input
              type='file'
              name='validId'
              accept='image/*'
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </label>
        </div>
        <div>
          <input type='submit' value='Submit' className='btn btn-primary' />
        </div>
      </form>
    </section>
  );
};

export default Applications;
