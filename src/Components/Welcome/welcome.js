import React from 'react';
import headshot from "./img/headshot.jpg";
import './welcome.css';

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section className="welcome">
                <div className="welcome_card">
                    <img src={headshot} alt="Eoin Pinaqui" className="welcome_img" />
                    <h1 className="welcome_title">Hello! I'm <strong>Eoin Pinaqui.</strong></h1>
                </div>
            </section>
        );
    }
}