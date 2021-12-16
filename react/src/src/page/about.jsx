/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar2 from '../components/Navbar2';
import About from '../components/About';
import Footer from '../components/Footer';
import '../page/style.css';

const about = () => {
  return (
    <body>
      <Navbar2 />

      <About />

      <Footer />
    </body>
  );
};

export default about;
