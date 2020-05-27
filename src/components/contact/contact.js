import React, { Component } from 'react';
import './contact.scss';

class Contact extends Component {
    render() {
        return (
            <div>

        <div className="main">
            <div className="titluwrap">
                <h1>Contact</h1>
            </div>
        </div>
                                <div className="content">
                                    <div className="contenttext">
                                        <h2>Locatie</h2>
                                        <p>Faleza Inferioara</p>
                                        <p>Dana 8, Port Galati</p>
                                        <p>Romania</p>
                                        <h2>Program</h2>
                                        <h3>Luni -  Vineri </h3>
                                        <p>17:00 23:00</p>
                                        <h3>Sambata -  Duminica </h3>
                                        <p>15:00 23:00</p>
                                    </div>
                                    <div className="harta">
                                        
                                    </div>
                                </div>       
            </div>
        )
    }
}

export default Contact;