import React from 'react';
import './about.css';
import chairman from '../../images/arturo.jpg';
import Title from '../Title/Title';
import Seal from '../../images/seal.png';

const About = () => {
  return (
    <main className='about container py-4' id='main-content'>
      <div className='about-content'>
        <header className='py-1'>
          <img src={Seal} alt='logo' />
          <p className='lead'>
            Tagapo is a barangay in the city of Santa Rosa, in the province of
            Laguna. Its population as determined was 38,246 as of October 2022.
            
          </p>
        </header>

        <article className='about-content-officers py-3'>
          <Title text='Chairman and Officers' />
          <div className='about-content-officers--content py-3'>
            <aside>
              <h5>Barangay Officers</h5>
              <ul>
                <li>KGG. LEONARDO M. LIANZA</li>
                <li>KGG. ROLANDO A. BATO</li>
                <li>KGG. PEPITO DC TATLONGHARI</li>
                <li>KGG. ADJAR M. LUMAGUE</li>
                <li>KGG. MANUEL G. ALON</li>
                <li>KGG. EDISON P. CARAVANA</li>
                <li>KGG. ROAN KHATE P. BARRINUEVO</li>
                <li>INGAT-YAMAN. JEORGE V. BUBAN JR</li>
                <li>KALIHIM. MYLENE B. CARDENAL</li>
                <li>SK CHAIRMAN KGG. DUNCAN S. AMARANTE</li>
              </ul>
            </aside>
            <div>
              <img src={chairman} alt='brgy chairman' />
              <h4>Barangay Chairman. 
                ARTURO S. CATINDIG</h4>
            </div>
          </div>
        </article>

        {/* MV - Mission Vision */}
        <div className='about-content-MV py-3'>
          <h2>Mission</h2>
          <p>
          “Maisakatuparan ang lahat ng serbisyo na ibinigay ng barangay para sa mga 
          mamamayan at sa komunidad na nasasakupan, ng buong husay at katapatan.”
          </p>
        </div>
        <div className='about-content-MV py-3'>
          <h2>Vision</h2>
          <p>
          “Isang barangay na maunlad at may kakayahang tumindig sa sarili na may mga 
          mamamayang nagkakaisa, sumusunod sa alituntunin sa pangunguna ng 
          isang mahusay na pangangasiwa tungo sa pag-unlad.”
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
