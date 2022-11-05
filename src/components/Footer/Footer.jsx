import React from 'react';
import './footer.css';
import govLinks from '../../json/GovLinks.json';
import govPH from '../../json/AboutGovPH.json';

const Footer = () => {
  return (
    <footer id='main-footer'>
      {/* Links */}
      <div className='main-footer--links container py-2'>
        <div>
          <h6>Republic of the Philippines</h6>
          <p>Republika ng Pilipinas</p>
        </div>
        {/* About govph */}
        <div>
          <h6>About GOVPH</h6>
          <ul>
            {govPH.map((site, index) => {
              return (
                <li key={index}>
                  <a href={site.link} className='text-hover-black'>
                    {site.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Government links */}
        <div>
          <h6>Government links</h6>
          <ul>
            {govLinks.map((site, index) => {
              return (
                <li key={index}>
                  <a href={site.link} className='text-hover-black'>
                    {site.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className='main-footer--copyright'>
        <h6>
          Copyright &copy; {new Date().getFullYear()}{' '}
          <a href='https://santarosacity.gov.ph/live-in-santa-rosa/city-government-departments/'>
            santarosacity.gov.ph
          </a>{' '}
          | Developed by:{' '}
          <a
            href='https://barangay-tagapo.netlify.app/'
            className='text-hover-white'
          >
            Emmanuel John Castillo, Marc Emmanuel Lalap, Jan Angelo Ugalino
          </a>
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
