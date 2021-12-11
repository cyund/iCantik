import { Link, uselocation } from "react-router-dom";
import React from "react";

import Home from "../components/Home";
import About from "../components/About";
import Iconbox from "../components/Iconbox";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Uiux from '../img/uiux.jpg';
import lt2 from '../img/lt2.jpg';
import lt3 from '../img/lt3.jpg';
import Slide1 from '../img/Business.jpg';
import Slide2 from '../img/code.jpg';
import Slide3 from '../img/bahasa.jpg';
import Navbar from "../components/Navbar";
import '../page/style.css';
import Copyright1 from "../components/Ccopyright";


const slide = [
    {
      content: (
            <img
              style={{ height: "100%", objectFit: "cover",backgroundPosition:"center" }}
              className="d-block w-100 "
              src={Slide1}
              alt="teamwork"
            />
      ),
      title: "Our Values",
      judul: "TEAMWORK"
    },
    {
        content: (
            <img
              style={{ height: "100%", objectFit: "cover",backgroundPosition:"center" }}
              className="d-block w-100 "
              src={Slide2}
              alt="Project"
            />
        ),
        title: "Our Values",
        judul: "PROJECT"
    },
    {
      content: (
          <img
            style={{ height: "100%", objectFit: "cover",backgroundPosition:"center" }}
            className="d-block w-100 "
            src={Slide3}
            alt="Langguage"
          />
      ),
      title: "Our Values",
      judul: "Programming Langguage"
    },
  ];

const index = () => {
    return (
    <body>
        <Navbar/>
        <div>
            <Carousel carouselData={slide} />
        </div>
        <Home/>
        <About/>
        <div className="containerProjectHome container">
            <Link to="/project"><h2>Latest Project</h2></Link>

            <div className="ProjectHome">


                <Link className="perProjectHome">
                    <img src={Uiux} alt="Foto Artikel"/>
                    <h3>Mobile Apps</h3>
                    <small>Project Manager : <span>Maritza Mardhatillah</span></small>
                    <p>
                        Membuat dan membangun aplikasi berbasis perangkat smartphone Android.
                    </p>
                </Link>
            
                <Link className="perProjectHome">
                    <img src={lt2} alt="Foto Artikel"/>
                    <h3>UI/UX Design</h3>
                    <small>Project Manager : <span>Indra Lukman Hakim</span></small>
                    <p>
                        Mendesain sebuah produk menjadi usable bagi penggunanya.
                    </p>
                </Link>
                <Link className="perProjectHome">
                    <img src={lt3} alt="Foto Artikel"/>
                    <h3>Web Design</h3>
                    <small>Project Manager : <span>Saptia Putri</span></small>
                    <p>
                        Membangun website menggunakan bahasa pemograman PHP.
                    </p>
                </Link>


            </div>
        </div>
        <Iconbox/>
        <Footer/> 
        <Copyright1/>
    </body>
    );
};

export default index;