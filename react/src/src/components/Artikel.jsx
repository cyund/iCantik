/* eslint-disable no-unused-vars */
import React from "react";
import Uiux from '../img/uiux.jpg';
import Lt2 from '../img/lt2.jpg';
import Lt3 from '../img/lt3.jpg';
import '../page/style.css';

function Artikel(props){
    return(
        <div class="container artikel">
            <div class="perArtikel">
                <div>
                    <img class="img-project" src={props.content.img} alt="Artikel" />
                </div>
                <div class="textArtikel">
                    <h3>{props.content.title}</h3>
                    <p>
                        {props.content.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Artikel;