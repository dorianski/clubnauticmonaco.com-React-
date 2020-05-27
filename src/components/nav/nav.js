import React, { Component } from 'react'
import './nav.scss';

class Nav extends Component {
    render() {
        return (
                
                <div id="navbar">

		        <div className="liniesus">
				    <div className="liniesus1">
				    	<p><i className="fas fa-map-marker-alt"></i> Faleza Inferioara dana 8 Port Galati</p>
				    </div>
				    <div className="liniesus2">
				    	<ul>
				    		<li><i className="far fa-clock"></i> Luni-Vineri 17:00 - 23:00 </li>
				    		<li><i className="far fa-clock"></i> Sambata-Duminica 15:00 - 23:00 </li>
				    	</ul>
				    </div>
		        </div>
		
		        <nav>
				    <div className="logo">
				    	<h4><a href="index.html">Monaco</a></h4>
				    	<p><a href="index.html"><img src="img/logocentru.png" /></a></p>
				    </div>

				    <ul className="nav-links">
				    	<li><a href="index.html">Home</a></li>
				    	<li><a href="meniu.html">Meniu</a></li>
				    	<li><a href="galerie.html">Galerie</a></li>
				    	<li><a href="contact.html">Contact</a></li>
				    </ul>
            
				    <div className="burger">
				    	<div className="line1"></div>
				    	<div className="line2"></div>
				    	<div className="line3"></div>
				    </div>
		        </nav>

                </div>
        )
    }
}

export default Nav;
