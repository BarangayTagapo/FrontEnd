import React from 'react';
import './home.css';
import bgImage from '../../images/po.jpg';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import About from '../../components/About/About';

const Home = () => {
  return (
    <>
      {/* Header */}
      <header className='home'>
        {/* background image */}
        <img src={bgImage} alt='po.jpg' />
        <div className='home-content container'>
          <span className='home-quote-left'>
            <ImQuotesLeft />
          </span>
          <h1>The Lion City of the South</h1>
          <span className='home-quote-right'>
            <ImQuotesRight />
          </span>
        </div>
      </header>
      {/* About section */}
      <About />
    </>
  );
};

export default Home;
