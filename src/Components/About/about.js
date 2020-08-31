import React from 'react';
import family from "./img/family.jpg";
import './about.css';

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section className="about">
                <div className="about_card">
                    <h1 className="about_title">Who am I?</h1>
                    <h2 className="about_subtitle">Computer Science student and Software Engineer</h2>
                    <div className="about_body">
                        <p className="about_text">I am an ambitious Computer Science student in Trinity College Dublin with professional experience as a
                        Software Engineering Development Intern at Amazon Web Services (AWS).<br/>Studying Computer
                        Science has allowed me to marry my interests in technology, problem-solving and innovation. I am
                        particularly interested in pursuing a career in machine learning in the future and I have
                        completed many software engineering projects in my spare time.<br/>I was selected as one of 36
                        Naughton Foundation scholars nationwide in 2018. This scholarship is worth €20,000 and is awarded
                        on the basis of demonstrated leadership skills and academic success in the Leaving Certificate. The Naughton
                        Foundation scholarship was established to encourage young people to study STEM subjects in
                        universities throughout Ireland.<br/>In 2017, I won the National Rotary Youth Leadership Development
                        Competition. This competition recognises leadership potential in young people and is conducted
                        through a series of intense interviews, covering topics such as immigration and climate change.
                        In the same year, I served as an Irish Youth Delegate to the European Parliament at a Euroscola
                        event, where I was elected spokesperson for Climate Action and Green Energy.</p>
                        <div className="about_image_wrapper"><img src={family} alt="Eoin Pinaqui and his family" className="about_image" /></div>
                    </div>
                </div>
            </section>
        );
    }
}