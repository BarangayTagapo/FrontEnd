import React from 'react';
import './about.css';
import chairman from '../../images/chairman.png';
import Title from '../Title/Title';
import Seal from '../../images/seal.png';

const About = () => {
  return (
    <main className='about container py-4' id='main-content'>
      <div className='about-content'>
        <header className='py-1'>
          <img src={Seal} alt='logo' />
          <p className='lead'>
            Baclaran of cabuyclaslfnlasfn;a is a barangay in the city of Santa Rosa, in the province of
            Laguna. Its population as determined by the 2020 Census was 42,104.
            This represented 10.15% of the total population of Santa Rosa.
          </p>
        </header>

        <article className='about-content-officers py-3'>
          <Title text='Chairman and Officers' />
          <div className='about-content-officers--content py-3'>
            <aside>
              <h5>Barangay Officers</h5>
              <ul>
                <li>Officer A. Kagawad</li>
                <li>OfficerB C. Kagawad</li>
                <li>Kagawad D. Officer</li>
                <li>Officer A. Kagawad</li>
                <li>Officer A. Kagawad</li>
                <li>Officer A. Kagawad</li>
              </ul>
            </aside>
            <div>
              <img src={chairman} alt='brgy chairman' />
              <h4>Hon. Barangay Chairman</h4>
            </div>
          </div>
        </article>

        {/* MV - Mission Vission */}
        <div className='about-content-MV py-3'>
          <h2>Mission</h2>
          <p>
            We shall pursue a comprehensive program that will enhance the
            socio-cultural life of San Pedronians, promote the growth of the
            local and regional economy, ensure ecological balance, and
            institutionalize effective governance.
          </p>
        </div>
        <div className='about-content-MV py-3'>
          <h2>Vission</h2>
          <p>
            A highly urbanized and self-reliant community of inspired and
            empowered citizenry, living in a healthy environment, and
            effectively governed by honest and dedicated public servants.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
