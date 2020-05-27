import React, { Component } from 'react';
import './home.scss';
import logocentru from './logocentru.png';
import imagineLeft from './imagine-stanga.jpg';
import imagineRight from './imagine-dreapta.jpg';

class Home extends Component {
    render() {
        return (
            <div>

            <div className="slider">

			<div className="slide current">	
				<div className="logocentrudiv">
					<img src={logocentru}/>
				</div>
			</div> 

            <div className="slide">
				<div className="logocentrudiv">	
					<img src={logocentru} />
				</div>
			</div>

			<div className="slide">
				<div className="logocentrudiv">	
					<img src={logocentru} />
				</div>
			</div>

		    </div>

		    <div className="buttons">
				<button id="prev"><i className="fas fa-arrow-left"></i></button>
				<button id="next"><i className="fas fa-arrow-right"></i></button>
		    </div>
                
                <div className="spatiu">
                </div>

            <div className="firstpart">

            	<div className="firstpartpoze">
            	<img src={imagineLeft} className="img1" />
            	<img src={imagineRight} className="img2" />
            	</div>

            	<div className="firstparttext">
            		<h1>Terasa Monaco</h1>
            		<h2>„Mici, Bere si Liniste”</h2>
            		<h3>Aici este locul unde prânzul e gustos și serile relaxate. La noi te simți ca la un prieten drag acasă. Bucătăria e deschisă, poți să vezi cum îți gătim felurile preferate, grădina e un refugiu ferit de agitația orașului. Cu mult drag și dedicare pentru tine.</h3>
            		<a href="meniu.html"><button className="btn">Vezi Meniu</button></a>
            		<a href="contact.html"><button className="btn">Vezi Locatie</button></a>
            	</div>

            </div>

            </div>
        )
    }
}

export default Home;
