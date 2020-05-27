import React, { Component } from 'react';
import './footer.scss';
import logoselgros from './logo-selgros.png';
import logoleft from './logocentru.png';

class Footer extends Component {
    render() {
        return (
            <div>

    <div className="footer">

	    <div className="footer1">
	    	<img src={logoleft} />
	    </div>

	    <div className="footer2">
	    	<h5><i className="far fa-clock"></i> Program</h5>
	    	<p>Luni-Vineri 17:00 - 23:00</p>
	    	<p>Sambata-Duminica 15:00 - 23:00</p>
	    </div>

	    <div className="footer3">
	    		<h5><a href="contact.html"><i className="fas fa-map-marker-alt"></i> Locatie</a></h5>
	    		<p>Faleza Inferioara</p>
	    		<p>Galati</p>
	    		<p><a href="contact.html"><i className="fas fa-chevron-right"></i> Spre harta</a></p>
	    </div>

	    <div className="footer4">
	    	<h5><i className="fab fa-facebook-f"></i> Facebook</h5>
	    	<div className="fb-page" data-href="https://www.facebook.com/Club-Nautic-Monaco-Galati-1151179901575682/" data-tabs="" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Club-Nautic-Monaco-Galati-1151179901575682/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Club-Nautic-Monaco-Galati-1151179901575682/">Club Nautic Monaco Galati</a></blockquote></div>
	    </div>

	    <div className="footer5">
	    	<h5><i className="far fa-handshake"></i> Parteneri</h5>
	    	<a href="https://www.selgros.ro/" title="www.selgros.ro" target="get_blank"><img src={logoselgros} /></a>
	    </div>

    </div>

    <div className="design">

    </div>

    <div id="fb-root"></div>

            </div>

        )
    }
    
}

export default Footer;



