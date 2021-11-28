import { Link, uselocation } from "react-router-dom";
import React from "react";
import Businis from '../img/Business.jpg';
import '../page/style.css';

const project = () => {
    return (
    <body>
	    <nav>
		    <div class="wrapper">
			    <div class="logo"><Link to="/">iCantik</Link></div>
			    <div class="menu">
				    <Link to="/#" class="tombol-menu">
                        <span class="garis"></span>
                        <span class="garis"></span>
                        <span class="garis"></span>
                    </Link>
              <ul>
                  <li><Link to="/index.html">Home</Link></li>
                  <li><Link to="/p">Project</Link></li>
                  <li><Link to="/#about">About</Link></li>
                  <li><Link to="/#contact">Contact</Link></li>
                  <li>
                      <form method="post" action="#URL#">
                          <input class= 'search' type="search" name="search" />
                          <button class="tbl-search" type="submit"/>
                      </form>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
  
  <div class="container titleArtikel">
    <h1>Project Terbaru</h1>
  </div>
 
  <div class="container artikel">
    <Link to="/" class="text-decoration-none">
      <div class="perArtikel">
        <div>
            <img class="img-project" src={Businis} alt="Artikel" />
        </div>
        <div class="textArtikel">
          <h3>UI/UX Design</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi eaque officiis dignissimos temporibus reprehenderit distinctio. Ipsam laudantium explicabo sed ratione nisi officiis
            eveniet! Repellat architecto eos aut, ipsum laborum ratione?
          </p>
        </div>
      </div>
    </Link> 
  </div>
  <div class="container artikel">
    <Link to="/" class="text-decoration-none">
      <div class="perArtikel">
        <div>
            <img class="img-project" src="img/Business.jpg" alt="Artikel" />
        </div>
        
        <div class="textArtikel">
          <h3>Perancangan Perangkat Lunak</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi eaque officiis dignissimos temporibus reprehenderit distinctio. Ipsam laudantium explicabo sed ratione nisi officiis
            eveniet! Repellat architecto eos aut, ipsum laborum ratione?
          </p>
        </div>
      </div>
    </Link> 
  </div>
  <div class="container artikel">
    <Link to="/" class="text-decoration-none">
      <div class="perArtikel">
        <div>
            <img class="img-project" src="img/Business.jpg" alt="Artikel" />
        </div>
        
        <div class="textArtikel">
          <h3>Web Design</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi eaque officiis dignissimos temporibus reprehenderit distinctio. Ipsam laudantium explicabo sed ratione nisi officiis
            eveniet! Repellat architecto eos aut, ipsum laborum ratione?
          </p>
        </div>
      </div>
    </Link> 
  </div>
  </body>

        );
    };
    export default project;