/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import Artikel from '../components/Artikel';
import Uiux from '../img/uiux.jpg';
import '../page/style.css';

const project = () => {
  return (
    <body>
      <Navbar2 />
      <div class='container titleArtikel'>
        <h1>Project Terbaru</h1>
      </div>
      <Artikel
        content={{
          img: Uiux,
          title: 'UI/UX Design',
          description: 'Desain MokcUp "Dana Up" yaitu tabungan bagi Karyawan PT.Persero.',
        }}
      />
      <Artikel
        content={{
          img: Uiux,
          title: 'Mobile Apps',
          description: 'Aplikasi bidang minat ekstrakulikuler bagi sekolah SMK N2 Balikpapan',
        }}
      />
      <Artikel
        content={{
          img: Uiux,
          title: 'Web Design',
          description: 'Pembuatan Website sekolah SMK N 2 Balikpapan',
        }}
      />
      <Footer />
    </body>
  );
};
export default project;