import React from 'react';
import './request.css';
import noImg from '../../images/no-img.png';
import { useDispatch } from 'react-redux';
import { deleteUser, grantAccess } from '../../store/userActions';
import { url } from '../../store/userActions';

const Requests = ({ user }) => {
  const { lName, fName, mName, email, image, _id: id } = user;
  const fullName = `${lName}, ${fName} ${mName}`;
  const imageUrl = `${url}/images/${image}`;
  const dispatch = useDispatch();

  return (
    <tr className='staff staff-request'>
      <td>
        <img src={!image ? noImg : imageUrl} alt='staff' />
      </td>
      <td>{fullName}</td>
      <td>{email}</td>
      <td>
        <button
          className='btn btn-green'
          onClick={() => {
            // Send accept access
            dispatch(grantAccess(id, true));
          }}
        >
          Accept
        </button>
        <button
          className='btn btn-red'
          onClick={() => dispatch(deleteUser(id))}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Requests;
