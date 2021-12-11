import { Link, uselocation } from "react-router-dom";
import React from "react";
import '../page/style.css';

const Iconbox = () => {
    return (
        <React.Fragment>
        <div className="iconBox">
            <Link to="/" className="perIconBox wa">
                <i className="fab fa-github"></i>
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
        </React.Fragment>
    );
};

export default Iconbox;