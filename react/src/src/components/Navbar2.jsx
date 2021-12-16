/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { Link, uselocation } from "react-router-dom";
import React, {useEffect, useState, useRef} from 'react';
import '../page/style.css';

const Navbar2 = () => {

    useEffect(()=> {      
        const navbarHome = document.querySelector(".navbarHome");                
        window.addEventListener("scroll", () => {
        const post = window.scrollY > 100;
      
        navbarHome.classList.toggle("scroll", post);      
       });
    }, []);     
    return (
        <React.Fragment>
        <nav className="navbar2 navbar-expand-lg navbar-light  navbarHome fixed-top">
            <div className="container ">
                
                <button className="navbar-toggler hamburger" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse py-2" id="navbarSupportedContent">
                    
                    <Link className="navbar-brand2" to="/">
                        <h1>iCantik</h1>
                    </Link>

                    <ul className="navbar-nav mr-auto ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>

                        <li className="nav-item active">
                            <Link className="nav-link" to="/project">Project</Link>
                        </li>

                        <li className="nav-item active">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>

                        <li className="nav-item active">
                            <Link className="nav-link" to="/Footer">Contact</Link>
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
        </React.Fragment>
    );
};

export default Navbar2;