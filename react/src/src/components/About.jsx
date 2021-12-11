import { Link, uselocation } from "react-router-dom";
import React from "react";
import Benny from '../img/02.jpg';
import Alan from '../img/06.png';
import Achsanie from '../img/15.jpeg';
import Indra from '../img/30.jpeg';
import Maritza from '../img/42.jpg';
import Putri from '../img/60.jpg';
import '../page/style.css';

const About = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};

export default About;