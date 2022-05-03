import React from 'react';
import './dashboard.css';
import { Routes, Route, Link } from 'react-router-dom';
import AccountSettings from '../../components/AccountSettings/AccountSettings';
import ManageStaffs from '../../components/ManageStaffs/ManageStaffs';
import PostAnnouncements from '../../components/PostAnnouncements/PostAnnouncements';
import Applications from '../../components/Applications/Applications.jsx';

const Dashboard = () => {
  // User token
  const token = localStorage.getItem('BrgyTagapoToken');

  return (
    <section className='dashboard py-4 minHeight100'>
      <div className='dashboard-content container'>
        {/* Side bar */}
        <ul className='dashboard-content--ul'>
          <li>
            <Link to='/admin-dashboard/account-settings'>Account settings</Link>
          </li>
          <li>
            <Link to='/admin-dashboard/manage-staffs'>Manage Staffs</Link>
          </li>
          <li>
            <Link to='/admin-dashboard/post-announcements'>
              Post Announcements
            </Link>
          </li>
          <li>
            <Link to='/admin-dashboard/applications'>Online Applications</Link>
          </li>
        </ul>
        {/* Content */}
        <div className='dashboard-content--container shadow-md'>
          <div className='dashboard-content--container--current'>
            {token ? (
              <Routes>
                <Route path='/account-settings' element={<AccountSettings />} />
                <Route path='/manage-staffs' element={<ManageStaffs />} />
                <Route
                  path='/post-announcements'
                  element={<PostAnnouncements />}
                />
                <Route
                  path='/post-announcements/edit-post/:postId'
                  element={<PostAnnouncements />}
                />
                <Route path='/applications' element={<Applications />} />
              </Routes>
            ) : (
              <>
                <h3>You must login first to access this page</h3>
                <Link to='/login'>Login</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
