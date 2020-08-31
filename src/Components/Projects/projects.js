import React from "react";
import './projects.css';
import flappy from './img/flappy.gif';
import sorting from './img/sorting.gif';
import puzzle from './img/puzzle.gif'
import processor from './img/processor.PNG';

export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section className="projects">
                <div>
                    <h1 className="projects_title">Projects that I'm proud of</h1>
                </div>
                <div className="project_card">
                    <h1 className="project_title">AI for Flappy Bird</h1>
                    <div className="project_body">
                        <p className="project_text_beside">Machine learning is an area of computer science that fascinates me. Unfortunately, my university
                            does not offer any courses in this area until fourth year. I simply could not wait until then, so I
                            decided to create this project!<br/>This project uses NeuroEvolution of Augmenting Topologies (NEAT)
                            to train the AI clients. On simple tasks, the NEAT algorithm often arrives at effective networks more
                            quickly than other contemporary neuro-evolutionary techniques and reinforcement learning modules.
                            <br/>This project is written in Python and uses the pygame module
                            to recreate the Flappy Bird game environment. The AI client uses the python-neat module to create
                            the neural networks that play the game.<br/>
                            <div className="btn_wrapper"><a href="https://github.com/eoinpinaqui/FlappyBird-AI" target="_blank" className="btn">See this project on Github.</a></div></p>
                        <div className="project_image_beside_wrapper"><img src={flappy} alt="AI for Flappy Bird" className="project_image_beside" /></div>
                    </div>
                </div>
                <div className="project_card">
                    <h1 className="project_title">Sorting Visualiser</h1>
                    <div className="project_body">
                        <p className="project_text">After completing my Algorithms and Data Structures module in college, I wanted to deepen
                            my understanding of the algorithms that we had studied. I also wanted to explore new front-end technologies to broaden
                            web-development skills. Making this sorting visualiser allowed me to kill both of those birds with the one stone!<br />
                            This project visualises 6 sorting algorithms, Quick sort, Merge sort, Tim sort, Insertion sort, Selection sort and Bubble sort.
                            <br/>This project was my first venture into the React.js framework. I am glad to have added React.js to my
                            tool-belt and I am excited to work on more visually appealing web applications in the future.
                            <div className="btn_wrapper"><a href="https://github.com/eoinpinaqui/sorting" target="_blank" className="btn">See this project on Github.</a></div>
                            <div className="btn_wrapper"><a href="https://eoinpinaqui.github.io/sorting/" target="_blank" className="btn">Visit the web page.</a></div></p>
                        <div className="project_image_wrapper"><img src={sorting} alt="Sorting Visualiser" className="project_image" /></div>
                    </div>
                </div>
                <div className="project_card">
                    <h1 className="project_title">Rubik's Cube Visualiser</h1>
                    <div className="project_body">
                        <p className="project_text_beside">I have been obsessed with Rubik's cubes ever since I was a child. My
                            record is around 19 seconds for a single solve. It is not always practical to bring my
                            Rubik's cube around with me, so I decided to make a digital one that I will always have on me!<br />
                            This project uses Processing, a programming language that is based on Java with a focus on visualisation.
                            Users can scramble the cube and attempt to solve it themselves. If they ever get stuck, they can just
                            press the space bar and watch the puzzle solve itself before their very eyes.
                            <div className="btn_wrapper"><a href="https://github.com/eoinpinaqui/rubiks-cube-visualiser" target="_blank" className="btn">See this project on Github.</a></div>
                            </p>
                        <div className="project_image_beside_wrapper"><img src={puzzle} alt="Rubik's Cube Visualiser" className="project_image_beside" /></div>
                    </div>
                </div>
                <div className="project_card">
                    <h1 className="project_title">Microcoded Instruction Set Processor</h1>
                    <div className="project_body">
                        <p className="project_text_beside">This assignment was worth 70% of my overall grade in my Computer Architecture 1 module in college. I received a grade
                            of 98% on this VHDL implementation. This project simulates a microcoded instruction set processor that can perform arithmetic,
                            logic and shifting operations, as well as conditional/unconditional branching by reading in user-provided machine code from memory.
                            <br />All of the components that are used in this project have test-benches associated with them to ensure functionality is correct.
                            <div className="btn_wrapper"><a href="https://github.com/eoinpinaqui/processor_vhdl" target="_blank" className="btn">See this project on Github.</a></div>
                        </p>
                        <div className="project_image_beside_wrapper" ><img src={processor} alt="Processor schematic" className="project_image_beside" /></div>
                    </div>
                </div>
            </section>
        );
    }
}