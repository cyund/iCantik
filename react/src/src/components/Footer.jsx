import { Link, uselocation } from "react-router-dom";
import React from "react";
import '../page/style.css';

const Footer = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};

export default Footer;