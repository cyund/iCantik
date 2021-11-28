import { Link, uselocation } from "react-router-dom";
import React from "react";
import Why1 from '../img/together.jpg';
import Why2 from '../img/direction.jpg';
import Why3 from '../img/sound.jpg';
import Slide from '../img/banner-shd.png';
import About from '../img/us.jpg';
import Benny from '../img/02.jpg';
import Alan from '../img/06.png';
import Achsanie from '../img/15.jpeg';
import Indra from '../img/30.jpeg';
import Maritza from '../img/42.jpg';
import Putri from '../img/60.jpg';
import Uiux from '../img/uiux.jpg';
import '../page/style.css';

const index = () => {
    return (
    <body>
        <nav className="navbar navbar-expand-lg navbar-light  navbarHome fixed-top">
        <div className="container">

            <Link className="navbar-brand" to="/#">
                <h1>iCantik</h1>
            </Link>

            <button className="navbar-toggler hamburger" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/index">Home</Link>
                    </li>

                    <li className="nav-item active">
                        <Link className="nav-link" to="/project">Project</Link>
                    </li>

                    <li className="nav-item active">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>

                    <li className="nav-item active">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control sm-2" type="search" placeholder="Cari" aria-label="Search"/>
                    <button className="btn btn-primary sm-0" type="submit">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>
        </div>
    </nav>
<ul id="autoWidth" className="cs-hidden">
    <li className="item-a">
        <section className="slideshow">
            <img className="satu" src={Slide} alt="Team Work"/>
            <div className="shadow"></div>
            <div className="container">
                <div className="mainText">
                    <div className="garis"></div>
                    <h3>Our Values</h3>
                    <h1>TEAMWORK</h1>
                </div>

                <h3>Teamwork In Our Endeavours</h3>
            </div>
        </section>
    </li>

    <li className="item-a">
        <section className="slideshow">
            <img className="dua" src={Slide} alt="Team Work"/>
            <div className="shadow"></div>
            <div className="container">
                <div className="mainText">
                    <div className="garis"></div>
                    <h3>Our Values</h3>
                    <h1>Project</h1>
                </div>

                <h3>website and mobile application</h3>
            </div>
        </section>
    </li>

    <li className="item-a">
        <section className="slideshow">
            <img className="tiga" src={Slide} alt="Team Work"/>
            <div className="shadow"></div>
            <div className="container">
                <div className="mainText">
                    <div className="garis"></div>
                    <h3>Our Values</h3>
                    <h1>Programming Langguage</h1>
                </div>

                <h3>memahami semua bahasa pemrogramman</h3>
            </div>
        </section>
    </li>

    <li className="item-a">
        <section className="slideshow">
            <img className="empat" src={Slide} alt="Team Work"/>
            <div className="shadow"></div>
            <div className="container">
                <div className="mainText">
                    <div className="garis"></div>
                    <h3>Our Values</h3>
                    <h1>Design UI/UX</h1>
                </div>

                <h3>mendesaign UI/UX</h3>
            </div>
        </section>
    </li>
</ul>
    <div className="sambutan">
        <h1 id="tittle">WELCOME TO iCantik</h1>
        <p>
            Icantik merupakan sebuah team yang dapat membantu anda dalam berbagai hal seperti membuat website, membuat aplikasi, dan lainnya
        </p>
    </div>


    <div className="abouut">
        <div className="container">
            <img src={About} alt="iCantik Team"/>

            <div className="visiMisi">

                <div className="visi">
                    <h5>Our Vision</h5>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                </div>

                <div className="misi">
                    <h5>Our Mission</h5>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet cum id reiciendis laudantium esse
                        fuga quo ullam possimus illum eum, quibusdam officiis perspiciatis aperiam sed sapiente incidunt
                        sit veritatis fugiat quisquam eius odit. Iste sunt eius quos, earum harum cumque, quia quo,
                        ipsam iusto enim inventore cupiditate nesciunt quisquam dolore!
                    </p>
                </div>

            </div>

        </div>
    </div>


    <div className="why">
        <div className="container">
            <h2>Why work with us</h2>

            <div className="boxwhy">

                <div className="perBox">
                    <img src={Why1} alt="together"/>
                    <h3>We're All in this together</h3>
                </div>

                <div className="perBox">
                    <img src={Why2} alt="direction"/>
                    <h3>We shape our Direction</h3>
                </div>

                <div className="perBox">
                    <img src={Why3} alt="sound"/>
                    <h3>We're Really Sound!</h3>
                </div>
            </div>
        </div>
    </div>

   <div className="about" id="about">
    <div className="container">
        <h2>Meet our members</h2>

        <div className="boxabout">

            <div className="perBox">
                <Link to="/https://www.instagram.com/achsanit/" target="_blank">
                    <img src={Benny} alt="benny_benn0t" className="album-img"/>
                    <div className="album-overlay">
                      <div className="album-title">Achsanie Taqwim</div>
                </div>
            </Link>                
            </div>

            <div className="perBox">
                <Link to="/https://www.instagram.com/alan.kartika/" target="_blank">
                    <img src={Alan} alt="benny_benn0t" className="album-img"/>
                    <div className="album-overlay">
                      <div className="album-title">Alan Kartika Chandra</div>
                </div>
            </Link>
            </div>

            <div className="perBox">
                <Link to="/https://www.instagram.com/benny_benn0t/" target="_blank">
                    <img src={Achsanie} alt="benny_benn0t" className="album-img"/>
                    <div className="album-overlay">
                      <div className="album-title">Benny Seto</div>
                </div>
            </Link>
            </div>
            
            <div className="perBox">
                <Link to="/https://www.instagram.com/indra_lkmnn/" target="_blank">
                    <img src={Indra} alt="benny_benn0t" className="album-img"/>
                    <div className="album-overlay">
                      <div className="album-title">Indra Cyundink</div>
                </div>
            </Link>
            </div>

            <div className="perBox">
                <Link to="/https://www.instagram.com/mrtzmardhatillah/" target="_blank">
                    <img src={Maritza} alt="benny_benn0t" className="album-img h-auto"/>
                    <div className="album-overlay">
                      <div className="album-title">Maritza Mardhatillah</div>
                </div>
            </Link>
            </div>

            <div className="perBox">
                <Link to="/https://www.instagram.com/saptiaputri/" target="_blank">
                    <img src={Putri} alt="benny_benn0t" className="album-img"/>
                    <div className="album-overlay">
                      <div className="album-title">Putri Saptia</div>
                </div>
                </Link>
            </div>
                

        </div>
    </div>
</div>


    <div className="containerProjectHome container">
        <Link to="/project.html"><h2>Latest Project</h2></Link>

        <div className="ProjectHome">


            <Link className="perProjectHome">
                <img src={Uiux} alt="Foto Artikel"/>
                <h3>UI/UX Design</h3>
                <small>Project Manager : <span>Maritza Mardhatillah</span></small>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti quo, iure repellendus explicabo
                    delectus quasi amet libero iusto sequi at.
                </p>
            </Link>
            
            <Link className="perProjectHome">
                <img src={Uiux} alt="Foto Artikel"/>
                <h3>Perancangan Perangkat Lunak</h3>
                <small>Project Manager : <span>Maritza Mardhatillah</span></small>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti quo, iure repellendus explicabo
                    delectus quasi amet libero iusto sequi at.
                </p>
            </Link>
            <Link className="perProjectHome">
                <img src={Uiux} alt="Foto Artikel"/>
                <h3>Web Design</h3>
                <small>Project Manager : <span>Maritza Mardhatillah</span></small>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti quo, iure repellendus explicabo
                    delectus quasi amet libero iusto sequi at.
                </p>
            </Link>


        </div>
    </div>


    <div className="iconBox">
        <Link to="/" className="perIconBox wa">
            <i className="fab fa-whatsapp"></i>
        </Link>

        <Link to="/" className="perIconBox fb">
            <i className="fab fa-facebook-f"></i>
        </Link>

        <Link to="/" className="perIconBox ig">
            <i className="fab fa-instagram"></i>
        </Link>

        <Link to="/" className="perIconBox yt">
            <i className="fab fa-youtube"></i>
        </Link>

        <Link to="/" className="perIconBox linkin">
            <i className="fab fa-linkedin-in"></i>
        </Link>
    </div>

    <div className="footer">

        <div className="container">
            <div className="row">
                <div className="col-md-4" id="contact">
                    <h4 className="my-4 text-white text-center">Contact Us</h4>

                    <div className="footerContactUs">

                        <div className="perFooterContactUs">
                            <i className="fas text-white fa-envelope"></i>
                            <p className="text-white">official@Icantik.co.id</p>
                        </div>

                        <div className="perFooterContactUs">
                            <i className="fas text-white fa-phone-alt"></i>
                            <p className="text-white">023423434234</p>
                        </div>

                        <div className="perFooterContactUs">
                            <i className="fas text-white fa-road"></i>
                            <p className="text-white">Jl. Mulawarman, Kec. Balikpapan Timur - Kota Balikpapan</p>
                        </div>

                    </div>

                </div>


                <div className="col-md-4 text-center">
                    <h4 className="my-4 text-white">Newsletter</h4>
                    <form>
                        <div className="form-group">
                            <input className="form-control" type="search" placeholder="Example@gmail.com"
                                aria-label="Search"/>
                            <button className="btn btn-primary btn-newsletter" type="submit">Kirim</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div className="footerCopyright">
        <p className="text-white">
            <i className="far fa-copyright"></i>2021 By : <span>Kelompok 2 Desain Web</span>.&nbsp; Inspired by <Link
                to="/https://smkn2balikpapan.sch.id/website/">SMKN 2               Balikpapan</Link>
        </p>
    </div>
    <script src="/script.js"></script>
</body>
    );
};
export default index;