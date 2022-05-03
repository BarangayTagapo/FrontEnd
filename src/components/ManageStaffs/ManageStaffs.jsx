import React, { useEffect } from 'react';
import './manageStaffs.css';
import Title from '../Title/Title';
import Staff from '../Staff/Staff';
import Requests from '../Requests/Requests';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRequests, fetchAllStaffs } from '../../store/userActions';

const ManageStaffs = () => {
  const { staffs, requests, userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Fetch staffs and requests
  useEffect(() => {
    dispatch(fetchAllStaffs());
    dispatch(fetchAllRequests());
  }, [dispatch, userInfo]);

  if (userInfo.email !== 'SystemAdmin@mail.com')
    return <h1>You do not have access to this page</h1>;

  return (
    <div className='manageStaff'>
      <Title text='Staff Dashboard' />

      {/* Current staffs */}
      <table>
        <thead>
          <tr className='mangeStaff-heading'>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody className='manageStaff-body'>
          {staffs?.map((user, index) => {
            return <Staff user={user} key={index} />;
          })}
        </tbody>
      </table>
      {/* Request */}
      <br />
      <Title text='Access Requests' />
      {requests.length ? (
        <table>
          <thead>
            <tr className='mangeStaff-heading'>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody className='manageStaff-body'>
            {requests?.map((user, index) => {
              return <Requests key={index} user={user} />;
            })}
          </tbody>
        </table>
      ) : (
        <h3 className='manageStaff-h3'>No more access request</h3>
      )}
    </div>
  );
};

export default ManageStaffs;
