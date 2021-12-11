import { Link, uselocation } from "react-router-dom";
import React from "react";
import foto from '../img/us.jpg';
import Why1 from '../img/together.jpg';
import Why2 from '../img/direction.jpg';
import Why3 from '../img/sound.jpg';
import '../page/style.css';

const Sambutan = () => {
    return (
        <React.Fragment>
        <div className="sambutan">
        <h1 id="tittle">WELCOME TO iCantik</h1>
        <p>
            Icantik merupakan sebuah team yang dapat membantu anda dalam berbagai hal seperti membuat website, membuat aplikasi, dan lainnya
        </p>
    </div>


    <div className="abouut">
        <div className="container">
            <img src={foto} alt="iCantik Team"/>

            <div className="visiMisi">

                <div className="visi">
                    <h5>Our Vision</h5>
                    <h6>Membangun website dengan desain yang berkualitas dan akan memuaskan klien </h6>
                </div>

                <div className="misi">
                    <h5>Our Mission</h5>
                    <ul>
                    <li>Memperkenalkan perusahaan melalui berbagai media untuk meningkatkan brand awareness.</li>
                    <li>Memberikan pelayanan terbaik kepada pelanggan dan juga kepada stake holder.</li>
                    <li>Menjalin kerjasama dengan pihak luar dengan tujuan untuk meningkatkan standar kualitas desain.</li>
                    </ul>
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
        </React.Fragment>
    );
};

export default Sambutan;

