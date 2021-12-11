import { Link, uselocation } from "react-router-dom";
import React from "react";
import '../page/style.css';

const Copyright1 = () => {
    return (
        <React.Fragment>
        <div className="footerCopyright">
            <p className="text-white">
                <i className="far fa-copyright"></i>2021 By : <span>Kelompok 2 Desain Web</span>.&nbsp; Inspired by <Link
                    to="/https://smkn2balikpapan.sch.id/website/">SMKN 2               Balikpapan</Link>
            </p>
        </div>
        </React.Fragment>
    );
};

export default Copyright1;