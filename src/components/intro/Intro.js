import React from 'react';
import TextLoop from 'react-text-loop';
import './Intro.css';

//Hello. My name is Christian,{"\n"} and I'm the {" "}

const Intro = () => {

    return (
        <div id="hero" className="jumbotron">

            <h1 className="">
                Hello. My name is Christian,<br />and I'm the {" "}
                <TextLoop className="highlighted-text">
                    <span>Software Engineer</span>
                    <span>Website Developer</span>
                    <span>Person</span>
                </TextLoop>{" "}
                you need!
            </h1>


        </div>
    );
    
}

export default Intro;