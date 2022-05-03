import React from 'react';
import './staff.css';
import noImg from '../../images/no-img.png';
import { useDispatch } from 'react-redux';
import { grantAccess } from '../../store/userActions';
import { url } from '../../store/userActions';

const Staff = ({ user }) => {
  const { lName, fName, mName, email, _id, image } = user;
  const fullName = `${lName}, ${fName} ${mName}`;
  const imageUrl = `${url}/images/${image}`;
  const dispatch = useDispatch();
  return (
    <tr className='staff'>
      <td>
        <img src={!image ? noImg : imageUrl} alt='staff' />
      </td>
      <td>{fullName}</td>
      <td>{email}</td>
      <td>
        <button
          className={
            email === 'SystemAdmin@mail.com' ? 'btn btn-disabled' : 'btn'
          }
          disabled={email === 'SystemAdmin@mail.com'}
          onClick={() => dispatch(grantAccess(_id, false))}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default Staff;
