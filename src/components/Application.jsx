import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteApplication,
  fetchAllApplications,
  updateApplication,
} from '../store/applicationActions';
import { url } from '../store/userActions';

const Application = ({ applicant }) => {
  const { _id, image, name, address, purpose, contact, isDone, category } =
    applicant;
  const imageUrl = `${url}/images/${image}`;
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const [newIsDone, setIsDone] = useState(isDone);

  const handleDelete = () => {
    dispatch(deleteApplication(_id));
    dispatch(fetchAllApplications());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateApplication(_id, e.target[0].value));
  };

  return (
    <article>
      <button className='btn dashApp-btn' onClick={handleDelete}>
        Delete
      </button>
      <a href={imageUrl}>
        <img src={imageUrl} alt='valid id' />
      </a>
      <ul>
        <li>
          <b>Category:</b>
          <p style={{ textTransform: 'capitalize' }}>
            {'Barangay ' + category}
          </p>
        </li>
        <li>
          <b>Name:</b>
          <p>{name}</p>
        </li>
        <li>
          <b>Address:</b>
          <p>{address}</p>
        </li>
        <li>
          <b>Purpose:</b>
          <p>{purpose}</p>
        </li>
        <li>
          <b>Contact:</b>
          <p>{contact}</p>
        </li>
        <li>
          <form onSubmit={handleSubmit}>
            Status:
            <label>
              <select
                value={newIsDone}
                onChange={(e) => {
                  setIsDone(e.target.value);
                  setIsEditing(true);
                }}
              >
                <option value='true'>Completed</option>
                <option value='false'>Pending</option>
              </select>
            </label>
            <label
              style={isEditing ? { display: 'block' } : { display: 'none' }}
            >
              <input
                type='submit'
                value='update'
                className='btn btn-primary'
                onClick={() => setIsEditing(false)}
              />
            </label>
          </form>
        </li>
      </ul>
    </article>
  );
};

export default Application;
