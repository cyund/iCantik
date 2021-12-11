import { Link, uselocation } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Businis from '../img/Business.jpg';
import Uiux from '../img/uiux.jpg';
import lt2 from '../img/lt2.jpg';
import lt3 from '../img/lt3.jpg';
import '../page/style.css';

const project = () => {
    return (
    <body>
    <Navbar/>
    <div class="container titleArtikel">
      <h1>Project Terbaru</h1>
    </div>
 
    <div class="container artikel">
      <Link to="/" class="text-decoration-none">
        <div class="perArtikel">
          <div>
            <img class="img-project" src={Uiux} alt="Artikel" />
          </div>
          <div class="textArtikel">
            <h3>UI/UX Design</h3>
            <p>
              Desain MokcUp "Dana Up" yaitu tabungan bagi Karyawan PT.Persero.
            </p>
          </div>
        </div>
      </Link> 
    </div>
    <div class="container artikel">
      <Link to="/" class="text-decoration-none">
        <div class="perArtikel">
          <div>
            <img class="img-project" src={Uiux} alt="Artikel" />
          </div>
        
          <div class="textArtikel">
            <h3>Mobile Apps</h3>
            <p>
              Aplikasi bidang minat ekstrakulikuler bagi sekolah SMK N 2 Balikpapan.
            </p>
          </div>
        </div>
      </Link> 
    </div>
    <div class="container artikel">
      <Link to="/" class="text-decoration-none">
        <div class="perArtikel">
          <div>
            <img class="img-project" src={Uiux} alt="Artikel" />
          </div>
        
          <div class="textArtikel">
            <h3>Web Design</h3>
            <p>
              Pembuatan Website sekolah SMK N 2 Balikpapan.
            </p>
          </div>
        </div>
      </Link> 
    </div>

  <Footer/>
  </body>

  );
};
    export default project;