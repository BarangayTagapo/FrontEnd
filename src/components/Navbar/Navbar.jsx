import React from 'react';
import './navbar.css';

const Navbar = ({ user }) => {
  // Logout account
  const handleLogout = () => {
    // Remove token from local storage
    localStorage.setItem('BrgyTagapoToken', '');
    window.open('/login', '_self');
  };

  return (
    <nav className='main-nav shadow-md'>
      <div className='main-nav-content'>
        <h2>Barangay Tagapo</h2>
        <ul>
          <li>
            <a className='text-hover-primary' href='/'>
              Home
            </a>
          </li>
          <li>
            <a className='text-hover-primary' href='/online-applications'>
              Online Applications
            </a>
          </li>
          <li>
            <a className='text-hover-primary' href='/announcements'>
              Announcements/Schedules
            </a>
          </li>
          <li>
            <a className='text-hover-primary' href='/contact'>
              Contact/Report
            </a>
          </li>
          <li>
            {/* Only display when an account is present */}
            <button
              onClick={handleLogout}
              style={user ? { display: 'block' } : { display: 'none' }}
              className='btn btn-primary'
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
